---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-10T00:43:40.749595+05:30'
collected_at: '2026-08-10T00:43:40.749607+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-10T00:43:40.749607+05:30'
last_seen: '2026-08-10T00:43:40.749607+05:30'
last_checked: '2026-08-10T00:43:40.749607+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), with alternative handlers (`asciidocext`, `org`, `pandoc`, `rst`) requiring external tooling and security policy updates.

- **Goldmark Configuration**: Goldmark’s default settings include extensions like `footnote`, `linkify`, `strikethrough`, `table`, and `taskList`, with configurable typography, parser behavior (`autoHeadingID`, `wrapStandAloneImageWithinParagraph`), and render hooks for images/links.

- **Extras & Passthrough**: The `extras` extension enables subscript/superscript, insert/delete, and mark text via `H~2~O`, `1^st^`, `++bar++`, `~~foo~~`, and `==baz==`, while `passthrough` supports LaTeX for mathematical expressions. Conflicts (e.g., `subscript` vs. `strikethrough`) require explicit disabling.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T00:43:40.749595+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
