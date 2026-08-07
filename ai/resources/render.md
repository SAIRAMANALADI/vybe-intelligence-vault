---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-08-07T05:58:49.155513+05:30'
collected_at: '2026-08-07T05:58:49.155529+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-08-07T05:58:49.155529+05:30'
last_seen: '2026-08-07T05:58:49.155529+05:30'
last_checked: '2026-08-07T05:58:49.155529+05:30'
health_score: 100
---

# Render

## Summary

- `Render` method on a `Page` object renders a view template with the page as context, returning `template.HTML`; introduced in Hugo v0.164.0, supporting slash-separated directory paths for `VIEW` argument.
- Template resolution follows Hugo’s lookup order, allowing `VIEW` to map to different templates (e.g., `layouts/books/summary.html` for `books` type, `layouts/summary.html` otherwise).
- Unlike `partial`, `Render` auto-passes the `Page` object as context and resolves templates via lookup order, while `partial` requires explicit context and paths under `layouts/_partials`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-07T05:58:49.155513+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
