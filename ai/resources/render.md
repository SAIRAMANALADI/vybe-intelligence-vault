---
title: Render
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/methods/page/render/#article
published_at: '2026-07-18T01:12:19.315005+05:30'
collected_at: '2026-07-18T01:12:19.315015+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:render
first_seen: '2026-07-18T01:12:19.315015+05:30'
last_seen: '2026-07-18T01:12:19.315015+05:30'
last_checked: '2026-07-18T01:12:19.315015+05:30'
health_score: 100
---

# Render

## Summary

- **Method Signature**: `PAGE.Render VIEW` returns `template.HTML`, where `VIEW` is a slash-separated directory path (no extension) resolved via Hugo’s template lookup order.
- **Template Resolution**: Resolves to `layouts/<type>/_views/summary.html` for type-specific pages (e.g., `books`) or falls back to `layouts/_views/summary.html` for others.
- **Key Differences**: Unlike `partial`, `Render` auto-passes the `Page` object as context and does not require manual context specification.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-18T01:12:19.315005+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/methods/page/render/#article
