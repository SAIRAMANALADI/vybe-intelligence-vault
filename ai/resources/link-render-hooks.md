---
title: Link render hooks
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/render-hooks/links/#position
published_at: '2026-06-27T16:40:27.669912+05:30'
collected_at: '2026-06-27T16:40:27.669925+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:link-render-hooks
first_seen: '2026-06-27T16:40:27.669925+05:30'
last_seen: '2026-06-27T16:40:27.669925+05:30'
last_checked: '2026-06-27T16:40:27.669925+05:30'
health_score: 100
---

# Link render hooks

## Summary

- **Link Render Hook Context**: The `render-link.html` template receives structured context including `Destination` (link URL), `Text`/`PlainText` (link content), `Title` (tooltip), `Ordinal` (link index), `Page`/`PageInner` (contextual page references), and `Position` (link location in content).

- **Embedded Hook Behavior**: Hugo’s embedded link render hook resolves internal destinations via page/resource matching (falling back to global assets), while external links are passed through unchanged; configuration (`useEmbedded: auto|always|fallback|never`) controls its usage.

- **PageInner Mechanism**: The `PageInner` field enables contextual link resolution for nested content (e.g., via `RenderShortcodes`), ensuring relative paths resolve correctly within included pages while maintaining global context for footnotes/TOC.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-27T16:40:27.669912+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/render-hooks/links/#position
