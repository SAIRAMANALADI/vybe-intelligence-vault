---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-02T19:32:12.190768+05:30'
collected_at: '2026-08-02T19:32:12.190779+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-02T19:32:12.190779+05:30'
last_seen: '2026-08-02T19:32:12.190779+05:30'
last_checked: '2026-08-02T19:32:12.190779+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering, with configurable alternatives (`asciidocext`, `org`, `pandoc`, `rst`) requiring external tooling and security policy updates.

- **Goldmark Configuration**: Default Goldmark settings include extensions (`footnote`, `table`, `taskList`, `typographer`, etc.), parser behaviors (`autoHeadingID`, `wrapStandAloneImageWithinParagraph`), and renderer options (`hardWraps`, `unsafe`).

- **Extras & Conflicts**: The `extras` extension enables subscript/superscript/deleted text via `++`, `~`, or `==` syntax, but conflicts with `strikethrough` (must disable `strikethrough` when enabling `subscript`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T19:32:12.190768+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
