---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-07T05:55:50.050388+05:30'
collected_at: '2026-08-07T05:55:50.050400+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-07T05:55:50.050400+05:30'
last_seen: '2026-08-07T05:55:50.050400+05:30'
last_checked: '2026-08-07T05:55:50.050400+05:30'
health_score: 100
---

# Configure markup

## Summary

- Hugo defaults to **Goldmark** for Markdown rendering (CommonMark/GFM-compliant), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration with required external dependencies.

- Goldmark’s default extensions (enabled by default) include `definitionList`, `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, and `typographer`, with configurable behaviors (e.g., `autoHeadingID`, `parser.wrapStandAloneImageWithinParagraph`).

- Extras extension enables `++insert++`, `~~delete~~`, `==mark==`, `H~2~O` (subscript), and `1^st^` (superscript); conflicts with `strikethrough` require explicit disabling (`strikethrough: false`) when enabling subscript/deleted text.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-07T05:55:50.050388+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
