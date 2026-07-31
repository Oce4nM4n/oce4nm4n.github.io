# Deployment

GitHub Actions handles all deployments automatically.

## Workflows

### CI (`ci.yml`)

Runs on every push and pull request:

- Format check (`prettier --check`)
- Astro type check (`astro check`)
- Build (includes Pagefind indexing)

### Deploy (`deploy.yml`)

Runs on push to `main`:

- Build (includes Pagefind indexing)
- Upload to GitHub Pages
- Deploy

### Security (`security.yml`)

Runs weekly:

- `npm audit --audit-level=high`

## Manual Deployment

```bash
npm run build
```

This runs `astro build` followed by `pagefind --site dist` for search indexing.

Output is in `dist/`.
