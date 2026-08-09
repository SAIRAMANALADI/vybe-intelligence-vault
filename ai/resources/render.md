---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-08-09T21:29:45.988958+05:30'
collected_at: '2026-08-09T21:29:45.988972+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-08-09T21:29:45.988972+05:30'
last_seen: '2026-08-09T21:29:45.988972+05:30'
last_checked: '2026-08-09T21:29:45.988972+05:30'
health_score: 100
---

# Render

## Summary

- **`Render` Method**: Renders a view template with the given `Page` object as context, returning `template.HTML`. Supports slash-separated directory paths for `VIEW` argument (introduced in v0.164.0), with template resolution via Hugo's lookup order.

- **Template Resolution**: `VIEW` maps to different templates based on content type (e.g., `layouts/books/summary.html` for `books` type, otherwise `layouts/summary.html`). Best practice: use dedicated subdirectories (e.g., `_views`).

- **Key Differences from `partial`**: `Render` auto-passes `Page` context (no additional args allowed), while `partial` requires explicit context and resolves templates strictly from `layouts/_partials`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T21:29:45.988958+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
