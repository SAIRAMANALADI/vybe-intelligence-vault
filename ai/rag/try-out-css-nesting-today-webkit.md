---
title: Try out CSS Nesting today | WebKit
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://webkit.org/blog/13813/try-css-nesting-today-in-safari-technology-preview/
published_at: '2026-06-30T04:04:20.760965+05:30'
collected_at: '2026-06-30T04:04:20.760977+05:30'
tags:
- hackernews
- rag
- web-crawled
status: active
resource_id: blog:try-out-css-nesting-today-webkit
first_seen: '2026-06-30T04:04:20.760977+05:30'
last_seen: '2026-06-30T04:04:20.760977+05:30'
last_checked: '2026-06-30T04:04:20.760977+05:30'
health_score: 100
---

# Try out CSS Nesting today | WebKit

## Summary

- **CSS Nesting Implementation**: Safari Technology Preview 162+ and Chrome (with flag) support **Option 3** syntax, allowing nested rules (e.g., `.foo { .bar { ... } }`) with **symbol-restricted selectors** (`.`, `#`, `:`, `[`, etc.), except for element selectors (e.g., `article`), which require `&` prefix or `:is()` wrapper.
- **`&` Operator**: The `&` symbol resolves nesting ambiguity by placing the parent selector (e.g., `& article` → `main article`), enabling precise selector composition without unintended spaces (e.g., `&:hover` → `a:hover`).
- **Future Relaxation**: Current parsing restrictions may be lifted pending performance validation; nesting supports deep layers, integration with `@container`, `@supports`, `@media`, and `@layer`, with bug reporting encouraged via WebKit/Chromium issue trackers.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T04:04:20.760965+05:30

## Related Tags

- hackernews
- rag
- web-crawled

## Source

Original source: https://webkit.org/blog/13813/try-css-nesting-today-in-safari-technology-preview/
