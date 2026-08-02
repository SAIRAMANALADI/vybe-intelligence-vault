---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-02T09:29:23.779327+05:30'
collected_at: '2026-08-02T09:29:23.779334+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-02T09:29:23.779334+05:30'
last_seen: '2026-08-02T09:29:23.779334+05:30'
last_checked: '2026-08-02T09:29:23.779334+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markup Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), but supports alternative renderers (AsciiDoc, Org, Pandoc, reStructuredText) via configuration; requires external tool installation for non-Goldmark handlers.

- **Goldmark Extensions & Settings**: Goldmark’s default extensions (footnote, strikethrough, table, taskList, typographer, etc.) can be customized; conflicts (e.g., subscript vs. strikethrough) must be resolved via explicit toggling (`extras.subscript.enable: true` disables `strikethrough`).

- **Parser & Renderer Behavior**: Key Goldmark parser settings include `autoHeadingID` (auto-generates heading IDs), `wrapStandAloneImageWithinParagraph` (controls standalone image wrapping), and `duplicateResourceFiles` (affects multilingual resource handling); renderer options include `unsafe` (disables raw HTML) and `hardWraps` (controls line breaks).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T09:29:23.779327+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
