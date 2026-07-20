---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-07-20T03:49:11.587781+05:30'
collected_at: '2026-07-20T03:49:11.587798+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-07-20T03:49:11.587798+05:30'
last_seen: '2026-07-20T03:49:11.587798+05:30'
last_checked: '2026-07-20T03:49:11.587798+05:30'
health_score: 100
---

# Render

## Summary

- **Syntax & Return**: `PAGE.Render VIEW` renders a view template with the given page as context, returning `template.HTML`. The `VIEW` argument supports slash-separated directory paths and excludes file extensions.

- **Template Resolution**: Hugo resolves the `VIEW` template via the [template lookup order](https://gohugo.io/templates/lookup-order/), mapping to different templates based on page type (e.g., `layouts/books/summary.html` for `books` type, otherwise `layouts/summary.html`).

- **Key Differences from `partial`**: `Render` auto-passes the `Page` object as context and resolves templates via lookup order, whereas `partial` requires explicit context and template path relative to `layouts/_partials`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-20T03:49:11.587781+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
