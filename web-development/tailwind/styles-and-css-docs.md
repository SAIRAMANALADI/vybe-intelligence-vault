---
title: Styles and CSS | Docs
category: web-development/tailwind
source_type: web
source_name: Web Discovery
source_url: https://docs.astro.build/en/guides/styling/#tailwind
published_at: '2026-08-09T10:20:44.965574+05:30'
collected_at: '2026-08-09T10:20:44.965608+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:styles-and-css-docs
first_seen: '2026-08-09T10:20:44.965608+05:30'
last_seen: '2026-08-09T10:20:44.965608+05:30'
last_checked: '2026-08-09T10:20:44.965608+05:30'
health_score: 100
---

# Styles and CSS | Docs

## Summary

- Astro supports scoped styles via `<style>` tags with automatic scoping (compiled to unique `data-astro-cid-*` attributes), preventing style leakage while preserving specificity for internal selectors like `h1 {}` or `p {}`.

- External CSS can be imported via ESM (e.g., `import '../styles/utils.css'`) for bundling/optimization or loaded via `<link>` tags (absolute paths only) for static assets in `/public`, bypassing Astro’s processing pipeline.

- Tailwind CSS integration is supported in Astro via `@tailwindcss/vite` plugin (v4) or `@astrojs/tailwind` (v3), with global styles typically imported in a layout component to ensure consistent application across pages.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: web-development/tailwind
- Published: 2026-08-09T10:20:44.965574+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://docs.astro.build/en/guides/styling/#tailwind
