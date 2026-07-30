# Deployment

GitHub Actions handles all deployments automatically.

## Workflows

### CI (`ci.yml`)

Runs on every push and pull request:

- Format check
- Astro type check
- Build

### Deploy (`deploy.yml`)

Runs on push to `main`:

- Build
- Upload to GitHub Pages
- Deploy

### Security (`security.yml`)

Runs weekly:

- `npm audit`

## Manual Deployment

```bash
npm run build
```

Output is in `dist/`.
