---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-06T17:14:55.452683+05:30'
collected_at: '2026-08-06T17:14:55.452693+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-06T17:14:55.452693+05:30'
last_seen: '2026-08-06T17:14:55.452693+05:30'
last_checked: '2026-08-06T17:14:55.452693+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markup Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`.md`, `.mdown`, `.markdown`), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via `defaultMarkdownHandler` in project config; requires external tooling and security policy updates for non-Goldmark handlers.

- **Goldmark Extensions & Settings**: Goldmark’s default extensions (e.g., `footnote`, `table`, `taskList`, `typographer`) are enabled; configurable via `markup.goldmark` with granular control over parser, renderer, and render hooks (e.g., `duplicateResourceFiles`, `autoHeadingID`, `wrapStandAloneImageWithinParagraph`).

- **Extras & Passthrough**: The `extras` extension enables subscript/superscript (`H~2~O`, `1^st^`), deleted/inserted text (`~~foo~~`, `++bar++`), and mark text (`==baz==`); `passthrough` allows LaTeX math equations; conflicts (e.g., `subscript` vs. `strikethrough`) require explicit disabling of one to avoid ambiguity.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-06T17:14:55.452683+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
