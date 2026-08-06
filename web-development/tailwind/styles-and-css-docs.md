---
title: Styles and CSS | Docs
category: web-development/tailwind
source_type: web
source_name: Web Discovery
source_url: https://docs.astro.build/en/guides/styling/#tailwind
published_at: '2026-08-06T14:38:20.839428+05:30'
collected_at: '2026-08-06T14:38:20.839442+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:styles-and-css-docs
first_seen: '2026-08-06T14:38:20.839442+05:30'
last_seen: '2026-08-06T14:38:20.839442+05:30'
last_checked: '2026-08-06T14:38:20.839442+05:30'
health_score: 100
---

# Styles and CSS | Docs

## Summary

- Astro supports **scoped styles** via `<style>` tags, compiling them with unique `data-astro-cid-*` attributes to prevent leakage, while preserving specificity and allowing low-selector usage (e.g., `h1 {}`) without cross-contamination between components.

- **CSS import order** dictates precedence: `<link>` tags (lowest), imported stylesheets, and scoped styles (highest), with conflicts resolved by specificity and last-imported rules when specificity is equal.

- **Tailwind integration** in Astro ≥5.2.0 uses `astro add tailwind` to install the official Vite plugin, importing `tailwindcss` in a global CSS file (e.g., `src/styles/global.css`) and applying it via layout components for project-wide utility classes.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: web-development/tailwind
- Published: 2026-08-06T14:38:20.839428+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://docs.astro.build/en/guides/styling/#tailwind
