---
title: Styles and CSS | Docs
category: web-development/tailwind
source_type: web
source_name: Web Discovery
source_url: https://docs.astro.build/en/guides/styling/#tailwind
published_at: '2026-08-07T09:00:28.269133+05:30'
collected_at: '2026-08-07T09:00:28.269142+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:styles-and-css-docs
first_seen: '2026-08-07T09:00:28.269142+05:30'
last_seen: '2026-08-07T09:00:28.269142+05:30'
last_checked: '2026-08-07T09:00:28.269142+05:30'
health_score: 100
---

# Styles and CSS | Docs

## Summary

- Astro supports scoped styles via `<style>` tags, which compile to unique selectors (e.g., `h1[data-astro-cid-xxx]`) to prevent CSS leakage, allowing low-specificity selectors like `h1 {}` without global side effects.

- External stylesheets can be imported via ESM (e.g., `import '../styles.css'`) for bundling/optimization or loaded via `<link>` tags (absolute URLs only) for static assets in `/public`, bypassing Astro’s processing pipeline.

- Tailwind CSS integration is supported via `astro add tailwind`, which installs the `@tailwindcss/vite` plugin (v4) or legacy `@astrojs/tailwind` (v3), with global styles imported in a layout component (e.g., `src/styles/global.css`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: web-development/tailwind
- Published: 2026-08-07T09:00:28.269133+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://docs.astro.build/en/guides/styling/#tailwind
