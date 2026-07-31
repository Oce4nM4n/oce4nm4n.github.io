# Architecture

## Overview

Static site built with Astro. Content is authored in Markdown and rendered at build time. No server-side rendering or database.

## Structure

```
src/
  components/     Reusable UI components
  layouts/        Page layout templates
  pages/          Route definitions
  content/        Markdown content collections
  styles/         Global CSS
  content.config.ts  Content collection schemas and loaders
public/           Static assets
```

## Data Flow

1. Markdown files in `src/content/` are the source of truth
2. Content Collections (defined in `src/content.config.ts`) validate frontmatter schemas at build time
3. Pages query collections using `getCollection()` and pass data to layouts/components
4. Astro generates static HTML output to `dist/`
5. Pagefind indexes the output for search (`dist/pagefind/`)

## Design Decisions

- **Markdown-first:** Content remains portable if the framework changes
- **Content Collections:** Schema validation ensures metadata consistency; uses the new Content Layer API with `glob()` loaders
- **Tailwind CSS v4:** Integrated via `@tailwindcss/vite` Vite plugin (no `@astrojs/tailwind`), with theme configured via CSS `@theme` directive
- **KaTeX:** CSS is bundled from the local npm package instead of loaded from CDN
- **CSS custom properties:** Enables dark mode without a CSS-in-JS solution
- **Topic themes:** Driven from frontmatter metadata, not separate layouts
- **Search:** Pagefind generates a static search index at build time
- **Analytics:** Cloudflare Web Analytics (lightweight, privacy-friendly)
- **Markdown processing:** Uses `@astrojs/markdown-remark` unified pipeline for remark-math and rehype-katex plugins

## Package Notes

- `@astrojs/tailwind` was replaced with `@tailwindcss/vite` + `tailwindcss` v4 due to incompatibility with Astro 7 / Vite 8
- `@astrojs/markdown-remark` must be explicitly installed as Astro 7 uses Sätteri by default
