# Astro Technical Blog Implementation Plan

This plan is designed around the decisions we made:

* **Framework:** Astro
* **Hosting:** GitHub Pages
* **Styling:** Tailwind CSS
* **Content:** Markdown-first
* **Writing:** Ulysses → Markdown
* **Organization:** Blog + Projects + About
* **Future-proofing:** Avoid vendor lock-in
* **Analytics:** Cloudflare Web Analytics
* **Math:** KaTeX
* **Code:** Expressive Code
* **Search:** Local search

The goal is to build something that can start as a simple blog but grow into a technical portfolio/research hub.

---

# Phase 0 — Final Architecture

## Repository

Create:

```
github.com/<username>/<username>.github.io
```

or preferably:

```
github.com/<username>/personal-website
```

I prefer the second option because it separates your code from deployment.

---

## Final structure

```
personal-website/

├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── BlogCard.astro
│   │   ├── ProjectCard.astro
│   │   └── TagBadge.astro
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── BlogLayout.astro
│   │   └── ProjectLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   │
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   │
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   │
│   │   └── tags/
│   │       └── [...tag].astro
│   │
│   ├── content/
│   │   ├── blog/
│   │   └── projects/
│   │
│   └── styles/
│       └── global.css
│
├── public/
│   ├── images/
│   ├── favicon.svg
│   └── robots.txt
│
├── astro.config.mjs
├── package.json
├── tailwind.config.js
└── README.md
```

---

# Phase 1 — Development Environment

##
Instead of simply installing Node.js, make the development environment reproducible.

Recommended

Dev Container
.nvmrc
VS Code workspace recommendations
GitHub CLI available inside the container
This gives you:
consistent Node version
consistent npm version
identical tooling across machines
no dependency on global packages
The development environment becomes part of the repository instead of living on your computer.

## Install prerequisites

### Node.js

Install LTS version.

Check:

```bash
node --version
npm --version
```

---

### Git

Configure:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

---

### GitHub CLI (optional)

Useful:

```bash
brew install gh
```

---


Instead of treating dependencies as "install once and forget," manage them intentionally.
Pin Node version
.nvmrc
22
Commit
package-lock.json
Always.
This guarantees deterministic installs.
CI
Never use
npm install
Use
npm ci
everywhere in CI.

# Phase 2 — Create Astro Project

Create project:

```bash
npm create astro@latest
```

Choose:

```
Template:
Empty

TypeScript:
Yes

Install dependencies:
Yes

Git:
Yes
```

---

Install packages:

```bash
npm install
```

---

# Phase 3 — Add Core Features

## Tailwind

Install:

```bash
npx astro add tailwind
```

Purpose:

* layout
* responsive design
* themes
* components

---

## Content Collections

Install:

```bash
npm install zod
```

Create schemas:

```
src/content/config.ts
```

Example:

```typescript
const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        draft: z.boolean()
    })
});
```

This ensures every article has consistent metadata.

---

# Phase 4 — Markdown System

## Blog frontmatter

Every article:

```
src/content/blog/example.md
```

Example:

```yaml
---
title: "Building a Local AI Agent"
description: "How I built..."
date: 2026-07-29
tags:
  - AI
  - Python
  - Local AI
category: AI
draft: false
---
```

---

## Project frontmatter

Example:

```yaml
---
title: "AI Academic Explorer"
description: "A course discovery platform"
github: "https://github.com/..."
technologies:
  - Python
  - AI
status: active
---
```

---

# Phase 5 — Design System

Create a minimal design language.

## Global style

Characteristics:

* white/dark background
* readable typography
* lots of whitespace
* monospace accents
* subtle animations

---

## Components

Build:

### Header

Contains:

```
Name

Blog
Projects
About
```

---

### Footer

Contains:

```
GitHub
Email
RSS
```

---

### Blog Card

Displays:

```
Title

Description

Date

Tags
```

---

### Project Card

Displays:

```
Project name

Description

Technologies

Links
```

---

# Phase 6 — Topic Themes

Implement metadata-based themes.

Example:

Article:

```yaml
theme: ai
```

Maps to:

```javascript
{
 ai:
 {
   accent:"#..."
 }
}
```

Possible themes:

```
AI
    neural/network inspired

Physics
    scientific

Mathematics
    geometric

Programming
    terminal/code

General
    neutral
```

---

# Phase 7 — Math Support

Install:

```bash
npm install katex remark-math rehype-katex
```

Enable:

```javascript
remarkPlugins:[
remarkMath
],

rehypePlugins:[
rehypeKatex
]
```

Now:

Markdown:

```markdown
$E=mc^2$
```

renders:

[
E=mc^2
]

---

# Phase 8 — Code Highlighting

Install:

```bash
npm install astro-expressive-code
```

Configure.

Example:

````markdown
```python
print("hello world")
```
````

Features:

* Copy button
* Line highlighting
* File names
* Terminal blocks

---

# Phase 9 — Search

Recommended:

## Pagefind

Install:

```bash
npm install pagefind
```

It creates a local search index.

Advantages:

* Free
* No external service
* Privacy friendly
* Works on GitHub Pages

Users search:

```
AI
Python
Quantum
```

and browser searches your content.

---

# Phase 10 — Images

Structure:

```
public/

images/

    projects/

        ai-explorer.png

    blog/

        local-ai/
            diagram.png
```

Use:

* Astro Image for UI images
* Markdown images for articles

---

# Phase 11 — Create Pages

## Homepage

Contains:

```
Introduction

Featured projects

Latest articles

Topics
```

---

## About

Contains:

```
Who I am

Academic interests

Technical interests

Contact
```

---

## Projects

Example:

```
AI Academic Explorer

Local AI Agent

Physics Simulations

3D/Electronics Projects
```

---

## Blog

Contains:

```
Latest articles

Filter by tags

Search
```

---

# Phase 12 — GitHub Pages Deployment

## Configure Astro

astro.config.mjs:

```javascript
export default defineConfig({

site:
"https://username.github.io",

base:
"/repository-name"

});
```

---

## GitHub Actions

Create:

```
.github/workflows/deploy.yml
```

Workflow:

```
Push to main

↓

Install Node

↓

npm install

↓

npm run build

↓

Deploy dist/

↓

GitHub Pages
```

---

# Phase 13 — Custom Domain (Optional)

Later:

Buy:

```
yourname.com
```

Configure:

```
DNS

↓

GitHub Pages

↓

HTTPS
```

Nothing else changes.

---

# Phase 14 — Analytics

Add:

Cloudflare Web Analytics.

Process:

1. Create Cloudflare account
2. Add website
3. Copy analytics script
4. Add to BaseLayout

No backend required.

---

# Phase 15 — Writing Workflow

Final workflow:

```
Idea

↓

Obsidian notes

↓

Ulysses article

↓

Export Markdown

↓

Add metadata

↓

Git commit

↓

Git push

↓

Automatic deployment
```

---

# Phase 16 — Future Expansion

Designed to support:

## Code downloads

```
projects/
    simulation/
        code.zip
        notebook.ipynb
```

---

## Interactive simulations

Add:

```
src/components/

ParticleSimulation.astro
```

or:

```
ParticleSimulation.svelte
```

---

## AI-powered search

Later:

```
Articles

↓

Embeddings

↓

Vector database

↓

Chat interface
```

---

# Implementation Order Checklist

I would implement in this exact order:

## Week 1 — Foundation

* [ ] Create Astro project
* [ ] Configure GitHub
* [ ] Add Tailwind
* [ ] Create layout
* [ ] Create navigation
* [ ] Deploy first version

---

## Week 2 — Content

* [ ] Blog system
* [ ] Project system
* [ ] Tags
* [ ] Markdown schema
* [ ] First articles

---

## Week 3 — Polish

* [ ] Search
* [ ] KaTeX
* [ ] Expressive Code
* [ ] Dark mode
* [ ] Analytics
* [ ] SEO

---

## Week 4 — Portfolio

* [ ] Add projects
* [ ] Add GitHub links
* [ ] Add downloadable files
* [ ] Improve homepage

---

## Final result

You end up with:

```
Your website

├── Technical blog
├── Software portfolio
├── Research notebook
├── Project showcase
└── Public knowledge base
```

with:

* zero hosting cost
* full ownership
* professional appearance
* transferable frontend skills
* room for AI/physics/math demonstrations later

This architecture should comfortably last many years without needing a rewrite.
