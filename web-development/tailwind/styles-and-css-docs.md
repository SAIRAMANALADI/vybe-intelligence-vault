---
title: Styles and CSS | Docs
category: web-development/tailwind
source_type: web
source_name: Web Discovery
source_url: https://docs.astro.build/en/guides/styling/#tailwind
published_at: '2026-06-27T16:42:11.780909+05:30'
collected_at: '2026-06-27T16:42:11.780920+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:styles-and-css-docs
first_seen: '2026-06-27T16:42:11.780920+05:30'
last_seen: '2026-06-27T16:42:11.780920+05:30'
last_checked: '2026-06-27T16:42:11.780920+05:30'
health_score: 100
---

# Styles and CSS | Docs

## Summary

- Astro supports **scoped styles** (via `scopedStyleStrategy`) that compile to isolated CSS with unique `data-astro-cid-*` attributes, preventing style leakage while preserving specificity and allowing low-specificity selectors (e.g., `h1 {}`) to work safely within component boundaries.

- **CSS import order** determines precedence in Astro: `<head>` link tags (lowest), imported stylesheets, and scoped styles (highest). Conflicts with equal specificity are resolved by last-imported rule, while higher-specificity rules override regardless of order.

- **Tailwind CSS integration** in Astro requires either the `@astrojs/tailwind` integration (legacy v3) or the official `@tailwindcss/vite` plugin (v4+), with global styles imported in a layout component (e.g., `src/styles/global.css`) to enable utility classes across the project.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: web-development/tailwind
- Published: 2026-06-27T16:42:11.780909+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://docs.astro.build/en/guides/styling/#tailwind
