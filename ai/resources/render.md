---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-08-05T01:36:51.620016+05:30'
collected_at: '2026-08-05T01:36:51.620024+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-08-05T01:36:51.620024+05:30'
last_seen: '2026-08-05T01:36:51.620024+05:30'
last_checked: '2026-08-05T01:36:51.620024+05:30'
health_score: 100
---

# Render

## Summary

- The `Render` method on a `Page` object in Hugo (v0.164.0+) renders a view template with the page as context, returning `template.HTML`; the `VIEW` argument supports slash-separated directory paths without file extensions and resolves templates via Hugo's lookup order.

- Template resolution prioritizes type-specific paths (e.g., `layouts/books/summary.html` for `books` type pages) before falling back to generic paths (e.g., `layouts/summary.html`), enabling context-aware rendering.

- Unlike the `partial` function, `Render` automatically passes the `Page` object as context without additional parameters, while `partial` requires explicit context specification and restricts templates to the `_partials` directory.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-05T01:36:51.620016+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
