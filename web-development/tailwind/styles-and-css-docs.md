---
title: Styles and CSS | Docs
category: web-development/tailwind
source_type: web
source_name: Web Discovery
source_url: https://docs.astro.build/en/guides/styling/#tailwind
published_at: '2026-07-03T03:58:09.755969+05:30'
collected_at: '2026-07-03T03:58:09.755981+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:styles-and-css-docs
first_seen: '2026-07-03T03:58:09.755981+05:30'
last_seen: '2026-07-03T03:58:09.755981+05:30'
last_checked: '2026-07-03T03:58:09.755981+05:30'
health_score: 100
---

# Styles and CSS | Docs

## Summary

- Astro supports scoped styles via `<style>` tags, which compile to unique selectors (e.g., `h1[data-astro-cid-xxx]`) to prevent leakage, allowing low-specificity selectors like `h1 {}` without conflicts.
- CSS import order determines precedence: `<link>` tags (lowest), imported stylesheets, then scoped styles (highest), with same-specificity conflicts resolved by last-imported rule.
- Tailwind 4 integration in Astro ≥5.2.0 uses `astro add tailwind` to install `@tailwindcss/vite`, while legacy Tailwind 3 requires `@astrojs/tailwind` integration; upgrade involves replacing the integration with the Vite plugin.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: web-development/tailwind
- Published: 2026-07-03T03:58:09.755969+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://docs.astro.build/en/guides/styling/#tailwind
