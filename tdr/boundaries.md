# TDR: Enforce Explicit Module Boundaries Between Areas

**Status:** Accepted
**Date:** 2025-01-01

## Context

The [project structure TDR](./project-structure.md) defines areas (domains) and rules about which modules can use which. But defining rules in a document is not the same as enforcing them. Without enforcement:

- Developers inadvertently import from another area and don't notice until the coupling causes a problem weeks later
- The rules exist only as "trust me" guidance, not as a verifiable constraint
- Code reviews are the only gate, and reviewers are human

In software, *low coupling* means the freedom to change your mind, get smarter, and respond to the business — without unintended consequences breaking other code. Coupling that isn't visible is coupling that accumulates silently.

## Decision

We will enforce module boundary rules as part of the lint step so that violations are visible immediately in the IDE and in CI.

The boundary rules are:

| | Tag | Allowed to access |
|---|---|---|
| 1 | `root` | anything |
| 2 | `area:*` | same area, `area:shared` |
| 3 | `type:feature` | `type:ui`, `type:data`, `type:util` |
| 4 | `type:ui` | `type:data`, `type:util` |
| 5 | `type:data` | `type:util` |
| 6 | `type:util` | nothing outside its module |

Additionally, anything placed in a folder named `internal/` is private to its containing module — it cannot be accessed from outside, regardless of what other rules would otherwise permit.

See [Sheriff](./sheriff.md) for how these rules are implemented with tooling.

## Consequences

**Benefits:**
- Violations are caught immediately in the IDE (red squiggles), not in code review or production
- The rules are machine-verifiable — no relying on reviewer vigilance
- Developers get a clear signal when they're about to create unintended coupling, prompting a deliberate decision about whether to share code or not
- The `internal/` convention gives TypeScript a workable substitute for "package-private" visibility

**Trade-offs:**
- There is an initial learning curve — new developers encounter lint errors they don't immediately understand
- Legitimate sharing between areas requires going through `shared/`, which can feel like extra ceremony for small cases
- The enforcement is at the ESLint level, not the TypeScript compiler level — it can technically be bypassed with `// eslint-disable`

## Alternatives Considered

**Convention only (no enforcement).** Relies entirely on developer discipline and code review. Works on small teams for a while, degrades as the team or codebase grows.

**Nx with buildable libraries.** Enforces boundaries at the build level, making violations fail the build rather than just lint. More airtight, but introduces significant tooling complexity (Nx workspace, project graph, build orchestration). Appropriate for very large organizations; over-engineered for most teams.

**TypeScript path aliases + barrel-only imports.** Can create a "surface area" convention by only exporting from `index.ts` files. Doesn't actually prevent reaching into internal files; it's still just a convention, not enforcement.
