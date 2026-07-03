---
title: Styles and CSS | Docs
category: web-development/tailwind
source_type: web
source_name: Web Discovery
source_url: https://docs.astro.build/en/guides/styling/#tailwind
published_at: '2026-07-04T01:29:38.358838+05:30'
collected_at: '2026-07-04T01:29:38.358850+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:styles-and-css-docs
first_seen: '2026-07-04T01:29:38.358850+05:30'
last_seen: '2026-07-04T01:29:38.358850+05:30'
last_checked: '2026-07-04T01:29:38.358850+05:30'
health_score: 100
---

# Styles and CSS | Docs

## Summary

- Astro supports **scoped styles** (default) via `<style>` tags, preventing CSS leakage by compiling selectors with component-specific attributes (`data-astro-cid-*`), while preserving specificity for local overrides.
- **Global styles** require explicit opt-out via `is:global` in `<style>` tags or `scopedStyleStrategy: 'none'` in config, but should be used sparingly to avoid unintended cascading effects.
- **CSS import order** dictates precedence: `<link>` tags (lowest) → imported stylesheets → scoped styles (highest), with same-specificity conflicts resolved by last-imported rule.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: web-development/tailwind
- Published: 2026-07-04T01:29:38.358838+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://docs.astro.build/en/guides/styling/#tailwind
