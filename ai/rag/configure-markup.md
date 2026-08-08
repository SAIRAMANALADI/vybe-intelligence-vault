---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-09T03:26:11.988370+05:30'
collected_at: '2026-08-09T03:26:11.988387+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-09T03:26:11.988387+05:30'
last_seen: '2026-08-09T03:26:11.988387+05:30'
last_checked: '2026-08-09T03:26:11.988387+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to **Goldmark** for Markdown rendering, with alternative handlers (`asciidocext`, `org`, `pandoc`, `rst`) requiring external dependencies and security policy updates.

- **Goldmark Configuration**: Core settings include `duplicateResourceFiles`, `parser.wrapStandAloneImageWithinParagraph`, `parser.autoHeadingID`, and extensions like `footnote`, `linkify`, `strikethrough`, and `typographer` (e.g., `...` → `…`).

- **Extras & Passthrough**: The `extras` extension enables subscript/superscript (`H~2~O` → `H₂O`) but conflicts with `strikethrough`; `passthrough` allows LaTeX math rendering via configurable delimiters.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T03:26:11.988370+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
