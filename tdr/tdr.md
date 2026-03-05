# Technical Discussion Records

Technical Discussion Records (TDRs) are adapted from [Architectural Decision Records (ADRs)](https://adr.github.io/) — a lightweight technique for documenting the *why* behind significant technical and architectural choices.

The goal is to make decision-making visible, shared, and recorded alongside the code it governs. When thinking evolves, TDRs should be updated and reviewed through whatever process the team uses.

## Why TDRs Matter

Every non-trivial codebase accumulates decisions — about structure, tooling, testing, boundaries. Without documentation, those decisions become invisible folklore: "We've always done it this way." TDRs make the reasoning explicit so that:

- New team members understand *why*, not just *what*
- Future decisions can reference prior reasoning
- Disagreements have a concrete artifact to discuss
- Changes to strategy are deliberate, not accidental

## Terminology

In TDR titles and body text:

- **Prefer** / **Consider** — guidance; treat as your default, but reasoned exceptions are permissible
- **Use** / **Must** — invariants; if you need to deviate, amend the TDR first and get it accepted

## TDR Status Values

- **Proposed** — under discussion, not yet adopted
- **Accepted** — the current position of this project
- **Deprecated** — previously accepted, no longer recommended
- **Superseded by [link]** — replaced by a newer TDR

## TDR Template

Use this template when writing a new TDR:

```markdown
# TDR: <Short, noun-phrase title of the decision>

**Status:** Proposed | Accepted | Deprecated | Superseded by [link]
**Date:** YYYY-MM-DD

## Context

What situation, constraint, or problem forces this decision?
What forces are at play (team size, delivery cadence, tooling, etc.)?

## Decision

We will... (active voice — state clearly what was decided)

## Consequences

**Benefits:**
- ...

**Trade-offs:**
- ...

## Alternatives Considered

What else was evaluated, and why was it not chosen?
```

## Index

| TDR | Topic | Status |
|-----|-------|--------|
| [Overview](./overview.md) | What this starter app is | Accepted |
| [Project Structure](./project-structure.md) | Area/domain-based folder layout | Accepted |
| [Module Boundaries](./boundaries.md) | Enforcing boundaries between areas | Accepted |
| [Sheriff](./sheriff.md) | Using Sheriff as the boundary enforcement tool | Accepted |
| [Packages & Dependencies](./packages.md) | Key library choices | Accepted |
| [Development Tools](./tools.md) | Scaffolding and developer tooling | Accepted |
| [Testing Strategy](./testing.md) | Layered testing approach | Accepted |
| [Unit & Integration Testing](./testing-unit.md) | Vitest for unit and component tests | Accepted |
| [System Testing](./testing-system.md) | Playwright for end-to-end system tests | Accepted |
