# Monorepo Architecture

## Workspace Structure

```mermaid
graph TD
  root["🗂 Monorepo (root)"]

  root --> apps
  root --> packages

  apps --> demo["apps/demo\nVite + React\n(consumer)"]

  packages --> ui["packages/ui\n@my-ds/ui\n(component library)"]
  packages --> tsconfig["packages/tsconfig\n@my-ds/tsconfig\n(shared TS configs)"]
  packages --> eslint["packages/eslint-config\n@my-ds/eslint-config\n(shared lint rules)"]

  demo -->|"depends on"| ui
  ui -->|"extends"| tsconfig
  demo -->|"extends"| tsconfig
```

---

## Package Dependency Graph

```mermaid
graph LR
  demo["apps/demo"]
  ui["packages/ui"]
  tsconfig["packages/tsconfig"]
  eslint["packages/eslint-config"]

  demo -->|"@my-ds/ui (workspace:*)"| ui
  demo -->|"@my-ds/tsconfig (devDep)"| tsconfig
  demo -->|"@my-ds/eslint-config (devDep)"| eslint

  ui -->|"@my-ds/tsconfig (devDep)"| tsconfig
  ui -->|"@my-ds/eslint-config (devDep)"| eslint
```

---

## TypeScript Resolution

```mermaid
flowchart TD
  vscode["VS Code TS Language Server"]
  tsdk["root/node_modules/typescript\n(workspace TS via typescript.tsdk)"]
  root_ts["root/tsconfig.json\n(project references graph)"]
  ui_ts["packages/ui/tsconfig.json\n(composite: true)"]
  demo_ts["apps/demo/tsconfig.json\n(references ui)"]
  build_ts["packages/ui/tsconfig.build.json\n(composite: false)"]
  tsup["tsup (build tool)"]

  vscode -->|"uses"| tsdk
  tsdk -->|"reads"| root_ts
  root_ts -->|"references"| ui_ts
  root_ts -->|"references"| demo_ts
  demo_ts -->|"references"| ui_ts

  tsup -->|"uses"| build_ts
  build_ts -->|"extends"| ui_ts
```

---

## pnpm node_modules Layout

```mermaid
flowchart TD
  store[".pnpm/ virtual store\n(all actual package files live here)"]

  root_nm["root/node_modules/\n└── typescript (for VS Code tsdk)"]
  ui_nm["packages/ui/node_modules/\n├── @radix-ui/react-slot\n├── class-variance-authority\n├── clsx\n└── tailwind-merge"]
  demo_nm["apps/demo/node_modules/\n├── react\n├── react-dom\n├── vite\n└── @my-ds/ui (symlink → packages/ui)"]

  root_nm -->|symlink| store
  ui_nm -->|symlink| store
  demo_nm -->|symlink| store
```

> **Isolation rule:** pnpm only creates a symlink in a package's `node_modules` if that package explicitly declares the dependency. Undeclared packages are inaccessible even though they physically exist in `.pnpm/`.

---

## React Instance Flow

```mermaid
flowchart LR
  demo_react["apps/demo\ndeclares react as dependency"]
  ui_peer["packages/ui\ndeclares react as peerDependency"]
  single["Single React instance\nat runtime"]

  demo_react -->|"provides"| single
  ui_peer -->|"consumes from consumer"| single
```
