---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-08-06T04:01:56.643370+05:30'
collected_at: '2026-08-06T04:01:56.643386+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-08-06T04:01:56.643386+05:30'
last_seen: '2026-08-06T04:01:56.643386+05:30'
last_checked: '2026-08-06T04:01:56.643386+05:30'
health_score: 100
---

# Render

## Summary

- **Functionality**: The `Render` method on a `Page` object in Hugo (v0.164.0+) renders a view template with the page as context, returning `template.HTML`; the `VIEW` argument supports slash-separated directory paths and resolves templates via Hugo's lookup order.
- **Template Resolution**: `Render` prioritizes type-specific paths (e.g., `layouts/books/summary.html` for `books` type) before falling back to generic paths (e.g., `layouts/summary.html`); path segments like `_views` can be used to organize view templates.
- **Key Differences from `partial`**: `Render` auto-passes the `Page` object and uses template lookup order, while `partial` requires explicit context passing and template paths relative to `layouts/_partials`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-06T04:01:56.643370+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
