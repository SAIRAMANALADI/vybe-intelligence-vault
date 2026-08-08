---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-08T18:53:00.575999+05:30'
collected_at: '2026-08-08T18:53:00.576018+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-08T18:53:00.576018+05:30'
last_seen: '2026-08-08T18:53:00.576018+05:30'
last_checked: '2026-08-08T18:53:00.576018+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markdown Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), but supports alternative renderers (AsciiDoc, Org, Pandoc, reStructuredText) via configuration; requires external tooling and security policy updates for non-default handlers.

- **Goldmark Extensibility**: Goldmark’s default extensions (footnote, linkify, strikethrough, table, taskList, typographer) are enabled by default; additional features (Extras, Passthrough) require explicit activation, with potential conflicts (e.g., disabling `strikethrough` when enabling `subscript`).

- **Goldmark Parser/Renderer Settings**: Key configurations include `parser.autoHeadingID` (auto-generates heading IDs), `parser.wrapStandAloneImageWithinParagraph` (controls standalone image wrapping), and `duplicateResourceFiles` (affects multilingual resource handling); `unsafe: false` prevents raw HTML rendering by default.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T18:53:00.575999+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
