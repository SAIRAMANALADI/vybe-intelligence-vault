---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-08-03T15:44:21.352474+05:30'
collected_at: '2026-08-03T15:44:21.352488+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-08-03T15:44:21.352488+05:30'
last_seen: '2026-08-03T15:44:21.352488+05:30'
last_checked: '2026-08-03T15:44:21.352488+05:30'
health_score: 100
---

# Render

## Summary

- **`Render` Method**: Renders a view template with the given `Page` object as context, returning `template.HTML`. Introduced in v0.164.0, supports slash-separated directory paths for `VIEW` argument, resolved via template lookup order.

- **Template Resolution**: `VIEW` maps to different templates based on page type; e.g., `books` type resolves to `layouts/books/summary.html`, while others use `layouts/summary.html`. Best practice: group view templates in dedicated subdirectories (e.g., `_views`).

- **Key Differences from `partial`**: `Render` auto-passes `Page` context without additional parameters; template resolution is automatic via lookup order. `partial` requires explicit context and template path relative to `layouts/_partials`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-03T15:44:21.352474+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
