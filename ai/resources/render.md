---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-08-03T20:55:06.752985+05:30'
collected_at: '2026-08-03T20:55:06.752994+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-08-03T20:55:06.752994+05:30'
last_seen: '2026-08-03T20:55:06.752994+05:30'
last_checked: '2026-08-03T20:55:06.752994+05:30'
health_score: 100
---

# Render

## Summary

- **Syntax & Return**: `PAGE.Render VIEW` renders a view template with the given page as context, returning `template.HTML`. The `VIEW` argument supports slash-separated directory paths (e.g., `"_views/summary"`) and excludes file extensions.

- **Template Resolution**: Hugo resolves the `VIEW` template via the [template lookup order](https://gohugo.io/templates/lookup-order/), allowing different paths per content type (e.g., `layouts/books/summary.html` for `books` type, `layouts/summary.html` otherwise).

- **Key Differences from `partial`**: `Render` auto-passes the `Page` object as context, while `partial` requires explicit context passing. `Render` uses template lookup order, whereas `partial` requires paths relative to `layouts/_partials/`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-03T20:55:06.752985+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
