# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal technical blog by Wilson Cheng (威爾森), built with Next.js 14 (Pages Router) + Contentlayer + MDX. Deployed on Vercel at https://nextjs-blog-ashen-nine-78.vercel.app.

## Commands

```bash
pnpm dev          # Start dev server at localhost:3000
pnpm build        # Production build + sitemap generation
pnpm start        # Start production server
pnpm lint         # ESLint
pnpm lint:fix     # ESLint autofix
pnpm format:fix   # Prettier (CSS, SCSS, MD, MDX, JSON)
```

Requires Node 22.x and pnpm 9.

## Architecture

- **Content**: MDX posts in `content/posts/` with frontmatter (title, description, slug, date, optional socialImage/tags/difficulty). Contentlayer generates types and processes MDX with rehype-prism-plus for syntax highlighting.
- **Pages**: `src/pages/` — Next.js Pages Router. `index.tsx` lists posts, `posts/[slug].tsx` renders individual posts via `getStaticPaths`/`getStaticProps`.
- **Components**: `src/components/` — PostLayout, PostBody, Header, Footer, ThemeSwitch, MobileNav, DailyLeetCode, etc.
- **Config**: `src/configs/` — site metadata (`siteConfigs.ts`), header nav links, footer links, difficulty levels.
- **Lib**: `src/lib/` — Contentlayer adapter wraps content access, MDX component mapping, date formatting, OG image helpers.
- **Styling**: Tailwind CSS + `@tailwindcss/typography` for prose, Sass modules for component-specific styles (e.g., `PostBody.module.scss`). Dark mode via `next-themes` with class strategy. Primary color: red, neutral: gray.
- **Path alias**: `@/*` maps to `src/*`.

## Key Config Files

- `contentlayer.config.ts` — Post document schema and MDX processing pipeline
- `tailwind.config.js` — Theme colors (red primary, neutral gray), dark mode prose overrides
- `next.config.mjs` — SVG imports via @svgr/webpack, Contentlayer plugin

## Adding a New Post

Create `content/posts/<slug>.mdx` with frontmatter:
```yaml
---
title: "Post Title"
description: "Short description"
slug: "url-slug"
date: 2025-01-01
---
```

Optional fields: `socialImage`, `tags`, `difficulty` (easy/medium/hard), `url`.
