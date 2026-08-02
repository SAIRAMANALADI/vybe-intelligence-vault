---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-08-02T16:31:35.472105+05:30'
collected_at: '2026-08-02T16:31:35.472116+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-08-02T16:31:35.472116+05:30'
last_seen: '2026-08-02T16:31:35.472116+05:30'
last_checked: '2026-08-02T16:31:35.472116+05:30'
health_score: 100
---

# Render

## Summary

- **`Render` Method**: Renders a view template with the given `Page` object as context, returning `template.HTML`. Introduced in Hugo v0.164.0, the `VIEW` argument supports slash-separated directory paths and resolves templates via Hugo's [template lookup order](https://gohugo.io/templates/lookup-order/).

- **Template Resolution**: The `Render` method dynamically selects templates based on content type. For example, `{{ .Render "summary" }}` resolves to `layouts/books/summary.html` for `books` pages and `layouts/summary.html` for others, enabling type-specific rendering.

- **Key Differences from `partial`**: The `Render` method automatically passes the `Page` object as context and resolves templates globally, whereas `partial` requires explicit context passing and template paths relative to `layouts/_partials/`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-02T16:31:35.472105+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
