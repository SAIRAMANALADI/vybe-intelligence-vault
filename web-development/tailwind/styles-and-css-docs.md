---
title: Styles and CSS | Docs
category: web-development/tailwind
source_type: web
source_name: Web Discovery
source_url: https://docs.astro.build/en/guides/styling/#tailwind
published_at: '2026-07-04T19:42:13.629247+05:30'
collected_at: '2026-07-04T19:42:13.629260+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:styles-and-css-docs
first_seen: '2026-07-04T19:42:13.629260+05:30'
last_seen: '2026-07-04T19:42:13.629260+05:30'
last_checked: '2026-07-04T19:42:13.629260+05:30'
health_score: 100
---

# Styles and CSS | Docs

## Summary

- Astro supports **scoped styles** via `<style>` tags, which compile to unique selectors (e.g., `h1[data-astro-cid-xxx]`) to prevent style leakage, while preserving specificity and allowing low-specificity selectors like `h1 {}` to work safely within components.

- **CSS import order** determines precedence: `<link>` tags (lowest), imported stylesheets, and scoped styles (highest). Conflicts with equal specificity resolve to the last imported/defined rule.

- **Tailwind CSS** integration in Astro ≥5.2.0 uses the `astro add tailwind` CLI to install `@tailwindcss/vite`, requiring `tailwindcss` import in a global CSS file (e.g., `src/styles/global.css`) to apply utility classes across layouts.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: web-development/tailwind
- Published: 2026-07-04T19:42:13.629247+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://docs.astro.build/en/guides/styling/#tailwind
