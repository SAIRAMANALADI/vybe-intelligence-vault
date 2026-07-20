---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-07-20T20:12:23.916487+05:30'
collected_at: '2026-07-20T20:12:23.916505+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-07-20T20:12:23.916505+05:30'
last_seen: '2026-07-20T20:12:23.916505+05:30'
last_checked: '2026-07-20T20:12:23.916505+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering, with alternative handlers (`asciidocext`, `org`, `pandoc`, `rst`) configurable via `defaultMarkdownHandler` in project settings.

- **Goldmark Configuration**: Goldmark’s default settings include extensions like `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, and `typographer`, with configurable parser and renderer options (e.g., `autoHeadingID`, `hardWraps`).

- **Extras & Passthrough**: The `extras` extension enables HTML elements (`<del>`, `<ins>`, `<mark>`, `<sub>`, `<sup>`), while `passthrough` allows LaTeX-based mathematical expressions; conflicts (e.g., `strikethrough` vs. `subscript`) require explicit disabling.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-20T20:12:23.916487+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
