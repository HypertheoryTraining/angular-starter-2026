# TDR: Use Playwright for System Testing

**Status:** Accepted
**Date:** 2025-01-01

## Context

System tests (also called end-to-end tests) verify that the full application works correctly from a user's perspective — navigating to a page, interacting with UI, and observing the result. They are the highest-confidence tests because they exercise the real application in a real browser.

The key challenges with system tests are:
- They require a running application (or a test-controlled server)
- API calls go out to real (or mocked) backends — which must be controlled to make tests deterministic
- They are slower than unit tests and can be flaky if not written carefully

We need a system test tool that: runs real browsers, integrates well with Angular, supports API interception, and is actively maintained.

## Decision

We will use [Playwright](https://playwright.dev) (`@playwright/test`) for system tests, with `@msw/playwright` for API interception.

### Running Tests

```sh
# Run all system tests (headless)
npm run e2e

# Run with the Playwright UI (interactive test runner, step-through, time-travel)
npm run e2e:ui
```

### Writing Tests

Tests live in the `e2e/` directory. A typical test:

```ts
import { test, expect } from '@playwright/test';

test('home page shows welcome message', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Welcome')).toBeVisible();
});
```

### API Interception with MSW

System tests use `@msw/playwright` to register MSW handlers. This means:
- The Angular application makes real `fetch`/XHR requests
- MSW intercepts them at the service worker level before they leave the browser
- Tests control what the API returns without hitting a real backend

This keeps tests deterministic and fast while exercising the full HTTP stack inside the application.

### Scaffolding

The `playwright-ng-schematics` package provides `ng generate` schematics for adding Playwright configuration to an Angular project. It was used to set up the initial Playwright configuration in this project.

### What to Test at This Layer

System tests are most valuable for:
- **Happy-path user flows** — the primary scenario for each major feature
- **Navigation and routing** — that routes resolve, guards work, lazy-loaded chunks load
- **Form submission flows** — that user input reaches the API (via MSW) and the UI responds correctly
- **Regression tests** — when a bug is found in production, a system test can capture the scenario

Avoid writing system tests for:
- Business logic that is already covered by unit tests
- Every permutation of a form (prefer unit tests for validation logic)

## Consequences

**Benefits:**
- Tests run in real Chromium, Firefox, and WebKit browsers — catches cross-browser issues
- Playwright UI mode provides time-travel debugging — see a screenshot of every step
- `@msw/playwright` reuses the same MSW handlers from development — no separate fixture layer to maintain
- Playwright generates test code from browser interaction (codegen mode: `npx playwright codegen`) — useful for quickly bootstrapping new tests
- The Angular team's own `playwright-ng-schematics` signals alignment with this direction

**Trade-offs:**
- System tests are inherently slower than unit tests — the full application must start, and tests interact with a real browser
- Tests are more susceptible to flakiness from timing issues — use Playwright's `expect` with auto-retry rather than arbitrary `waitForTimeout` calls
- MSW handlers must be kept current with the real API contract; stale handlers mean tests pass against a mock that no longer matches production

## Alternatives Considered

**Cypress.** A mature, well-documented system testing tool with excellent developer experience. Playwright was chosen over Cypress because: Playwright is faster (parallelizes across browsers natively), has better multi-browser support out of the box, and the Angular team has invested in `playwright-ng-schematics` directly.

**Angular's `TestBed` + `HttpClientTestingModule`.** Tests Angular components in a simulated environment without a real browser. Useful for unit-integration tests of individual components but does not replace system tests — it doesn't test routing, lazy loading, or cross-component interactions at the application level.

**Selenium / WebDriver.** Older, lower-level, and significantly more setup overhead. Not a reasonable choice for new projects.
