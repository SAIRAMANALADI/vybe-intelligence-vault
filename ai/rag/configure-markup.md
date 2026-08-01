---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-01T09:26:19.071391+05:30'
collected_at: '2026-08-01T09:26:19.071405+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-01T09:26:19.071405+05:30'
last_seen: '2026-08-01T09:26:19.071405+05:30'
last_checked: '2026-08-01T09:26:19.071405+05:30'
health_score: 100
---

# Configure markup

## Summary

- Hugo defaults to **Goldmark** for Markdown rendering (CommonMark/GFM-compliant), with alternative handlers (`asciidocext`, `org`, `pandoc`, `rst`) requiring external tool installation and security policy updates.

- Goldmark’s default config includes **enabled extensions** (`footnote`, `table`, `taskList`, `strikethrough`, `linkify`, `typographer`) and **disabled features** (`cjk`, `extras`, `passthrough`), with granular control via `markup.goldmark.*` settings.

- Key Goldmark settings include `duplicateResourceFiles` (multilingual resource handling), `parser.wrapStandAloneImageWithinParagraph` (standalone image rendering), and `parser.autoHeadingID` (auto-generated heading IDs).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-01T09:26:19.071391+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
