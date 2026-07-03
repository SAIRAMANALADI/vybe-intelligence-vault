---
title: Link render hooks
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/render-hooks/links/#position
published_at: '2026-07-04T03:55:11.227665+05:30'
collected_at: '2026-07-04T03:55:11.227676+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:link-render-hooks
first_seen: '2026-07-04T03:55:11.227676+05:30'
last_seen: '2026-07-04T03:55:11.227676+05:30'
last_checked: '2026-07-04T03:55:11.227676+05:30'
health_score: 100
---

# Link render hooks

## Summary

- **Link Render Hook Context**: Link render hooks in Hugo receive structured context including `Destination` (link URL), `Ordinal` (zero-based link index), `Page`/`PageInner` (current/included page references), `PlainText`/`Text` (link description), `Title` (link title), and `Position` (link location in content), with `PageInner` resolving paths relative to included pages via `RenderShortcodes`.

- **Embedded Hook Behavior**: Hugo’s embedded link render hook (`useEmbedded: auto`) resolves internal destinations (pages/resources) or passes through remote URLs, with fallback behavior controlled via `markup.goldmark.renderHooks.link.useEmbedded` (options: `auto`, `always`, `fallback`, `never`).

- **Static Asset Mounting**: For link resolution, global resources must reside in `assets/`, but static resources can be mounted to `assets/` via `module.mounts` to ensure compatibility with the embedded hook’s resolution logic.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-04T03:55:11.227665+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/render-hooks/links/#position
