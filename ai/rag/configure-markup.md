---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-07-08T09:23:15.831094+05:30'
collected_at: '2026-07-08T09:23:15.831108+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-07-08T09:23:15.831108+05:30'
last_seen: '2026-07-08T09:23:15.831108+05:30'
last_checked: '2026-07-08T09:23:15.831108+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markup Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration, with Goldmark recommended for performance and CommonMark/GFM compliance.

- **Goldmark Extensions**: Default extensions include `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, and `typographer`; customizable via `markup.goldmark.extensions` with optional `extras` (e.g., `subscript`, `superscript`) and `passthrough` for LaTeX math.

- **Key Settings**: Critical Goldmark settings include `duplicateResourceFiles` (multilingual resource handling), `parser.wrapStandAloneImageWithinParagraph` (controls `<p>` wrapping for standalone images), and `parser.autoHeadingID` (auto-generates heading IDs).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-08T09:23:15.831094+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
