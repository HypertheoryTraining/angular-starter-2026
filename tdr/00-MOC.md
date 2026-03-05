# Map of Content — Technical Discussion Records

> See [tdr.md](./tdr.md) for the TDR format, template, and terminology.

---

## Meta

| File | Summary | Status |
|------|---------|--------|
| [tdr.md](./tdr.md) | What TDRs are, the template, and terminology (prefer/use/must) | Accepted |
| [overview.md](./overview.md) | Why this starter app exists and what it's trying to model | Accepted |

---

## Application Architecture

| File | Summary | Status |
|------|---------|--------|
| [project-structure.md](./project-structure.md) | Area/domain-based folder layout; module types (feature, ui, data, util); access rules | Accepted |
| [boundaries.md](./boundaries.md) | Why module boundaries must be enforced by tooling, not convention; the boundary rules | Accepted |
| [sheriff.md](./sheriff.md) | Using Sheriff (ESLint plugin) to enforce boundaries; barrel-less imports; CLI commands | Accepted |

---

## Dependencies & Tooling

| File | Summary | Status |
|------|---------|--------|
| [packages.md](./packages.md) | Key library choices: Tailwind/DaisyUI, ng-icons, NgRx Signals, MSW, Hey API, Sheriff | Accepted |
| [tools.md](./tools.md) | Scaffold script (`npm run scaffold`) for generating new landing features | Accepted |

---

## Testing

| File | Summary | Status |
|------|---------|--------|
| [testing.md](./testing.md) | Layered strategy: when to use unit tests vs system tests; MSW's role across both | Accepted |
| [testing-unit.md](./testing-unit.md) | Vitest for unit and unit-integration tests; what to prioritize; why not Karma/Jest | Accepted |
| [testing-system.md](./testing-system.md) | Playwright for system tests; MSW + Playwright integration; what to test at this layer | Accepted |

---

## Changelog

> Record additions, deletions, and significant updates here.

| Date | File | Change |
|------|------|--------|
| 2026-03-04 | All | Initial structure applied; `structure.md` deleted and merged into `project-structure.md` |
