---
title: Styles and CSS | Docs
category: web-development/tailwind
source_type: web
source_name: Web Discovery
source_url: https://docs.astro.build/en/guides/styling/#tailwind
published_at: '2026-07-20T15:16:10.424012+05:30'
collected_at: '2026-07-20T15:16:10.424031+05:30'
tags:
- frontend_ui
- web-crawled
- youtube
status: active
resource_id: blog:styles-and-css-docs
first_seen: '2026-07-20T15:16:10.424031+05:30'
last_seen: '2026-07-20T15:16:10.424031+05:30'
last_checked: '2026-07-20T15:16:10.424031+05:30'
health_score: 100
---

# Styles and CSS | Docs

## Summary

- Astro supports **scoped styles** (via `scopedStyleStrategy`) that compile to unique selectors, preventing style leakage and allowing low-specificity selectors (`h1 {}`, `p {}`) without conflicts, while preserving specificity boundaries for interoperability with global CSS or libraries.

- **CSS import order** determines cascading precedence: `<head>` link tags (lowest) → imported stylesheets → scoped styles (highest), with same-specificity conflicts resolved by last-imported rule.

- **Tailwind integration** requires either the `astro add tailwind` CLI (Astro ≥5.2.0) for Tailwind 4 via `@tailwindcss/vite`, or manual setup for legacy Tailwind 3 (`@astrojs/tailwind` integration), with global styles imported in a layout component to apply Tailwind classes site-wide.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: web-development/tailwind
- Published: 2026-07-20T15:16:10.424012+05:30

## Related Tags

- frontend_ui
- web-crawled
- youtube

## Source

Original source: https://docs.astro.build/en/guides/styling/#tailwind
