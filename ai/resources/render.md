---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-08-06T09:15:23.248945+05:30'
collected_at: '2026-08-06T09:15:23.248958+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-08-06T09:15:23.248958+05:30'
last_seen: '2026-08-06T09:15:23.248958+05:30'
last_checked: '2026-08-06T09:15:23.248958+05:30'
health_score: 100
---

# Render

## Summary

- **Method Signature & Return**: `PAGE.Render VIEW` returns `template.HTML`, rendering a view template with the page as context. Introduced in Hugo v0.164.0, the `VIEW` argument supports slash-separated directory paths without file extensions.

- **Template Resolution**: Hugo resolves the `VIEW` template via lookup order, enabling context-dependent template selection. For example, `books` type pages resolve to `layouts/books/summary.html`, while others use `layouts/summary.html`.

- **Key Differences from `partial`**: `Render` auto-passes the `Page` object as context, while `partial` requires explicit context passing. `Render` uses lookup order for templates, whereas `partial` requires paths relative to `layouts/_partials`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-06T09:15:23.248945+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
