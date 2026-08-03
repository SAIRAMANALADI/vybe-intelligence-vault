---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-08-04T01:37:06.750363+05:30'
collected_at: '2026-08-04T01:37:06.750375+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-08-04T01:37:06.750375+05:30'
last_seen: '2026-08-04T01:37:06.750375+05:30'
last_checked: '2026-08-04T01:37:06.750375+05:30'
health_score: 100
---

# Render

## Summary

- **`Render` Method**: Renders a view template with the `Page` object as context, returning `template.HTML`. Supports slash-separated directory paths in the `VIEW` argument (e.g., `"_views/summary"`), resolving templates via Hugo's lookup order.

- **Template Resolution**: Resolves templates hierarchically; e.g., `layouts/books/summary.html` for `books` type pages, otherwise `layouts/summary.html`. Best practice groups view templates in subdirectories (e.g., `_views`).

- **Key Differences from `partial`**: `Render` auto-passes the `Page` context (no additional args), while `partial` requires explicit context and resolves templates only from `layouts/_partials`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-04T01:37:06.750363+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
