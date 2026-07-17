---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-07-17T14:08:20.522663+05:30'
collected_at: '2026-07-17T14:08:20.522673+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-07-17T14:08:20.522673+05:30'
last_seen: '2026-07-17T14:08:20.522673+05:30'
last_checked: '2026-07-17T14:08:20.522673+05:30'
health_score: 100
---

# Render

## Summary

- `Render` method (`.Render VIEW`) on a `Page` object renders a view template with the page as context, returning `template.HTML`; introduced in Hugo v0.164.0.
- Template resolution follows Hugo's lookup order, with `VIEW` optionally prefixed by slash-separated directory paths (e.g., `books/summary` resolves to `layouts/books/summary.html` for `books` pages, else `layouts/summary.html`).
- Key differences from `partial`: `Render` auto-passes `Page` context and resolves templates via lookup order, while `partial` requires explicit context and path relative to `layouts/_partials`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-17T14:08:20.522663+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
