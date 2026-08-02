---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-02T16:29:08.825178+05:30'
collected_at: '2026-08-02T16:29:08.825186+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-02T16:29:08.825186+05:30'
last_seen: '2026-08-02T16:29:08.825186+05:30'
last_checked: '2026-08-02T16:29:08.825186+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering (`.md`, `.mdown`, `.markdown`), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration; Goldmark is recommended for its speed, CommonMark/GFM compliance, and maintenance.

- **Goldmark Configuration**: Goldmark’s default settings include enabled extensions (e.g., `footnote`, `table`, `taskList`, `typographer`) and configurable parser/renderer options (e.g., `autoHeadingID`, `hardWraps`, `unsafe`); Extras/Passthrough extensions require explicit enablement for features like subscript/superscript or LaTeX math.

- **Key Settings**: Critical Goldmark settings include `duplicateResourceFiles` (for multilingual projects), `wrapStandAloneImageWithinParagraph` (controls `p` wrapping for standalone images), and `autoIDType`/`autoHeadingID` (for automatic heading `id` generation).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T16:29:08.825178+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
