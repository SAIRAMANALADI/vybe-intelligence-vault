---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-04T14:46:37.905601+05:30'
collected_at: '2026-08-04T14:46:37.905615+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-04T14:46:37.905615+05:30'
last_seen: '2026-08-04T14:46:37.905615+05:30'
last_checked: '2026-08-04T14:46:37.905615+05:30'
health_score: 100
---

# Configure markup

## Summary

- Hugo defaults to **Goldmark** for Markdown rendering (`defaultMarkdownHandler: goldmark`), with support for alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) requiring external dependencies and security policy updates.

- Goldmark’s default configuration includes **CommonMark/GFM-compliant extensions** (`table`, `strikethrough`, `taskList`, `footnote`, `typographer`, etc.), with optional **Extras** (`subscript`, `superscript`, `mark`) and **Passthrough** (LaTeX math) modules.

- Key Goldmark settings include `duplicateResourceFiles` (for multilingual projects), `parser.wrapStandAloneImageWithinParagraph` (controls `<p>` wrapping for standalone images), and `parser.autoHeadingID` (auto-generates heading IDs).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T14:46:37.905601+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
