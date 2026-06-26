---
title: Link render hooks
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/render-hooks/links/#position
published_at: '2026-06-26T15:28:15.725334+05:30'
collected_at: '2026-06-26T15:28:15.725350+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:link-render-hooks
first_seen: '2026-06-26T15:28:15.725350+05:30'
last_seen: '2026-06-26T15:28:15.725350+05:30'
last_checked: '2026-06-26T15:28:15.725350+05:30'
health_score: 100
---

# Link render hooks

## Summary

*   Hugo link render hooks (`layouts/_markup/render-link.html`) intercept Markdown link rendering, providing template context including `Destination`, `Text`, `Title`, `Page`, `PageInner`, `Ordinal`, `PlainText`, and `Position` for custom HTML output.
*   An embedded link render hook, configurable via `markup.goldmark.renderHooks.link.useEmbedded` (`auto`, `always`, `fallback`, `never`), resolves internal Markdown destinations to pages, page resources, or global resources (requiring `assets` directory or `module.mounts` for `static`).
*   The `PageInner` context (`page`) specifically provides the page reference for content being rendered via `Page.RenderShortcodes` (e.g., nested shortcode inclusions), allowing relative link resolution within the included content distinct from the parent `Page` context.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-26T15:28:15.725334+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/render-hooks/links/#position
