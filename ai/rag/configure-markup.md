---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-02T21:50:30.673250+05:30'
collected_at: '2026-08-02T21:50:30.673263+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-02T21:50:30.673263+05:30'
last_seen: '2026-08-02T21:50:30.673263+05:30'
last_checked: '2026-08-02T21:50:30.673263+05:30'
health_score: 100
---

# Configure markup

## Summary

- Hugo defaults to **Goldmark** for Markdown rendering, with support for alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration; requires external tooling for non-default handlers.

- Goldmark’s default extensions include **CommonMark/GFM compliance** (`table`, `strikethrough`, `taskList`, `linkify`), **typographer** (smart quotes, dashes), and **footnotes**; extras (e.g., `subscript`, `superscript`) require explicit enabling.

- Key Goldmark settings: `duplicateResourceFiles` (controls multilingual resource duplication), `parser.autoHeadingID` (auto-generates heading IDs), and `parser.wrapStandAloneImageWithinParagraph` (controls standalone image rendering behavior).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T21:50:30.673250+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
