---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-08-04T14:46:42.711767+05:30'
collected_at: '2026-08-04T14:46:42.711781+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-08-04T14:46:42.711781+05:30'
last_seen: '2026-08-04T14:46:42.711781+05:30'
last_checked: '2026-08-04T14:46:42.711781+05:30'
health_score: 100
---

# Render

## Summary

- The `Render` method on a `Page` object renders a view template with the page as context, returning `template.HTML`; introduced in Hugo v0.164.0, it supports slash-separated directory paths for the `VIEW` argument, resolved via template lookup order.

- Template resolution follows Hugo’s lookup order: for `{{ .Render "summary" }}`, `books` type pages use `layouts/books/summary.html`, while others use `layouts/summary.html`; path segments (e.g., `_views/summary`) allow explicit subdirectory targeting.

- Unlike the `partial` function, `Render` automatically passes the `Page` object as context without additional parameters, while `partial` requires explicit context specification and is restricted to `layouts/_partials`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-04T14:46:42.711767+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
