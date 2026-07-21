---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-07-21T16:57:14.870954+05:30'
collected_at: '2026-07-21T16:57:14.870964+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-07-21T16:57:14.870964+05:30'
last_seen: '2026-07-21T16:57:14.870964+05:30'
last_checked: '2026-07-21T16:57:14.870964+05:30'
health_score: 100
---

# Configure markup

## Summary

- Hugo defaults to **Goldmark** for Markdown rendering, with support for alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) requiring external tooling and security policy updates.

- Goldmark’s default configuration includes **CommonMark/GFM compliance**, with optional extensions (e.g., `footnote`, `typographer`, `strikethrough`) and **Extras** for subscript/superscript, requiring disabling conflicting extensions (e.g., `strikethrough` for subscript).

- Key Goldmark settings include `duplicateResourceFiles` (multilingual resource handling), `parser.wrapStandAloneImageWithinParagraph` (image wrapping behavior), and `parser.autoHeadingID` (auto-generated heading IDs).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T16:57:14.870954+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
