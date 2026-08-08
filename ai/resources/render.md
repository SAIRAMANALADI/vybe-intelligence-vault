---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-08-08T15:35:02.175896+05:30'
collected_at: '2026-08-08T15:35:02.175908+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-08-08T15:35:02.175908+05:30'
last_seen: '2026-08-08T15:35:02.175908+05:30'
last_checked: '2026-08-08T15:35:02.175908+05:30'
health_score: 100
---

# Render

## Summary

- `Render` method (introduced in Hugo v0.164.0) on a `Page` object renders a view template with the page as context, returning `template.HTML`; the `VIEW` argument supports slash-separated directory paths without file extensions, resolved via Hugo's template lookup order.

- Template resolution prioritizes type-specific paths (e.g., `layouts/books/summary.html` for `books` type) before falling back to generic paths (e.g., `layouts/summary.html`); best practice groups view templates in dedicated subdirectories (e.g., `_views`).

- Key differences from `partial` function: `Render` auto-passes the `Page` context (no additional args), while `partial` requires explicit context and template path relative to `layouts/_partials`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-08T15:35:02.175896+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
