---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-08-10T21:54:16.163248+05:30'
collected_at: '2026-08-10T21:54:16.163257+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-08-10T21:54:16.163257+05:30'
last_seen: '2026-08-10T21:54:16.163257+05:30'
last_checked: '2026-08-10T21:54:16.163257+05:30'
health_score: 100
---

# Render

## Summary

- **Method Overview**: `PAGE.Render VIEW` renders a view template with the page as context, returning `template.HTML`; introduced in Hugo v0.164.0.

- **Template Resolution**: `VIEW` supports slash-separated paths (e.g., `"_views/summary"`) and resolves via Hugo’s template lookup order, enabling type-specific templates (e.g., `layouts/books/summary.html` for `books` type).

- **Key Differences**: `Render` auto-passes the `Page` context and uses lookup order, while `partial` requires explicit context and path from `layouts/_partials`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T21:54:16.163248+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
