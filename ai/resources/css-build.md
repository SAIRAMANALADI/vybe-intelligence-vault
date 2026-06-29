---
title: css.Build
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/functions/css/build/
published_at: '2026-06-29T17:00:18.838879+05:30'
collected_at: '2026-06-29T17:00:18.838893+05:30'
tags:
- frontend_ui
- models
- reddit
- web-crawled
status: active
resource_id: blog:css-build
first_seen: '2026-06-29T17:00:18.838893+05:30'
last_seen: '2026-06-29T17:00:18.838893+05:30'
last_checked: '2026-06-29T17:00:18.838893+05:30'
health_score: 100
---

# css.Build

## Summary

- **Functionality**: `css.Build` bundles, transforms, and minifies CSS resources using `evanw/esbuild`, replacing `@import` statements recursively, applying vendor prefixes, and generating source maps (e.g., `@media`, `@supports`, `@layer` wrappers for conditional imports).
- **Options**: Supports fine-tuning via `externals`, `loaders`, `mainFields`, `minify`, `sourceMap`, `sourcesContent`, `target`, `targetPath`, and `vars` (for CSS variable injection with nested namespace support).
- **Usage**: Processes assets (local or Node packages) via `@import` or `url()`, with output controlled by Hugo’s resource pipeline (e.g., `fingerprint` for SRI hashes) and environment-aware minification/source maps.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-29T17:00:18.838879+05:30

## Related Tags

- frontend_ui
- models
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/functions/css/build/
