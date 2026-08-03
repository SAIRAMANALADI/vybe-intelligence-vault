---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-08-03T22:59:36.318482+05:30'
collected_at: '2026-08-03T22:59:36.318498+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-08-03T22:59:36.318498+05:30'
last_seen: '2026-08-03T22:59:36.318498+05:30'
last_checked: '2026-08-03T22:59:36.318498+05:30'
health_score: 100
---

# Render

## Summary

- **`Render` Method**: Renders a view template with the given `Page` object as context, returning `template.HTML`. Introduced in Hugo v0.164.0, it supports slash-separated directory paths in the `VIEW` argument for template resolution via Hugo's lookup order.

- **Template Resolution**: The `VIEW` argument maps to different templates based on the page type (e.g., `layouts/books/summary.html` for `books` type pages, otherwise `layouts/summary.html`). Best practice is to group view templates in a dedicated subdirectory (e.g., `_views`).

- **Key Differences from `partial`**: `Render` auto-passes the `Page` object as context without additional parameters, while `partial` requires explicit context and resolves templates strictly from `layouts/_partials`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-03T22:59:36.318482+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
