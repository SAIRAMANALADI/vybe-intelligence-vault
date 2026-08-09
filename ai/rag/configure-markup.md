---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-09T12:57:15.596696+05:30'
collected_at: '2026-08-09T12:57:15.596712+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-09T12:57:15.596712+05:30'
last_seen: '2026-08-09T12:57:15.596712+05:30'
last_checked: '2026-08-09T12:57:15.596712+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering (`.md`, `.mdown`, `.markdown`), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration; requires external tooling for non-Goldmark handlers.

- **Goldmark Configuration**: Core Goldmark settings include `duplicateResourceFiles`, `extensions` (e.g., `footnote`, `typographer`, `linkify`), `parser` (e.g., `autoHeadingID`, `wrapStandAloneImageWithinParagraph`), and `renderer` (e.g., `unsafe`, `xhtml`); extensions like `extras` (subscript/superscript) may conflict with default extensions (e.g., `strikethrough`).

- **Multilingual & Render Hooks**: `duplicateResourceFiles` impacts multilingual single-host projects by enabling embedded link/image render hooks; `parser.wrapStandAloneImageWithinParagraph` controls standalone image wrapping behavior for `figure` elements.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T12:57:15.596696+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
