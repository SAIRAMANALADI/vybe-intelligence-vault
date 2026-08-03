---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-04T01:37:17.501788+05:30'
collected_at: '2026-08-04T01:37:17.501801+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-04T01:37:17.501801+05:30'
last_seen: '2026-08-04T01:37:17.501801+05:30'
last_checked: '2026-08-04T01:37:17.501801+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown processing (`.md`, `.mdown`, `.markdown`), with alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) configurable via `defaultMarkdownHandler` in project settings.

- **Goldmark Configuration**: Goldmark’s default settings include extensions like `footnote`, `linkify`, `strikethrough`, `table`, and `taskList`, with optional extras (`delete`, `insert`, `mark`, `subscript`, `superscript`) and typographer replacements for special characters.

- **Key Goldmark Settings**: Critical Goldmark parameters include `duplicateResourceFiles` (resource duplication control), `parser.wrapStandAloneImageWithinParagraph` (image wrapping behavior), and `parser.autoHeadingID` (automatic heading ID generation).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T01:37:17.501788+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
