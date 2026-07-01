---
title: Link render hooks
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/render-hooks/links/#position
published_at: '2026-07-01T23:00:26.308348+05:30'
collected_at: '2026-07-01T23:00:26.308361+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:link-render-hooks
first_seen: '2026-07-01T23:00:26.308361+05:30'
last_seen: '2026-07-01T23:00:26.308361+05:30'
last_checked: '2026-07-01T23:00:26.308361+05:30'
health_score: 100
---

# Link render hooks

## Summary

- **Link Render Hook Context**: Link render hooks in Hugo receive structured context including `Destination` (link URL), `Ordinal` (zero-based link index), `Page`/`PageInner` (current/nested page references), `PlainText`/`Text` (link description), `Title` (link title), and `Position` (link location in content). New in v0.160.0: `Ordinal` and `Position` fields.

- **Default Behavior & Configuration**: Hugo’s default embedded link render hook resolves internal destinations via page/resource matching, passes through remote URLs, and supports `useEmbedded` modes (`auto`, `always`, `fallback`, `never`). Global resources must reside in `assets`; `static` resources require explicit mounting to `assets`.

- **PageInner Use Case**: `PageInner` resolves links/resources relative to included pages (e.g., via `RenderShortcodes`), enabling consistent context (e.g., footnotes, TOC) in composite pages. Requires Markdown shortcode notation and falls back to `Page` if irrelevant.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-01T23:00:26.308348+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/render-hooks/links/#position
