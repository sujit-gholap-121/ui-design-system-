# Roadmap

## Phase 1 — Foundation ✅

```mermaid
flowchart LR
  P1["Phase 1\nFoundation"]

  P1 --> a["pnpm + Turborepo monorepo"]
  P1 --> b["packages/ui\nButton component"]
  P1 --> c["apps/demo\nVite + React consumer"]
  P1 --> d["Shared tsconfig + eslint packages"]
  P1 --> e["TypeScript project references\n+ workspace TS for VS Code"]
  P1 --> f["pnpm strict isolation\n(no hoisting)"]
```

---

## Phase 2 — Design Tokens + More Components

```mermaid
flowchart LR
  P2["Phase 2\nTokens + Components"]

  P2 --> a["packages/tokens\nColors, spacing, typography\nas CSS vars + JS constants"]
  P2 --> b["packages/tailwind-config\nShared Tailwind preset\nwith design tokens"]
  P2 --> c["More components\nInput, Card, Badge\nDialog, Select, Toast"]
  P2 --> d["Component variants\nvia CVA patterns"]

  a -->|"feeds into"| b
  b -->|"used by"| c
```

---

## Phase 3 — Testing + Documentation

```mermaid
flowchart LR
  P3["Phase 3\nTesting + Docs"]

  P3 --> a["Vitest\nUnit tests per component"]
  P3 --> b["Storybook\nIsolated component playground\n+ auto-docs"]
  P3 --> c["Chromatic\nVisual regression testing\non every PR"]

  a --> d["packages/ui/src/\n*.test.tsx"]
  b --> e["packages/ui/src/\n*.stories.tsx"]
  c -->|"integrates with"| b
```

---

## Phase 4 — CI/CD + Publishing

```mermaid
flowchart LR
  P4["Phase 4\nCI/CD + Publishing"]

  P4 --> a["GitHub Actions\nBuild + lint + test on PR"]
  P4 --> b["Changesets\nSemantic versioning\nper package"]
  P4 --> c["Publish\nGitHub Packages\n(registry already configured)"]
  P4 --> d["Turbo Remote Cache\nFaster CI builds"]

  a --> b
  b --> c
```

---

## Full Phase Overview

```mermaid
timeline
  title Design System Milestones
  Phase 1 : Monorepo setup
           : packages/ui (Button)
           : apps/demo
           : TS project references
  Phase 2 : Design tokens
           : Tailwind config package
           : Core components
  Phase 3 : Vitest
           : Storybook
           : Chromatic
  Phase 4 : GitHub Actions
           : Changesets
           : npm publish
```
