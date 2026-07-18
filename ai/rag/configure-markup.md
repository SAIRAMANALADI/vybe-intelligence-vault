---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-07-18T16:57:35.872217+05:30'
collected_at: '2026-07-18T16:57:35.872226+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-07-18T16:57:35.872226+05:30'
last_seen: '2026-07-18T16:57:35.872226+05:30'
last_checked: '2026-07-18T16:57:35.872226+05:30'
health_score: 100
---

# Configure markup

## Summary

- Hugo defaults to **Goldmark** (CommonMark-compliant) for Markdown rendering, with alternative handlers (`asciidocext`, `org`, `pandoc`, `rst`) requiring external tooling and security policy updates.

- Goldmark’s default extensions include **footnote**, **table**, **taskList**, **strikethrough**, **typographer**, and **linkify**, with configurable behaviors (e.g., `backlinkHTML` for footnotes, typographic character replacements).

- Key Goldmark settings include `duplicateResourceFiles` (affects multilingual resource handling), `parser.autoHeadingID` (auto-generates heading IDs), and `parser.wrapStandAloneImageWithinParagraph` (controls standalone image wrapping in `<p>` tags).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-18T16:57:35.872217+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
