# Phase 2 — Design Tokens + Tailwind Config + New Components

## 1. Package Dependency Graph

```mermaid
graph TD
  subgraph npm["npm packages"]
    tailwindcss["tailwindcss >=3.4.0"]
    tw_animate["tailwindcss-animate ^1.0.7"]
    radix_slot["@radix-ui/react-slot ^1.0.2"]
    radix_avatar["@radix-ui/react-avatar ^1.0.4"]
    cva["class-variance-authority ^0.7.0"]
    clsx["clsx ^2.1.0"]
    twmerge["tailwind-merge ^2.2.1"]
    react["react >=18"]
  end

  subgraph internal["Internal packages"]
    tokens["@my-ds/tokens"]
    tw_config["@my-ds/tailwind-config"]
    ui["@my-ds/ui"]
    tsconfig["@my-ds/tsconfig"]
    eslint_config["@my-ds/eslint-config"]
  end

  subgraph apps["Apps"]
    demo["apps/demo"]
  end

  tokens --> tw_config
  tw_animate --> tw_config
  tailwindcss -.->|peerDep| tw_config

  radix_slot --> ui
  radix_avatar --> ui
  cva --> ui
  clsx --> ui
  twmerge --> ui
  react -.->|peerDep| ui

  ui --> demo
  tw_config -->|devDep| demo
  tokens -->|devDep| demo
  tailwindcss -->|devDep| demo

  tsconfig -.->|devDep| tokens
  tsconfig -.->|devDep| tw_config
  tsconfig -.->|devDep| ui
  tsconfig -.->|devDep| demo

  eslint_config -.->|devDep| tokens
  eslint_config -.->|devDep| tw_config
  eslint_config -.->|devDep| ui
  eslint_config -.->|devDep| demo
```

## 2. Token → JS → Tailwind Data Flow

```mermaid
flowchart LR
  A["packages/tokens/src/index.ts\n──────────────────\ncolors = {\n  primary: '#2563eb',\n  border: '#e2e8f0',\n  ...\n} as const\n\nradius = {\n  DEFAULT: '0.5rem',\n  ...\n} as const"]

  B["packages/tailwind-config/src/index.ts\n──────────────────\nimport { colors, radius }\n  from '@my-ds/tokens'\n\npreset = {\n  theme.extend.colors,\n  theme.extend.borderRadius,\n  plugins: [animate]\n}"]

  C["apps/demo/tailwind.config.js\n──────────────────\nimport myDsPreset\n  from '@my-ds/tailwind-config'\n\nexport default {\n  presets: [myDsPreset],\n  content: [...]\n}"]

  D["Tailwind CSS utilities\n──────────────────\n.bg-primary { background: #2563eb }\n.border-input { border: #e2e8f0 }\n.text-muted-foreground { color: #64748b }\n.rounded-DEFAULT { radius: 0.5rem }\n..."]

  E["Component classes\n──────────────────\nbg-primary text-primary-foreground\nborder-input text-muted-foreground\nbg-card text-card-foreground\nbg-muted"]

  A -- "exported JS constants" --> B
  B -- "Tailwind preset object" --> C
  C -- "Tailwind processes content" --> D
  D -- "static CSS in dist/assets/*.css" --> E
```

## 3. Turbo Build DAG

```mermaid
graph TD
  tsconfig["@my-ds/tsconfig\n(no build)"]
  eslint_config["@my-ds/eslint-config\n(no build)"]
  tokens["@my-ds/tokens:build"]
  tw_config["@my-ds/tailwind-config:build"]
  ui["@my-ds/ui:build"]
  demo["demo:build"]

  tsconfig --> tokens
  tsconfig --> tw_config
  tsconfig --> ui
  tsconfig --> demo

  eslint_config --> tokens
  eslint_config --> tw_config
  eslint_config --> ui
  eslint_config --> demo

  tokens --> tw_config
  tokens --> demo

  tw_config --> demo
  ui --> demo
```

## 4. TypeScript Project Reference Graph

```mermaid
graph TD
  root["tsconfig.json (root)\nfiles: []"]

  tokens_ts["packages/tokens\ntsconfig.json\nextends: @my-ds/tsconfig/base.json\ncomposite: true"]

  tw_config_ts["packages/tailwind-config\ntsconfig.json\nextends: @my-ds/tsconfig/base.json\ncomposite: true"]

  ui_ts["packages/ui\ntsconfig.json\nextends: @my-ds/tsconfig/react.json\ncomposite: true"]

  demo_ts["apps/demo\ntsconfig.json\nextends: @my-ds/tsconfig/react.json\nnoEmit: true"]

  base["@my-ds/tsconfig/base.json"]
  react_ts["@my-ds/tsconfig/react.json\nextends: base.json"]

  root --> tokens_ts
  root --> tw_config_ts
  root --> ui_ts
  root --> demo_ts

  tokens_ts --> base
  tw_config_ts --> base
  tw_config_ts --> tokens_ts
  ui_ts --> react_ts
  demo_ts --> react_ts
  demo_ts --> tokens_ts
  demo_ts --> tw_config_ts
  demo_ts --> ui_ts

  react_ts --> base
```

## 5. packages/ui Component Tree

```mermaid
graph TD
  ui_index["@my-ds/ui (src/index.ts)"]

  button["Button\n──────\nCVA variants:\n• default\n• destructive\n• outline\n• secondary\n• ghost\n• link\n\nSizes: sm, default, lg, icon\nDeps: @radix-ui/react-slot, cva"]

  badge["Badge\n──────\nCVA variants:\n• default\n• secondary\n• destructive\n• outline\n\nDeps: cva"]

  input["Input\n──────\nforwardRef wrapper\naround <input>\nStyling: border-input,\nfocus-visible:ring-ring,\nplaceholder:text-muted-foreground"]

  card["Card family\n──────\n• Card (root)\n• CardHeader\n• CardTitle\n• CardDescription\n  (text-muted-foreground)\n• CardContent\n• CardFooter"]

  avatar["Avatar family\n──────\n• Avatar (Root)\n• AvatarImage\n• AvatarFallback\n  (bg-muted)\n\nDeps: @radix-ui/react-avatar"]

  utils["lib/utils (cn)\n──────\nclsx + tailwind-merge"]

  ui_index --> button
  ui_index --> badge
  ui_index --> input
  ui_index --> card
  ui_index --> avatar
  ui_index --> utils

  button --> utils
  badge --> utils
  input --> utils
  card --> utils
  avatar --> utils
```
