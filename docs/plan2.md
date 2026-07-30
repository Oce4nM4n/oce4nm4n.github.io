This is exactly the kind of project where investing time upfront pays dividends. Rather than just creating an Astro website, you're creating a **long-lived software project**. The goal is that 5–10 years from now you can clone the repository onto a new machine, run a single command, and have a working development environment and a reproducible build.

Below is the plan I would follow.

---

# Personal Website Implementation Plan

**Version:** 1.0

## Vision

Build a long-lived personal website that serves as:

* Technical blog
* Project portfolio
* Research notebook
* Public knowledge base

while remaining:

* Free to host
* Easy to maintain
* Vendor independent
* Reproducible
* Professionally engineered

---

# 1. Project Goals

The website should support:

## Current

* Technical blog
* Projects
* About page
* Tags
* Local search
* Mathematics
* Syntax highlighting
* Responsive design
* Dark mode
* RSS
* SEO

---

## Future

* Interactive simulations
* Downloadable code
* Embedded notebooks
* AI demos
* Reading lists
* Research notes
* Newsletter (optional)
* AI-powered search

The architecture should not require migration when these are added.

---

# 2. Guiding Principles

These principles should guide every technical decision.

## Principle 1 — Markdown is the source of truth

Articles are never stored in a CMS.

Instead:

```text
content/
    blog/
        local-ai.md
```

The Markdown files are the canonical version of your work.

Astro only renders them.

If Astro disappears tomorrow, the content still exists.

---

## Principle 2 — Infrastructure is replaceable

Hosting is not part of the application.

Today:

```text
GitHub Pages
```

Tomorrow:

```text
Cloudflare Pages

Netlify

Self-hosted

VPS
```

No code should depend on GitHub Pages specifically.

---

## Principle 3 — Reproducible environments

The repository should define its development environment.

Never rely on:

> "Install whatever Node version you have."

Instead, version-control:

* Node version
* Dependencies
* Dev container
* Editor recommendations
* Build scripts

---

## Principle 4 — Deterministic builds

Every machine should produce the same website.

This means:

* `package-lock.json` committed
* `npm ci` in CI
* pinned Node version

---

## Principle 5 — Automate repetitive work

Humans forget.

CI does not.

Automate:

* formatting
* linting
* type checking
* deployment
* dependency updates
* security scanning

---

## Principle 6 — Keep local development lightweight

Heavy checks belong in CI.

The local workflow should remain fast.

---

# 3. Technology Stack

## Core

* Astro
* TypeScript
* Tailwind CSS

---

## Content

* Markdown
* Astro Content Collections
* Zod validation

---

## Writing

* Ulysses
* Markdown export

---

## Deployment

* GitHub Actions
* GitHub Pages

---

## Search

* Pagefind

---

## Math

* KaTeX

---

## Code

* Expressive Code

---

## Analytics

* Cloudflare Web Analytics

---

## Version Control

* Git
* GitHub

---

# 4. Repository Structure

```text
personal-website/

├── .devcontainer/
│   ├── devcontainer.json
│   └── Dockerfile (optional)
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   ├── deploy.yml
│   │   └── security.yml
│   │
│   ├── dependabot.yml
│   └── pull_request_template.md
│
├── .vscode/
│   ├── settings.json
│   └── extensions.json
│
├── docs/
│   ├── architecture.md
│   ├── deployment.md
│   ├── writing.md
│   └── development.md
│
├── scripts/
│
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── content/
│   └── styles/
│
├── .gitignore
├── .nvmrc
├── astro.config.mjs
├── package.json
├── package-lock.json
├── README.md
└── LICENSE
```

---

# 5. Development Environment

## Local Tools

Install once:

* Git
* Docker Desktop (or another OCI-compatible runtime)
* VS Code
* Dev Containers extension
* GitHub CLI (optional)

Notice that Node.js does **not** have to be installed globally if you work entirely inside the development container.

---

## Dev Container

The development container becomes the standard environment.

It defines:

* Node version
* npm
* GitHub CLI
* VS Code extensions
* forwarded ports

Opening the project becomes:

```text
Clone

↓

Open Folder

↓

Reopen in Container

↓

Ready
```

No manual setup.

---

## Node Version

Create:

```text
.nvmrc
```

Example:

```
22
```

Even though the container provides Node, this documents the expected version and makes it easy to work outside the container if needed.

---

# 6. Repository Initialization

Initialize Git.

Create GitHub repository.

Push initial commit.

Protect:

```
main
```

with:

* required CI
* linear history (optional)

---

# 7. Git Strategy

Use:

```
main
```

for production.

Everything else:

```
feature/navigation

feature/search

feature/new-project-page
```

Workflow:

```text
Feature Branch

↓

Develop

↓

Pull Request

↓

CI

↓

Merge

↓

Deploy
```

---

# 8. Package Management

Always commit:

```
package-lock.json
```

Never ignore it.

---

Use:

```
npm ci
```

inside CI.

Never:

```
npm install
```

in automation.

---

# 9. Development Scripts

Standardize the project around a small set of npm scripts.

Core scripts:

* `dev`
* `build`
* `preview`
* `check`
* `lint`
* `format`
* `format:check`

These become the public interface for working with the project.

---

# 10. Code Quality

## Formatting

Use Prettier.

Automatically format:

* Astro
* Markdown
* TypeScript
* JSON
* YAML

---

## Linting

Use ESLint where applicable.

Keep the rule set practical rather than exhaustive.

---

## Git Hooks

Run before commit:

* format staged files
* Astro check

Avoid running expensive builds locally.

---

# 11. Dependency Management

Enable Dependabot.

Weekly updates:

* Astro
* Tailwind
* npm packages

Review and merge updates after CI passes.

---

# 12. Continuous Integration

CI runs on every push and pull request.

Pipeline:

```text
Checkout

↓

Setup Node

↓

npm ci

↓

Format Check

↓

Lint

↓

Astro Check

↓

Build
```

If any step fails:

No deployment.

---

# 13. Security

Separate workflow.

Weekly:

* npm audit
* Dependabot
* GitHub security alerts

Treat security independently from deployment.

---

# 14. Content System

Create two content collections:

```
blog
```

```
projects
```

Each with a validated schema.

Every article should include metadata such as title, description, publication date, tags, category, draft status, and optional series information. Every project should include metadata like technologies used, repository links, project status, and optional downloadable assets.

This ensures consistency across the entire site.

---

# 15. Website Architecture

Top-level navigation:

```
Home

Blog

Projects

About
```

Blog pages:

```
/blog/post-name
```

Projects:

```
/projects/project-name
```

Tags:

```
/tags/python
```

No deep nesting unless it serves a clear purpose.

---

# 16. Design System

Overall style:

* minimalist
* technical
* typography-first
* accessible
* responsive

Topic-specific accent themes may be driven from frontmatter metadata rather than creating entirely different layouts.

---

# 17. Content Features

Support:

* syntax highlighting
* mathematical notation
* images
* videos (embedded)
* downloadable files
* callout blocks
* footnotes
* table of contents
* estimated reading time

Keep these features based on Markdown where possible.

---

# 18. Search

Use a static search index generated at build time.

Advantages:

* no server
* no tracking
* no external API
* works on GitHub Pages

---

# 19. Images

Use Astro's image optimization for site UI and assets managed within the project.

Store article images alongside the content or in a well-organized public image directory so that articles remain portable and easy to manage.

Optimize images before committing them to reduce repository size.

---

# 20. Mathematics & Code

Use:

* KaTeX for mathematics
* Expressive Code for code blocks

These integrate cleanly with Markdown and produce high-quality output suitable for technical writing.

---

# 21. Writing Workflow

The publishing process should be intentionally simple:

```text
Research (Obsidian)

↓

Write (Ulysses)

↓

Export Markdown

↓

Copy into content/blog

↓

Add metadata

↓

Preview locally

↓

Commit

↓

Push

↓

GitHub Actions

↓

Website Published
```

Use `draft: true` while writing to prevent unfinished articles from appearing in production.

---

# 22. Deployment

GitHub Actions handles deployment automatically.

Pipeline:

```text
Merge to main

↓

CI

↓

Build

↓

Generate Search Index

↓

Deploy

↓

GitHub Pages
```

No manual upload should ever be required.

---

# 23. Analytics

Use Cloudflare Web Analytics.

It is free, lightweight, and privacy-conscious, making it a good fit for a personal technical website.

---

# 24. Documentation

Treat documentation as part of the project.

Maintain:

* project overview
* development setup
* deployment guide
* writing guide
* architecture decisions

This makes the project easier to revisit after long breaks.

---

# 25. Backup Strategy

GitHub is a collaboration platform, not a backup solution.

Maintain:

* GitHub repository (primary remote)
* local working copy
* periodic mirrored backup to external storage or your existing backup system

This ensures both your code and your writing remain safe.

---

# 26. Future Roadmap

Once the foundation is stable, future enhancements can include:

* downloadable source archives
* interactive Svelte components
* WebAssembly demonstrations
* embedded Jupyter notebooks
* AI-assisted site search
* preview deployments for pull requests
* automated Open Graph image generation
* accessibility auditing
* performance and Lighthouse checks

These should be introduced incrementally, only when they provide clear value.

---

# Development Lifecycle

The complete lifecycle becomes:

```text
Research
        │
        ▼
Write in Ulysses
        │
        ▼
Export Markdown
        │
        ▼
Open Dev Container
        │
        ▼
Run Local Development Server
        │
        ▼
Preview & Test
        │
        ▼
Create Feature Branch
        │
        ▼
Commit Changes
        │
        ▼
Push to GitHub
        │
        ▼
Continuous Integration
        │
        ├── Format Check
        ├── Lint
        ├── Type Check
        ├── Build
        └── Security Checks
        │
        ▼
Merge to `main`
        │
        ▼
Automatic Deployment
        │
        ▼
GitHub Pages
        │
        ▼
Cloudflare Analytics Collects Anonymous Usage Data
```

## Success Criteria

When the project is complete, it should satisfy the following:

* A new machine can be set up by cloning the repository and opening it in the development container.
* Every build is deterministic and reproducible.
* Every change is validated automatically before deployment.
* Content remains portable because it lives as Markdown with structured metadata.
* Hosting can be changed without rewriting the site.
* The repository follows practices common in professional open-source software while remaining simple enough to maintain as a personal project.

This gives you a website that is not just aesthetically polished, but also engineered to remain maintainable, portable, and extensible for many years.
