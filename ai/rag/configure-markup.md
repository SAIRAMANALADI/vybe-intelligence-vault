---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-03T22:59:31.973865+05:30'
collected_at: '2026-08-03T22:59:31.973882+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-03T22:59:31.973882+05:30'
last_seen: '2026-08-03T22:59:31.973882+05:30'
last_checked: '2026-08-03T22:59:31.973882+05:30'
health_score: 100
---

# Configure markup

## Summary

- Hugo defaults to **Goldmark** for Markdown rendering (`defaultMarkdownHandler: goldmark`), with support for alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) requiring external dependencies and security policy updates.

- **Goldmark’s default extensions** include `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, and `typographer`, with optional `extras` (subscript, superscript, etc.) and `passthrough` for LaTeX math; conflicts (e.g., `subscript` vs. `strikethrough`) require manual resolution.

- Key Goldmark settings include `duplicateResourceFiles` (controls multilingual resource duplication), `parser.wrapStandAloneImageWithinParagraph` (toggles `<p>` wrapping for standalone images), and `parser.autoHeadingID` (auto-generates heading IDs).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T22:59:31.973865+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
