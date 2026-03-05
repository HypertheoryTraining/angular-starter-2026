# TDR: Use an Area/Domain-Based Project Structure

**Status:** Accepted
**Date:** 2025-01-01

## Context

Large Angular applications are worked on by teams where multiple developers are concurrently building different parts of the system. Without intentional structure, codebases drift toward a "flat" or "type-based" layout (all components together, all services together, etc.), which:

- Makes it hard to reason about the scope of a change
- Creates frequent merge conflicts as developers touch shared files
- Couples unrelated features, making independent deployment and testing difficult
- Gives developers no "safe zone" to iterate freely

The [Angular Style Guide](https://angular.dev/style-guide) provides baseline guidance, and the post [Modern Architectures with Angular](https://www.angulararchitects.io/en/blog/modern-architectures-with-angular-part-1-strategic-design-with-sheriff-and-standalone-components/) articulates a scalable evolution of it.

## Decision

We will structure the application source code around *areas* (also called *domains*), where each area is a bounded world with its own language and its own code. No area can reach into another area's code except through explicitly shared code.

### Folder Layout

```
/src/
  /app/
    /areas/
      /home/
        /feature-landing/
          /internal/
            /pages/
              home.ts
              about.ts
          home.routes.ts
      /profile/
        /feature-landing/
      /shared/
        /ui-common/
        /util-validation/
  app.ts
  app.routes.ts
  app.config.ts
```

### Module Types Within an Area

Each area can contain:

| Module Type | Path Pattern | Purpose |
|---|---|---|
| Feature | `areas/<area>/feature-<name>` | Routed, "smart" components — the deliverable |
| UI | `areas/<area>/ui-<name>` | Presentational components shared across features in this area |
| Data | `areas/<area>/data` | View models, stores, services shared across features in this area |
| Util | `areas/<area>/util-<name>` | Pure functions, pipes, guards used across this area |

### Access Rules

- **`app` (root)** can access anything, but *should* only access `node_modules`, `shared/*`, and `<area>/feature-<name>`
- **An area** can only access its own modules and anything in `shared/*`
- **Within an area:** features can use ui/data/util; ui can use data/util; data can use util; util uses nothing outside itself
- **`internal/` folders** are private to their containing module — not accessible from anywhere else

See [Module Boundaries](./boundaries.md) and [Sheriff](./sheriff.md) for how these rules are enforced.

## Consequences

**Benefits:**
- Developers can work in their area without worrying about breaking other areas
- Merge conflicts are minimized — work in different areas rarely touches the same files
- Lazy loading of features by area reduces initial bundle size and isolates cache invalidation
- The structure maps to how organizations actually divide work (by business domain, not by technical layer)
- The `internal/` convention gives TypeScript projects a way to simulate "package-private" visibility

**Trade-offs:**
- More directories and indirection than a flat structure — there is an upfront cost to learning the layout
- Some code that *feels* like it should be shared may not be, requiring more deliberate decisions
- "Eliminating duplication" is explicitly *less* important than minimizing coupling — some repetition across areas is acceptable and intentional

## Alternatives Considered

**Type-based structure** (all components together, all services together): Simple to understand at small scale but breaks down as the app grows. A change to a shared service can have unpredictable ripple effects. Developers have no clear "home".

**Feature folders without area grouping**: Better than type-based, but without the area boundary, features can still reach into each other, and the application has no natural way to model the delivery cadence differences between domains.

**Angular libraries (Nx monorepo style)**: Enforces boundaries at the build tool level. A valid choice for very large teams, but introduces significant tooling complexity. This structure achieves most of the same benefits with lower overhead, especially for smaller teams and for teaching.
