---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-02T03:48:41.892781+05:30'
collected_at: '2026-08-02T03:48:41.892796+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-02T03:48:41.892796+05:30'
last_seen: '2026-08-02T03:48:41.892796+05:30'
last_checked: '2026-08-02T03:48:41.892796+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markup Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration; requires external tooling for non-Goldmark handlers.

- **Goldmark Extensions**: Default extensions include `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, and `typographer`; extras (`delete`, `insert`, `mark`, `subscript`, `superscript`) and `passthrough` require explicit enablement.

- **Goldmark Parser/Runtime Settings**: Key settings include `duplicateResourceFiles` (controls multilingual resource duplication), `wrapStandAloneImageWithinParagraph` (affects standalone image rendering), `autoHeadingID` (auto-generates heading IDs), and `unsafe` (disables raw HTML rendering by default).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T03:48:41.892781+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
