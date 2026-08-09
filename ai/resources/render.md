---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-08-09T15:37:49.472091+05:30'
collected_at: '2026-08-09T15:37:49.472104+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-08-09T15:37:49.472104+05:30'
last_seen: '2026-08-09T15:37:49.472104+05:30'
last_checked: '2026-08-09T15:37:49.472104+05:30'
health_score: 100
---

# Render

## Summary

- **Syntax & Return**: `PAGE.Render VIEW` renders a view template with the given page as context, returning `template.HTML`. Introduced in Hugo v0.164.0, the `VIEW` argument supports slash-separated directory paths without file extensions.

- **Template Resolution**: Hugo resolves the `VIEW` template via the [template lookup order](https://gohugo.io/templates/lookup-order/), allowing the same `VIEW` value to map to different templates based on page type (e.g., `layouts/books/summary.html` for `books` type, otherwise `layouts/summary.html`).

- **Key Differences from `partial`**: `Render` auto-passes the `Page` object as context (no additional parameters allowed), while `partial` requires explicit context and restricts templates to `layouts/_partials/`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T15:37:49.472091+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
