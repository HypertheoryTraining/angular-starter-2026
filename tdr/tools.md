# TDR: Use a Scaffold Script for New Landing Features

**Status:** Accepted
**Date:** 2025-01-01

## Context

The [project structure TDR](./project-structure.md) defines a consistent pattern for organizing code into areas and features. Every new landing feature follows the same starting shape: a route file, a feature component, and an internal pages directory.

Without tooling, developers either:
- Manually create each file and directory (error-prone, tedious, inconsistent)
- Copy-paste an existing feature and forget to rename things (leads to confusing names and hard-to-find bugs)

The Angular CLI `ng generate` command covers component and service generation, but doesn't know about our specific area/feature structure or naming conventions.

## Decision

We will provide a `scaffold.sh` script (also runnable via `npm run scaffold`) that generates the boilerplate for a new landing feature inside an existing area.

### Usage

1. Ensure the area already exists (e.g. `src/app/areas/food`)
2. Run the scaffold command:

```sh
npm run scaffold
# or directly:
./scaffold.sh
```

3. Select the target area (e.g. `food`)
4. Provide the feature name (e.g. `pizza`)

The script generates the correct files and folders following the established structure, with all names applied consistently.

### Implementation Details

- The script uses [simple-scaffold](https://github.com/chenasraf/simple-scaffold) with templates stored in `.templates/`
- `.templates/` is hidden in VS Code via `.vscode/settings.json` to reduce noise in the file explorer
- Templates use the provided name and area to generate consistent file names and Angular class names

## Consequences

**Benefits:**
- New features always start with the correct structure — no manual setup errors
- Naming is applied consistently across the generated files
- Onboarding is faster; developers can generate a working feature shell in seconds
- The templates can be updated if the structure evolves, and all future scaffolds will reflect the change

**Trade-offs:**
- The `.templates/` directory must be kept in sync with the actual expected structure — if the structure changes and templates aren't updated, scaffolded code will be wrong
- `simple-scaffold` is an additional dependency; if it becomes unmaintained, the script will need to be rewritten
- The script covers only landing features within existing areas — other generation patterns (new areas, data modules, util modules) still require manual creation

## Alternatives Considered

**Angular CLI schematics.** The official extensibility mechanism for `ng generate`. More powerful and deeply integrated, but significantly more complex to author and maintain. Worth the investment for a published library; over-engineered for a starter app.

**Nx generators.** Similar to Angular schematics but with Nx-specific tooling. Same tradeoff — powerful but adds Nx as a dependency.

**Copy-paste with documentation.** The zero-tooling approach. Works for experienced developers but is error-prone for students and new team members who don't yet have the structure internalized.
