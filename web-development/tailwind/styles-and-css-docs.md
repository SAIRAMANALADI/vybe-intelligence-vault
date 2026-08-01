---
title: Styles and CSS | Docs
category: web-development/tailwind
source_type: web
source_name: Web Discovery
source_url: https://docs.astro.build/en/guides/styling/#tailwind
published_at: '2026-08-01T19:34:22.582647+05:30'
collected_at: '2026-08-01T19:34:22.582658+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:styles-and-css-docs
first_seen: '2026-08-01T19:34:22.582658+05:30'
last_seen: '2026-08-01T19:34:22.582658+05:30'
last_checked: '2026-08-01T19:34:22.582658+05:30'
health_score: 100
---

# Styles and CSS | Docs

## Summary

- Astro supports **scoped styles** via `<style>` tags with automatic scoping (default: `data-astro-cid-*` attributes), preventing CSS leakage while preserving specificity and allowing low-specificity selectors (e.g., `h1 {}`) without unintended side effects.

- **Global styles** can be opt-out via `is:global` attribute in `<style>` tags or by setting `scopedStyleStrategy: 'none'` in config, enabling unscoped CSS for specific use cases (e.g., CMS content) while maintaining precedence over imported styles.

- **Tailwind CSS** integration is supported via `astro add tailwind` (v4+ via Vite plugin) or legacy `@astrojs/tailwind` (v3), with global styles typically imported in a layout component to ensure consistent application across pages.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: web-development/tailwind
- Published: 2026-08-01T19:34:22.582647+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://docs.astro.build/en/guides/styling/#tailwind
