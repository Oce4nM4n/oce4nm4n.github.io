# Writing Guide

## Workflow

1. Write in Ulysses
2. Export as Markdown
3. Copy to `src/content/blog/`
4. Add frontmatter metadata
5. Preview with `npm run dev`
6. Commit and push

## Frontmatter

Every blog post requires:

```yaml
---
title: 'Post Title'
description: 'Brief summary'
date: 2026-07-29
tags:
  - tag1
  - tag2
category: Category
theme: ai
draft: false
---
```

### Fields

| Field       | Required | Description                                      |
| ----------- | -------- | ------------------------------------------------ |
| `title`     | Yes      | Post title                                       |
| `description` | Yes    | Short summary for cards and SEO                   |
| `date`      | Yes      | Publication date                                  |
| `tags`      | Yes      | Array of tag strings                             |
| `category`  | No       | Single category name                             |
| `theme`     | No       | One of: `ai`, `physics`, `math`, `programming`, `general` (defaults to `general`) |
| `draft`     | No       | Set `true` to exclude from production builds     |
| `image`     | No       | Path to a hero image                             |

### Projects

Projects follow a similar structure in `src/content/projects/`:

```yaml
---
title: 'Project Name'
description: 'Brief description'
github: 'https://github.com/username/repo'
technologies:
  - Python
  - FastAPI
status: active
featured: true
---
```

## Features

- **Math:** Use `$...$` for inline and `$$...$$` for display math (KaTeX)
- **Code:** Standard markdown code fences with syntax highlighting (Expressive Code)
- **Images:** Place in `public/images/blog/post-name/` and reference as `/images/blog/post-name/image.png`
- **Drafts:** Set `draft: true` to exclude from production builds
