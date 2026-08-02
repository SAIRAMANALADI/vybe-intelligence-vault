---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-08-03T01:12:36.311071+05:30'
collected_at: '2026-08-03T01:12:36.311081+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-08-03T01:12:36.311081+05:30'
last_seen: '2026-08-03T01:12:36.311081+05:30'
last_checked: '2026-08-03T01:12:36.311081+05:30'
health_score: 100
---

# Render

## Summary

- **Syntax & Return**: `PAGE.Render VIEW` renders a view template with the given page as context, returning `template.HTML`; `VIEW` supports slash-separated directory paths without file extensions.

- **Template Resolution**: Hugo resolves `VIEW` via template lookup order, enabling type-specific rendering (e.g., `layouts/books/summary.html` for `books` type, else `layouts/summary.html`).

- **Key Differences**: `Render` auto-passes `Page` context and uses lookup order, whereas `partial` requires explicit context and is restricted to `layouts/_partials`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-03T01:12:36.311071+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
