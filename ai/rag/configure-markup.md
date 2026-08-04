---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-04T17:14:28.323551+05:30'
collected_at: '2026-08-04T17:14:28.323566+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-04T17:14:28.323566+05:30'
last_seen: '2026-08-04T17:14:28.323566+05:30'
last_checked: '2026-08-04T17:14:28.323566+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering, with configurable alternatives (`asciidocext`, `org`, `pandoc`, `rst`) requiring external toolchain installation and security policy adjustments.

- **Goldmark Configuration**: Goldmark’s default settings include GFM/CommonMark compliance, extensions (footnotes, tables, task lists), typographer replacements, and parser/renderer options (e.g., `autoHeadingID`, `unsafe` rendering).

- **Extension Conflicts & Workarounds**: Extras extension (subscript/superscript) requires disabling `strikethrough`; `passthrough` enables LaTeX math, while `duplicateResourceFiles` affects multilingual resource handling in single-host setups.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T17:14:28.323551+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
