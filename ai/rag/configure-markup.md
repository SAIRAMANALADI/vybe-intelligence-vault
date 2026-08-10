---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-10T13:46:05.330707+05:30'
collected_at: '2026-08-10T13:46:05.330725+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-10T13:46:05.330725+05:30'
last_seen: '2026-08-10T13:46:05.330725+05:30'
last_checked: '2026-08-10T13:46:05.330725+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markup Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), but supports alternatives like AsciiDoc, Org, Pandoc, or reStructuredText via configuration; requires external renderer installation and security policy updates for non-default handlers.

- **Goldmark Extensions**: Default Goldmark setup includes CJK, definition lists, footnotes, linkify, strikethrough, tables, task lists, and typographer; extras (deleted/inserted text, mark, sub/superscript) and passthrough (e.g., LaTeX math) require explicit enablement.

- **Goldmark Parser/Renderer Settings**: Key parser settings include `autoHeadingID` (auto-generates heading IDs), `wrapStandAloneImageWithinParagraph` (controls standalone image wrapping), and `duplicateResourceFiles` (affects multilingual resource handling); renderer options include `hardWraps`, `unsafe` (raw HTML), and `xhtml` compliance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T13:46:05.330707+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
