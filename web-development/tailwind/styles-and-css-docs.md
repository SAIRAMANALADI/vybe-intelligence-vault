---
title: Styles and CSS | Docs
category: web-development/tailwind
source_type: web
source_name: Web Discovery
source_url: https://docs.astro.build/en/guides/styling/#tailwind
published_at: '2026-06-26T10:19:11.974462+05:30'
collected_at: '2026-06-26T10:19:11.974476+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:styles-and-css-docs
first_seen: '2026-06-26T10:19:11.974476+05:30'
last_seen: '2026-06-26T10:19:11.974476+05:30'
last_checked: '2026-06-26T10:19:11.974476+05:30'
health_score: 100
---

# Styles and CSS | Docs

## Summary

- Astro supports **scoped styles** (default) via `data-astro-cid-*` attributes, preventing CSS leakage while preserving specificity; global styles require explicit opt-out via `is:global` or `define:vars`.

- **CSS cascading order** prioritizes: `<style>` tags in `<head>` (lowest) → imported stylesheets → scoped styles (highest), with later imports overriding earlier ones at equal specificity.

- **Tailwind integration** supports both v3 (via `@astrojs/tailwind`) and v4 (via `@tailwindcss/vite` plugin), with global styles imported in layout components for consistent application across pages.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: web-development/tailwind
- Published: 2026-06-26T10:19:11.974462+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://docs.astro.build/en/guides/styling/#tailwind
