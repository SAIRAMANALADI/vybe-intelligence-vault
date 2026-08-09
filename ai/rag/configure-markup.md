---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-09T15:37:23.483024+05:30'
collected_at: '2026-08-09T15:37:23.483038+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-09T15:37:23.483038+05:30'
last_seen: '2026-08-09T15:37:23.483038+05:30'
last_checked: '2026-08-09T15:37:23.483038+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), with alternative handlers (AsciiDoc, Org, Pandoc, reStructuredText) requiring external tool installation and security policy updates.

- **Goldmark Configuration**: Goldmark’s default settings include extensions for CommonMark/GFM compliance (tables, strikethrough, task lists), typographer replacements, and parser/renderer options (e.g., `autoHeadingID`, `hardWraps`).

- **Extras & Footnote Extensions**: The Extras extension enables subscript/superscript (`H~2~O`, `1^st^`) and deleted/inserted text (`~~foo~~`, `++bar++`), while the Footnote extension (enabled by default) supports footnotes with configurable backlink HTML and auto-ID prefixes.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T15:37:23.483024+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
