---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-07-14T13:04:37.374650+05:30'
collected_at: '2026-07-14T13:04:37.374663+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-07-14T13:04:37.374663+05:30'
last_seen: '2026-07-14T13:04:37.374663+05:30'
last_checked: '2026-07-14T13:04:37.374663+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering (`.md`, `.mdown`, `.markdown`), with configurable alternatives (`asciidocext`, `org`, `pandoc`, `rst`) requiring external tooling and security policy updates.

- **Goldmark Configuration**: Default Goldmark settings include extensions like `footnote` (enabled), `linkify` (GFM autolinks), `strikethrough`, `table`, `taskList`, and `typographer` (character replacements), with parser/renderer options like `autoHeadingID`, `hardWraps`, and `unsafe` rendering.

- **Extras & Passthrough**: Optional `extras` extension enables `<del>`, `<ins>`, `<mark>`, sub/superscript via `++bar++`, `==baz==`, `H~2~O`, `1^st^`; `passthrough` supports LaTeX math equations; conflicts (e.g., `subscript` vs `strikethrough`) require manual resolution.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-14T13:04:37.374650+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
