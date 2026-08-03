---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-03T15:44:26.617147+05:30'
collected_at: '2026-08-03T15:44:26.617162+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-03T15:44:26.617162+05:30'
last_seen: '2026-08-03T15:44:26.617162+05:30'
last_checked: '2026-08-03T15:44:26.617162+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering, with configurable alternatives (`asciidocext`, `org`, `pandoc`, `rst`) requiring external dependencies and security policy updates.

- **Goldmark Configuration**: Goldmark’s default settings include extensions like `footnote`, `linkify`, `strikethrough`, and `table`, with configurable typographer replacements and parser behaviors (e.g., `autoHeadingID`, `wrapStandAloneImageWithinParagraph`).

- **Extras & Passthrough**: The `extras` extension enables deleted/inserted text, sub/superscript, and marked text (e.g., `++bar++`, `==baz==`), while `passthrough` supports LaTeX math equations; conflicts (e.g., subscript vs. strikethrough) require explicit disabling.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T15:44:26.617147+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
