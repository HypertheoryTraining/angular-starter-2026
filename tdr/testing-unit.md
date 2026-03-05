# TDR: Use Vitest for Unit and Unit-Integration Testing

**Status:** Accepted
**Date:** 2025-01-01

## Context

Angular projects have historically used Jasmine + Karma as the default unit testing setup. However:

- Karma has been officially deprecated by the Angular team
- Jasmine + Karma runs tests in an actual browser via a test runner, which adds significant startup overhead
- Angular's own migration path and the Angular CLI's new `@angular/build` builder point toward Vitest as the successor
- Vite (the build tool powering Angular's modern dev server) has native Vitest integration — tests run in the same environment as development

The question is not *whether* to move away from Karma, but *to what*.

## Decision

We will use [Vitest](https://vitest.dev) for unit and unit-integration tests.

### Running Tests

```sh
# Run all unit tests (watch mode)
npm test

# Run with the Vitest UI (visual test explorer in the browser)
npm run test:ui

# Run tests once with coverage report
npm run test:coverage
```

### What to Test at This Layer

**Unit tests** — test a single function, class, or store in isolation. No Angular TestBed required.

```ts
// Example: testing a pure utility function
import { describe, it, expect } from 'vitest';
import { formatCurrency } from './format-currency';

describe('formatCurrency', () => {
  it('formats a number as USD', () => {
    expect(formatCurrency(1234.5)).toBe('$1,234.50');
  });
});
```

**Unit-integration tests** — test a component or store with real Angular dependencies (signals, inputs, outputs), but with the API layer mocked via MSW. These use Angular's `TestBed` when necessary, but prefer the lighter Vitest environment where possible.

### Priority: Test Shared Code

The most valuable target for unit tests is code in `shared/` — utilities, stores, and UI components shared across the whole application. Because changes to shared code have application-wide impact, they warrant the most thorough testing.

Feature-specific components (things in `feature-<name>/`) are typically better covered by system tests where the full user flow is exercised without needing to understand Angular internals.

### Coverage

Running `npm run test:coverage` produces a V8-based coverage report. We track coverage as a *signal*, not a *target* — 100% coverage on the wrong things is worse than 80% coverage on the right things.

## Consequences

**Benefits:**
- Vitest starts nearly instantly (no browser spin-up) — fast feedback during development
- The same Vite configuration used for development is used for tests — no separate Webpack/Karma config to maintain
- Vitest UI provides a visual test explorer that makes it easy to run, filter, and debug individual tests
- Coverage with `@vitest/coverage-v8` uses V8's native instrumentation — fast and accurate

**Trade-offs:**
- Angular's `TestBed` still requires some boilerplate for component tests; Vitest doesn't eliminate this, it just runs it faster
- Some legacy Angular testing patterns (e.g., `async/fakeAsync`) may behave differently under Vitest — check the Angular + Vitest compatibility notes when in doubt
- Vitest is not yet the Angular CLI default for all project types — the configuration lives in `vite.config.ts` and must be maintained

## Alternatives Considered

**Jest.** Popular across the JavaScript ecosystem and supported by `@angular-builders/jest`. However, Jest uses a custom JS runtime (jsdom) rather than a real browser environment, which can cause subtle differences. Vitest is faster, has native ESM support, and has better alignment with Vite.

**Karma + Jasmine (the old default).** Officially deprecated. Not a forward-looking choice.

**Testing exclusively with Playwright.** System tests catch many bugs, but they are slow and imprecise for shared utility code. A broken `formatCurrency` function gives a much better error message from a Vitest unit test than from a Playwright test that shows "the price was displayed incorrectly".
