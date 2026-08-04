---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-05T04:02:24.425551+05:30'
collected_at: '2026-08-05T04:02:24.425562+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-05T04:02:24.425562+05:30'
last_seen: '2026-08-05T04:02:24.425562+05:30'
last_checked: '2026-08-05T04:02:24.425562+05:30'
health_score: 100
---

# Configure markup

## Summary

- Hugo defaults to **Goldmark** for Markdown rendering (`.md`, `.mdown`, `.markdown`), with alternatives like AsciiDoc, Org, Pandoc, or reStructuredText configurable via `defaultMarkdownHandler`.

- Goldmark’s default config enables **CommonMark/GFM-compliant extensions** (`footnote`, `table`, `taskList`, `typographer`, etc.), with optional extras (sub/superscript, deleted/inserted text) requiring explicit enablement and potential conflict resolution.

- Key Goldmark settings include `duplicateResourceFiles` (multilingual resource handling), `parser.autoHeadingID` (auto-generated heading IDs), and `parser.wrapStandAloneImageWithinParagraph` (controls standalone image rendering behavior).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-05T04:02:24.425551+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
