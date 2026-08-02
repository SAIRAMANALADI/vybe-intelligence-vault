---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-03T01:16:26.751921+05:30'
collected_at: '2026-08-03T01:16:26.751936+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-03T01:16:26.751936+05:30'
last_seen: '2026-08-03T01:16:26.751936+05:30'
last_checked: '2026-08-03T01:16:26.751936+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markup Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), but supports alternatives like AsciiDoc, Pandoc, or reStructuredText via configuration (`markup.defaultMarkdownHandler`). Requires external renderer installation and security policy updates for non-default handlers.

- **Goldmark Extensions**: Default Goldmark extensions include `definitionList`, `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, and `typographer`. Extras (e.g., `subscript`, `superscript`) and `passthrough` (for LaTeX) are disabled by default but configurable via `markup.goldmark.extensions`.

- **Goldmark Parser/Renderer Settings**: Key parser settings include `autoHeadingID` (auto-generates heading IDs), `wrapStandAloneImageWithinParagraph` (controls standalone image wrapping), and `duplicateResourceFiles` (affects multilingual resource handling). Renderer settings like `unsafe` (disables raw HTML) and `hardWraps` (preserves line breaks) are configurable.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T01:16:26.751921+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
