---
title: Styles and CSS | Docs
category: web-development/tailwind
source_type: web
source_name: Web Discovery
source_url: https://docs.astro.build/en/guides/styling/#tailwind
published_at: '2026-07-03T15:15:14.063101+05:30'
collected_at: '2026-07-03T15:15:14.063115+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:styles-and-css-docs
first_seen: '2026-07-03T15:15:14.063115+05:30'
last_seen: '2026-07-03T15:15:14.063115+05:30'
last_checked: '2026-07-03T15:15:14.063115+05:30'
health_score: 100
---

# Styles and CSS | Docs

## Summary

- Astro supports **scoped styles** via automatic attribute scoping (e.g., `data-astro-cid-*`), preventing style leakage while preserving specificity and allowing low-selector usage (e.g., `h1 {}`) without global conflicts.
- **CSS import order** determines cascading precedence: `<head>` link tags (lowest) → imported stylesheets → scoped styles (highest), with later imports overriding earlier ones at equal specificity.
- **Tailwind integration** is supported via `@tailwindcss/vite` (v4+) or `@astrojs/tailwind` (v3), requiring global CSS import (e.g., `src/styles/global.css`) and layout-level inclusion for project-wide utility classes.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: web-development/tailwind
- Published: 2026-07-03T15:15:14.063101+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://docs.astro.build/en/guides/styling/#tailwind
