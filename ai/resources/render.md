---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-07-08T14:23:06.312679+05:30'
collected_at: '2026-07-08T14:23:06.312694+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-07-08T14:23:06.312694+05:30'
last_seen: '2026-07-08T14:23:06.312694+05:30'
last_checked: '2026-07-08T14:23:06.312694+05:30'
health_score: 100
---

# Render

## Summary

- **`Render` Method**: Renders a view template with the current `Page` object as context, returning `template.HTML`. Introduced in v0.164.0, it supports slash-separated directory paths for template lookup.

- **Template Resolution**: Resolves view templates via Hugo's [template lookup order](https://gohugo.io/templates/lookup-order/), allowing type-specific overrides (e.g., `layouts/books/summary.html` for "books" pages).

- **Key Differences from `partial`**: Automatically passes `Page` context; no additional parameters allowed. Template resolution is dynamic, unlike `partial`, which requires explicit context and path (`layouts/_partials/`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-08T14:23:06.312679+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
