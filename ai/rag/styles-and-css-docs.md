---
title: Styles and CSS | Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.astro.build/en/guides/styling/#tailwind
published_at: '2026-08-11T01:04:10.053651+05:30'
collected_at: '2026-08-11T01:04:10.053668+05:30'
tags:
- frontend_ui
- rag
- web-crawled
- youtube
status: active
resource_id: blog:styles-and-css-docs
first_seen: '2026-08-11T01:04:10.053668+05:30'
last_seen: '2026-08-11T01:04:10.053668+05:30'
last_checked: '2026-08-11T01:04:10.053668+05:30'
health_score: 100
---

# Styles and CSS | Docs

## Summary

- Astro supports **scoped styles** via `<style>` tags, which compile to unique selectors preventing CSS leakage; low-specificity selectors (e.g., `h1 {}`) are safely scoped without unintended side effects.
- **Global styles** can be defined by omitting the `is:global` attribute or using `<style is:global>`; mixing global and scoped styles is supported but discouraged for maintainability.
- **Tailwind CSS integration** is supported via `astro add tailwind`, which installs the `@tailwindcss/vite` plugin (v4) or `@astrojs/tailwind` (v3), with global imports (e.g., `@import "tailwindcss"`) applied in layout components.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-11T01:04:10.053651+05:30

## Related Tags

- frontend_ui
- rag
- web-crawled
- youtube

## Source

Original source: https://docs.astro.build/en/guides/styling/#tailwind
