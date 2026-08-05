---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-06T01:34:30.552805+05:30'
collected_at: '2026-08-06T01:34:30.552817+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-06T01:34:30.552817+05:30'
last_seen: '2026-08-06T01:34:30.552817+05:30'
last_checked: '2026-08-06T01:34:30.552817+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), with support for alternative renderers (AsciiDoc, Org, Pandoc, reStructuredText) requiring external installation and security policy updates.

- **Goldmark Configuration**: Goldmark’s default settings include extensions like `footnote` (enabled), `typographer` (replaces characters with HTML entities), and `strikethrough` (enabled), with optional extras (subscript, superscript, etc.) requiring conflict resolution (e.g., disabling `strikethrough` for subscript).

- **Parser & Renderer Settings**: Key Goldmark settings include `duplicateResourceFiles` (affects multilingual projects), `wrapStandAloneImageWithinParagraph` (controls `p` wrapping for standalone images), and `autoHeadingID` (auto-generates heading IDs), with `autoIDType` offering GitHub-style ID generation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-06T01:34:30.552805+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
