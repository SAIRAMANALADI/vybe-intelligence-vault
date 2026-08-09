---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-09T10:18:45.747832+05:30'
collected_at: '2026-08-09T10:18:45.747839+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-09T10:18:45.747839+05:30'
last_seen: '2026-08-09T10:18:45.747839+05:30'
last_checked: '2026-08-09T10:18:45.747839+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering (`.md`, `.mdown`, `.markdown`), with alternative handlers (`asciidocext`, `org`, `pandoc`, `rst`) requiring external tooling and security policy updates.

- **Goldmark Configuration**: Goldmark’s default settings include extensions like `definitionList`, `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, and `typographer`, with configurable parser (`autoHeadingID`, `wrapStandAloneImageWithinParagraph`) and renderer (`hardWraps`, `unsafe`) options.

- **Extras & Passthrough**: The `extras` extension enables `<del>`, `<ins>`, `<mark>`, subscript/superscript via `++`, `~~`, `==`, `H~2~O`, `1^st^`, while `passthrough` supports LaTeX math equations; conflicts (e.g., `strikethrough` vs. `subscript`) require explicit disabling.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T10:18:45.747832+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
