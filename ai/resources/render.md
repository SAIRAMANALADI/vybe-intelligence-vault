---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-08-05T22:34:39.470593+05:30'
collected_at: '2026-08-05T22:34:39.470607+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-08-05T22:34:39.470607+05:30'
last_seen: '2026-08-05T22:34:39.470607+05:30'
last_checked: '2026-08-05T22:34:39.470607+05:30'
health_score: 100
---

# Render

## Summary

- **Syntax & Return**: `PAGE.Render VIEW` renders a view template with the given page as context, returning `template.HTML`. Supports slash-separated directory paths in `VIEW` (e.g., `_views/summary`), resolved via Hugo's template lookup order.

- **Template Resolution**: Hugo resolves `VIEW` to different templates based on page type. For `books` pages, `layouts/books/summary.html` is used; otherwise, `layouts/summary.html` is used. Path segments enable hierarchical template resolution (e.g., `_views/summary`).

- **Key Differences from `partial`**: `Render` auto-passes the `Page` object as context and resolves templates via lookup order, while `partial` requires explicit context and template path (relative to `layouts/_partials`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-05T22:34:39.470593+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
