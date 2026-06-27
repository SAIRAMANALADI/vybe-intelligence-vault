---
title: Styles and CSS | Docs
category: web-development/tailwind
source_type: web
source_name: Web Discovery
source_url: https://docs.astro.build/en/guides/styling/#tailwind
published_at: '2026-06-27T09:56:11.851821+05:30'
collected_at: '2026-06-27T09:56:11.851834+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:styles-and-css-docs
first_seen: '2026-06-27T09:56:11.851834+05:30'
last_seen: '2026-06-27T09:56:11.851834+05:30'
last_checked: '2026-06-27T09:56:11.851834+05:30'
health_score: 100
---

# Styles and CSS | Docs

## Summary

- Astro supports **scoped styles** (default) via `style` tags with automatic scoping via unique `data-astro-cid-*` attributes, preventing style leakage while preserving specificity, and **global styles** via `<style is:global>` to disable scoping when needed.
- CSS **import order** determines precedence: `<link>` tags (lowest) → imported stylesheets → scoped styles (highest), with same-specificity conflicts resolved by last-imported rule.
- Tailwind integration in Astro (≥5.2.0) uses `astro add tailwind` to install `@tailwindcss/vite`, importing `tailwindcss` in `global.css` and applying it via layout components for full project-wide utility classes.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: web-development/tailwind
- Published: 2026-06-27T09:56:11.851821+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://docs.astro.build/en/guides/styling/#tailwind
