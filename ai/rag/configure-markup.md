---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-07-07T23:05:33.672037+05:30'
collected_at: '2026-07-07T23:05:33.672053+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-07-07T23:05:33.672053+05:30'
last_seen: '2026-07-07T23:05:33.672053+05:30'
last_checked: '2026-07-07T23:05:33.672053+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering (`.md`, `.mdown`, `.markdown`), with configurable alternatives (`asciidocext`, `org`, `pandoc`, `rst`) requiring external tooling and security policy updates.

- **Goldmark Configuration**: Default Goldmark settings include extensions like `footnote` (enabled), `typographer` (character replacements), `linkify` (autolinks), and `table` (GFM-compliant), with parser/renderer options (`autoHeadingID`, `hardWraps`, `unsafe`).

- **Extras & Passthrough**: Optional `extras` extension enables `<del>`, `<ins>`, `<mark>`, sub/superscript via `++text++`, `~~text~~`, `==text==`, `H~2~O`, `1^st^`; `passthrough` enables LaTeX math equations. Conflicts (e.g., `subscript` vs `strikethrough`) require explicit disabling.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-07T23:05:33.672037+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
