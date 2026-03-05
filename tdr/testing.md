# TDR: Use a Layered Testing Strategy

**Status:** Accepted
**Date:** 2025-01-01

## Context

Testing Angular applications well requires navigating a spectrum of trade-offs: tests that run fast give quick feedback but may not catch integration issues; tests that exercise the full stack are more realistic but are slower and more brittle.

A common failure mode is to have *either* too many low-level unit tests that don't catch real bugs *or* too many slow end-to-end tests that make the CI pipeline painful. Neither extreme serves the team well.

We also need to consider the cost of different kinds of regressions:
- A broken shared utility used across the app is high cost — worth testing thoroughly
- A feature-specific page component that has never been reused is lower cost — worth testing at the system level where the test is easy to write

## Decision

We will use a two-layer testing strategy, with different tools and different goals at each layer:

| Layer | Tool | Scope | Speed | Stability |
|---|---|---|---|---|
| Unit / Unit-Integration | Vitest | Individual functions, components, stores; shared code | Fast | High |
| System | Playwright | Full application, browser-level user flows | Slower | Moderate |

### Where to Focus Each Layer

**Unit / Unit-Integration tests** are most valuable for:
- Code in `shared/` — because changes there ripple across the whole app
- Pure utility functions and stores — deterministic, easy to exercise exhaustively
- Components with complex logic — where the interaction model is non-trivial

**System tests** are most valuable for:
- Happy-path user flows through features — proving the route, page, and API integration work together
- Regression coverage for bugs that were found in production
- Areas where the unit test would require excessive mocking to be meaningful

See [Unit & Integration Testing](./testing-unit.md) and [System Testing](./testing-system.md) for tool-specific decisions.

### The Role of MSW

Both layers use [Mock Service Worker (MSW)](https://mswjs.io) to simulate API responses. MSW intercepts HTTP requests at the network level:

- During development, a service worker intercepts browser requests — the Angular app behaves as if the real API is present
- During Playwright system tests, `@msw/playwright` provides the same interception at the test level

This means there is no stubbing of Angular's `HttpClient` or any Angular service. The application code runs unchanged in both real and test environments.

## Consequences

**Benefits:**
- Fast feedback loop for shared code via unit tests; realistic coverage of user flows via system tests
- MSW means test code doesn't need to know about Angular's HTTP internals — tests are closer to how the app actually works
- The two layers can be run independently: `npm test` for unit, `npm run e2e` for system
- Developers can choose the right tool for the job rather than forcing everything into one paradigm

**Trade-offs:**
- Maintaining MSW handlers is its own discipline — handlers must be kept in sync with the real API
- System tests are inherently slower than unit tests and require a running application (or a local dev server)
- The strategy requires discipline to avoid writing too many unit tests for feature-specific code that is better covered at the system level

## Alternatives Considered

**TestBed-based Angular component testing (Jasmine/Karma).** The Angular CLI default. Jasmine/Karma is being deprecated in favor of Vitest in the Angular ecosystem. TestBed tests for application code tend to require significant setup boilerplate and mock Angular modules, which makes them brittle.

**Test everything with Playwright (no unit tests).** Simpler toolchain, but Playwright tests are slow and can be flaky. For shared utility code and stores, unit tests are faster and give more precise failure messages.

**Cypress instead of Playwright.** Cypress is a valid alternative and has excellent documentation. Playwright was chosen because it is faster, has better multi-browser support, and is the direction the Angular team is moving with `playwright-ng-schematics`.
