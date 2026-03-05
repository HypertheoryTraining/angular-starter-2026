# TDR: Key Package and Dependency Choices

**Status:** Accepted
**Date:** 2025-01-01

## Context

Every NPM dependency is a liability as well as an asset. It adds to bundle size, introduces a maintenance surface, and creates potential security and licensing exposure. The principle applied here is:

> **Be conservative and deliberate about taking on NPM dependencies.** Using a shared library is always an expedient — make sure it is worth it before you take on a dependency.

The packages below were chosen for specific, reasoned purposes. Each one earns its place.

## Decision

We will use the following packages, grouped by concern:

### Styling: Tailwind CSS + DaisyUI

- `@tailwindcss/forms` — sensible default styles for form elements
- `@tailwindcss/typography` — the `prose` class for rendering markdown/rich text
- `daisyui` — a component class library on top of Tailwind ([DaisyUI](https://daisyui.com))

**Why Tailwind?** Utility-first CSS eliminates the overhead of naming CSS classes for every component and avoids specificity conflicts. **Why DaisyUI?** Provides semantic component classes (`btn`, `card`, `modal`, etc.) on top of Tailwind without requiring JavaScript — styles are composable and themeable.

### Icons: ng-icons + Lucide

- `@ng-icons/core`
- `@ng-icons/lucide`

[Lucide](https://lucide.dev/icons/) provides a clean, consistent open-source icon set. `ng-icons` wraps it for Angular with tree-shaking support — only the icons you actually use end up in the bundle.

### State Management: NgRx Signals

- `@ngrx/signals`
- `@ngrx/operators`

**Why NgRx Signals?** Angular's own `Signal` primitive (introduced in Angular 17) provides reactive state at the component level. `@ngrx/signals` extends this with `signalStore` — a structured, opinionated way to manage feature-level state without the boilerplate of the older NgRx action/reducer/effect model. It integrates naturally with Angular's reactivity system and has no separate Redux DevTools dependency for basic use.

### API Type Generation: Hey API

- `@hey-api/openapi-ts`

**Why code generation?** Manually maintaining TypeScript types that mirror a backend OpenAPI spec is error-prone and tedious. Hey API generates types (and optionally Zod schemas) from an OpenAPI spec automatically.

Usage: place an OpenAPI spec at `/open-api-specs/specification.json` and run `npm run generate:api`. Output goes to `src/areas/shared/api/`. A sample Petstore spec is included to demonstrate the workflow.

### API Mocking: Mock Service Workers (MSW)

- `msw` — intercepts HTTP requests at the service worker level during development
- `@msw/playwright` — integrates MSW with Playwright for system tests

**Why MSW?** MSW intercepts requests at the network level (via a service worker in the browser), so your Angular code runs exactly as it would in production — there's no stubbing of `HttpClient` or Angular services. The same mock handlers can be reused across manual development and automated tests.

### Developer Documentation: ngx-markdown

- `ngx-markdown`
- `marked`
- `prismjs`
- `clipboard`

Used in the in-app developer documentation viewer (`/dev` area). `ngx-markdown` renders markdown as Angular components with syntax highlighting via Prism and clipboard copy buttons.

### Module Boundary Enforcement: Sheriff

- `@softarc/sheriff-core`
- `@softarc/eslint-plugin-sheriff`
- `@softarc/detective` *(optional)*

See [Sheriff TDR](./sheriff.md) for full details.

### Testing

- `@playwright/test` — system (end-to-end) tests. See [System Testing TDR](./testing-system.md)
- `vitest`, `@vitest/ui`, `@vitest/coverage-v8` — unit and integration tests. See [Unit Testing TDR](./testing-unit.md)

## Consequences

**Benefits:**
- Each package has a clear, documented reason for being here — no mystery dependencies
- The combination of Tailwind + DaisyUI + ng-icons provides a complete, consistent UI toolkit without custom CSS
- NgRx Signals gives students a current, idiomatic pattern for state management that will transfer to professional projects
- MSW enables realistic API simulation without coupling tests to Angular internals

**Trade-offs:**
- Tailwind generates a lot of utility classes in templates — templates can look verbose to those unfamiliar with the approach
- NgRx Signals is relatively new (the API stabilized in Angular 18/19); some patterns are still evolving
- Hey API adds a code generation step; generated files must not be manually edited

## Alternatives Considered

**Angular Material** for UI components: Well-known and officially maintained, but opinionated in ways that conflict with Tailwind. Mixing the two is possible but awkward. DaisyUI is lighter and more composable.

**NgRx Store (action/reducer/effects)** for state: The "classic" NgRx approach is still valid for complex event sourcing scenarios, but the boilerplate cost is high for typical CRUD features. `signalStore` covers 90% of use cases with far less ceremony.

**Orval or openapi-generator** for API generation: Both are valid alternatives to Hey API. Hey API was chosen for its clean TypeScript output and Zod schema generation support.
