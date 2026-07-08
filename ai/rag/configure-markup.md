---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-07-08T14:26:23.668437+05:30'
collected_at: '2026-07-08T14:26:23.668452+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-07-08T14:26:23.668452+05:30'
last_seen: '2026-07-08T14:26:23.668452+05:30'
last_checked: '2026-07-08T14:26:23.668452+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering (`.md`, `.mdown`, `.markdown`), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration, requiring external tool installations for non-Goldmark options.

- **Goldmark Configuration**: Goldmark’s default settings include extensions like `definitionList`, `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, and `typographer`, with configurable parser/renderer behaviors (e.g., `autoHeadingID`, `hardWraps`, `unsafe` HTML).

- **Extras & Passthrough**: The `extras` extension enables `<del>`, `<ins>`, `<mark>`, sub/superscript via `++`, `~~`, `==`, `H~2~O`, `1^st^`, while `passthrough` supports LaTeX math; conflicts (e.g., subscript vs. strikethrough) require explicit disabling of conflicting features.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-08T14:26:23.668437+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
