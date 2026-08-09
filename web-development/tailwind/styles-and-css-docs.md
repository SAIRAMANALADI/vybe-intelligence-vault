---
title: Styles and CSS | Docs
category: web-development/tailwind
source_type: web
source_name: Web Discovery
source_url: https://docs.astro.build/en/guides/styling/#tailwind
published_at: '2026-08-09T15:40:56.056861+05:30'
collected_at: '2026-08-09T15:40:56.056876+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:styles-and-css-docs
first_seen: '2026-08-09T15:40:56.056876+05:30'
last_seen: '2026-08-09T15:40:56.056876+05:30'
last_checked: '2026-08-09T15:40:56.056876+05:30'
health_score: 100
---

# Styles and CSS | Docs

## Summary

- Astro supports **scoped styles** via `<style>` tags, which compile to unique selectors (e.g., `h1[data-astro-cid-xxx]`) to prevent leakage, while **global styles** can be enforced using `is:global` or by omitting scoping.

- CSS **import order** determines precedence: `<link>` tags (lowest) → imported stylesheets → scoped styles (highest), with conflicts resolved by specificity and last-evaluated rules.

- **Tailwind CSS** integration in Astro requires either the `astro add tailwind` CLI command (for v4+ via `@tailwindcss/vite`) or manual setup for legacy v3 (`@astrojs/tailwind` integration), with global styles imported in a layout component.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: web-development/tailwind
- Published: 2026-08-09T15:40:56.056861+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://docs.astro.build/en/guides/styling/#tailwind
