# claude-design-system

A small React + TypeScript design system, set up so it can be synced to
[claude.ai/design](https://claude.ai/design) with `/design-sync`.

## What's inside

- **Design tokens** — `src/tokens/tokens.css` (colors, spacing, typography, radius)
- **Components** — `Button`, `Input`, `Badge` (each with its own `.css` + Storybook stories)
- **Storybook** — previews and docs for every component
- **Build** — [`tsup`](https://tsup.egoist.dev/) emits `dist/` (ESM + `.d.ts` + `styles.css`)

## Scripts

```bash
npm run storybook        # run Storybook at http://localhost:6006
npm run build            # build dist/ (needed before /design-sync)
npm run build-storybook  # static Storybook build
```

## Syncing to claude.ai/design

1. `npm run build` — produces `dist/`
2. Run `/design-sync` in Claude Code from this directory

`design-sync.config.json` already records `shape: "storybook"`, so re-syncs skip
detection.

## Adding a component

1. Create `src/components/<Name>/` with `<Name>.tsx`, `<Name>.css`,
   `<Name>.stories.tsx`, and `index.ts`.
2. Export it from `src/index.ts`.
3. `@import` its CSS in `src/styles.css`.
