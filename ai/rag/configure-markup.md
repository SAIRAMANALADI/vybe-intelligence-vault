---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-03T03:49:07.445006+05:30'
collected_at: '2026-08-03T03:49:07.445014+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-03T03:49:07.445014+05:30'
last_seen: '2026-08-03T03:49:07.445014+05:30'
last_checked: '2026-08-03T03:49:07.445014+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering, with support for alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) configurable via `defaultMarkdownHandler` in project settings.

- **Goldmark Configuration**: Goldmark’s default settings include extensions like `footnote`, `linkify`, `strikethrough`, and `typographer`, with configurable parser/renderer behaviors (e.g., `autoHeadingID`, `hardWraps`, `unsafe` HTML rendering).

- **Extras & Passthrough**: The `extras` extension enables subscript/superscript (`H~2~O`, `1^st^`) and deleted/inserted text (`~~foo~~`, `++bar++`), while `passthrough` allows LaTeX-based mathematical expressions when enabled. Conflicts (e.g., subscript vs. strikethrough) require explicit disabling of conflicting extensions.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T03:49:07.445006+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
