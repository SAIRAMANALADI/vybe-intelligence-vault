---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-07-07T15:40:22.522176+05:30'
collected_at: '2026-07-07T15:40:22.522185+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-07-07T15:40:22.522185+05:30'
last_seen: '2026-07-07T15:40:22.522185+05:30'
last_checked: '2026-07-07T15:40:22.522185+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markup Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), but supports alternatives like AsciiDoc, Org, Pandoc, or reStructuredText via configuration; requires external tooling for non-default handlers.

- **Goldmark Extensions**: Default extensions include `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, and `typographer`; extras (e.g., `subscript`, `superscript`) require explicit enablement and may conflict with default extensions (e.g., `strikethrough`).

- **Key Goldmark Settings**: Critical parser/renderer flags include `duplicateResourceFiles` (resource duplication in multilingual projects), `wrapStandAloneImageWithinParagraph` (controls `<p>` wrapping for standalone images), and `autoHeadingID` (auto-generates heading IDs).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-07T15:40:22.522176+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
