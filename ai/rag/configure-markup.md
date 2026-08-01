---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-01T14:12:10.426144+05:30'
collected_at: '2026-08-01T14:12:10.426167+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-01T14:12:10.426167+05:30'
last_seen: '2026-08-01T14:12:10.426167+05:30'
last_checked: '2026-08-01T14:12:10.426167+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering (`.md`, `.mdown`, `.markdown`), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration; Goldmark is recommended for speed, CommonMark/GFM compliance, and maintenance.

- **Goldmark Configuration**: Goldmark’s default settings include extensions like `definitionList`, `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, and `typographer`; critical toggles include `duplicateResourceFiles` (multilingual resource handling), `wrapStandAloneImageWithinParagraph` (standalone image rendering), and `autoHeadingID` (auto-generated heading IDs).

- **Extras & Passthrough**: The `extras` extension enables HTML elements (`<del>`, `<ins>`, `<mark>`, `<sub>`, `<sup>`) via Markdown syntax (e.g., `++insert++`, `==mark==`, `H~2~O`); the `passthrough` extension supports LaTeX-based mathematical expressions for equations.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-01T14:12:10.426144+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
