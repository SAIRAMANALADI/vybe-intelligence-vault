---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-06T14:37:08.770693+05:30'
collected_at: '2026-08-06T14:37:08.770708+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-06T14:37:08.770708+05:30'
last_seen: '2026-08-06T14:37:08.770708+05:30'
last_checked: '2026-08-06T14:37:08.770708+05:30'
health_score: 100
---

# Configure markup

## Summary

- Hugo defaults to **Goldmark** for Markdown rendering, with support for alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) requiring external installation and security policy updates.

- **Goldmark** supports configurable extensions (e.g., `footnote`, `typographer`, `strikethrough`) and extras (e.g., `subscript`, `superscript`), with conflicts resolved via explicit disabling (e.g., `strikethrough: false` when enabling `subscript`).

- Key Goldmark settings include `duplicateResourceFiles` (for multilingual projects), `wrapStandAloneImageWithinParagraph` (controls `p` wrapping for images), and `autoHeadingID`/`autoIDType` (for automatic heading `id` generation).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-06T14:37:08.770693+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
