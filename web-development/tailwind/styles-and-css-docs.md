---
title: Styles and CSS | Docs
category: web-development/tailwind
source_type: web
source_name: Web Discovery
source_url: https://docs.astro.build/en/guides/styling/#tailwind
published_at: '2026-06-26T15:29:25.259116+05:30'
collected_at: '2026-06-26T15:29:25.259133+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:styles-and-css-docs
first_seen: '2026-06-26T15:29:25.259133+05:30'
last_seen: '2026-06-26T15:29:25.259133+05:30'
last_checked: '2026-06-26T15:29:25.259133+05:30'
health_score: 100
---

# Styles and CSS | Docs

## Summary

- Astro supports **scoped styles** (compiled with unique `data-astro-cid-*` attributes) to prevent CSS leakage, allowing low-specificity selectors like `h1 {}` without global side effects, while preserving specificity boundaries for child components.
- **CSS import order** determines cascading precedence: `<head>` link tags (lowest), imported stylesheets (middle), and scoped styles (highest), with later imports overriding earlier ones at equal specificity.
- **Tailwind integration** in Astro requires either the `astro add tailwind` CLI command (for v4+ via `@tailwindcss/vite`) or manual setup, with global styles imported in a layout component to apply Tailwind classes project-wide.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: web-development/tailwind
- Published: 2026-06-26T15:29:25.259116+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://docs.astro.build/en/guides/styling/#tailwind
