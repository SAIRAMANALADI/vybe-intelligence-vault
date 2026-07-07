---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-07-07T15:40:16.687902+05:30'
collected_at: '2026-07-07T15:40:16.687914+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-07-07T15:40:16.687914+05:30'
last_seen: '2026-07-07T15:40:16.687914+05:30'
last_checked: '2026-07-07T15:40:16.687914+05:30'
health_score: 100
---

# Render

## Summary

- `Render` method on a `Page` object in Hugo (v0.164.0+) accepts a slash-separated directory path for `VIEW` argument, resolving templates via Hugo's [template lookup order](https://gohugo.io/templates/lookup-order/) without file extensions.
- When using `{{ .Render "summary" }}`, Hugo resolves `layouts/books/summary.html` for "books" type pages and `layouts/summary.html` for all others, enabling type-specific view templates.
- Unlike `partial` function, `Render` automatically passes the `Page` object as context and does not allow additional context, while `partial` requires explicit context and resolves templates only from `layouts/_partials`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-07T15:40:16.687902+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
