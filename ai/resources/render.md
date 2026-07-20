---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-07-20T15:12:09.785967+05:30'
collected_at: '2026-07-20T15:12:09.785976+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-07-20T15:12:09.785976+05:30'
last_seen: '2026-07-20T15:12:09.785976+05:30'
last_checked: '2026-07-20T15:12:09.785976+05:30'
health_score: 100
---

# Render

## Summary

- **Purpose**: The `Render` method on a `Page` object renders a [view template](https://gohugo.io/templates/types/#view) with the given page as context, returning `template.HTML`. Introduced in Hugo v0.164.0, it supports slash-separated directory paths in the `VIEW` argument for template resolution.

- **Template Resolution**: The `VIEW` argument maps to different templates based on the page type and [template lookup order](https://gohugo.io/templates/lookup-order/). For example, `books/summary` resolves to `layouts/books/summary.html` for `books` pages and `layouts/summary.html` for others.

- **Key Differences from `partial`**: The `Render` method automatically passes the `Page` object as context and resolves templates via lookup order, whereas the `partial` function requires explicit context specification and template paths relative to `layouts/_partials`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-20T15:12:09.785967+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
