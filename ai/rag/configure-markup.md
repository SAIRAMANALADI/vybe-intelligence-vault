---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-03T20:55:37.055310+05:30'
collected_at: '2026-08-03T20:55:37.055320+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-03T20:55:37.055320+05:30'
last_seen: '2026-08-03T20:55:37.055320+05:30'
last_checked: '2026-08-03T20:55:37.055320+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering (`.md`, `.mdown`, `.markdown`), with alternative handlers (`asciidocext`, `org`, `pandoc`, `rst`) requiring external tool installation and security policy updates.

- **Goldmark Configuration**: Goldmark’s default settings include enabled extensions (e.g., `definitionList`, `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, `typographer`) and configurable parser/renderer options (e.g., `autoHeadingID`, `hardWraps`, `unsafe`).

- **Extras & Passthrough**: The `extras` extension enables deleted/inserted text, mark text, sub/superscript via `++bar++`, `==baz==`, `H~2~O`, and `1^st^`, while `passthrough` supports LaTeX-based mathematical expressions; conflicts (e.g., `subscript` vs. `strikethrough`) require explicit disabling of one.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T20:55:37.055310+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
