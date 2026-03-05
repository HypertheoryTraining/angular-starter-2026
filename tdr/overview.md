# TDR: Use a Documented Starter Application for Angular Courses

**Status:** Accepted
**Date:** 2025-01-01

## Context

When teaching Angular, each class or workshop begins with bootstrapping a project. Without a shared starting point, time is lost on setup, tooling decisions are made inconsistently between cohorts, and students spend cognitive effort on infrastructure rather than on learning Angular itself.

Additionally, the starter needs to reflect *real-world* practices — not a minimal toy example — so that patterns taught in class carry over directly to professional work.

## Decision

We will maintain a single, well-documented Angular starter application that:

- Reflects current best practices for Angular application architecture
- Is kept up to date with the latest stable Angular version
- Documents its own decisions as TDRs so students learn both *what* is set up and *why*
- Serves as a living reference — students can return to it after the class

## Consequences

**Benefits:**
- Students spend class time on Angular concepts, not project scaffolding
- Decisions made in the starter are explicit and teachable, not mysterious
- The starter itself models the practices it promotes (structure, testing, tooling)
- TDRs give students a concrete example of the ADR practice they should adopt on their own projects

**Trade-offs:**
- The starter must be actively maintained; it can fall out of date with Angular releases
- Some choices made for the starter (e.g. specific libraries) may not match every organization's preferences — students need to understand the *reasoning* so they can make their own calls

## Alternatives Considered

**Use a minimal `ng new` project each time.** This avoids maintenance burden but forces re-explaining the same decisions in every class, and gives students no reference for practices beyond the basics.

**Use a third-party starter kit.** Third-party starters tend to be opinionated in ways that conflict with what is being taught, and their decisions are rarely explained. Owning the starter means every decision is documented and intentional.
