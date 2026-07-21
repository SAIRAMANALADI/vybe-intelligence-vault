---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-07-21T16:57:19.884824+05:30'
collected_at: '2026-07-21T16:57:19.884835+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-07-21T16:57:19.884835+05:30'
last_seen: '2026-07-21T16:57:19.884835+05:30'
last_checked: '2026-07-21T16:57:19.884835+05:30'
health_score: 100
---

# Render

## Summary

- **Purpose**: The `Render` method on a `Page` object renders a [view template](https://gohugo.io/templates/types/#view) with the given page as context, returning `template.HTML`. Introduced in Hugo v0.164.0.

- **Template Resolution**: The `VIEW` argument supports slash-separated directory paths and resolves templates via Hugo's [template lookup order](https://gohugo.io/templates/lookup-order/). Example: `{{ .Render "summary" }}` resolves to `layouts/books/summary.html` for `books` type pages, otherwise `layouts/summary.html`.

- **Key Differences**: Unlike the [`partial`](https://gohugo.io/functions/partials/include/) function, `Render` automatically passes the `Page` object as context and resolves templates via lookup order, while `partial` requires explicit context and template path relative to `layouts/_partials`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-21T16:57:19.884824+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
