# Architecture

## Overview

Static site built with Astro. Content is authored in Markdown and rendered at build time. No server-side rendering or database.

## Structure

```
src/
  components/   Reusable UI components
  layouts/      Page layout templates
  pages/        Route definitions
  content/      Markdown content collections
  styles/       Global CSS
public/         Static assets
```

## Data Flow

1. Markdown files in `src/content/` are the source of truth
2. Content Collections validate frontmatter schemas at build time
3. Pages query collections and pass data to layouts/components
4. Astro generates static HTML output to `dist/`

## Design Decisions

- **Markdown-first:** Content remains portable if the framework changes
- **Content Collections:** Schema validation ensures metadata consistency
- **CSS custom properties:** Enables dark mode without a CSS-in-JS solution
- **Topic themes:** Driven from frontmatter metadata, not separate layouts
