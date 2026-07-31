# Development

## Prerequisites

- Node.js 22 (provided by dev container)
- npm

## Setup

```bash
npm ci
```

Always use `npm ci` (clean install) instead of `npm install` for deterministic builds.

## Commands

| Command                | Description                                  |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start development server at `localhost:4321` |
| `npm run build`        | Build for production + Pagefind indexing     |
| `npm run preview`      | Preview production build                     |
| `npm run check`        | Run Astro type checking                      |
| `npm run lint`         | Format check + type check                    |
| `npm run format`       | Format all files                             |
| `npm run format:check` | Verify formatting                            |

## Dev Container

Opening this project in VS Code with the Dev Containers extension automatically sets up the correct environment. No manual Node installation required.

The container runs `npm ci` automatically after creation via `postCreateCommand`.

## Conventions

- Format all code with Prettier before committing
- Run `npm run check` or `npm run lint` for type errors
- Use feature branches for changes
- Keep dependencies up to date via Dependabot
