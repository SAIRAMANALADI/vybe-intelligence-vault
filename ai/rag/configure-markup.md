---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-04T03:56:21.896175+05:30'
collected_at: '2026-08-04T03:56:21.896189+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-04T03:56:21.896189+05:30'
last_seen: '2026-08-04T03:56:21.896189+05:30'
last_checked: '2026-08-04T03:56:21.896189+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering (`.md`, `.mdown`, `.markdown`), with alternatives (`asciidocext`, `org`, `pandoc`, `rst`) requiring external renderers and security policy updates; Goldmark is recommended for speed, CommonMark/GFM compliance, and maintenance.

- **Goldmark Configuration**: Default Goldmark settings include extensions like `footnote` (enabled), `typographer` (replaces chars with HTML entities), and `parser.autoHeadingID` (auto-generates heading IDs); conflicts (e.g., `strikethrough` vs. `extras.subscript`) require manual resolution.

- **Multilingual & Render Hooks**: `duplicateResourceFiles: false` enables embedded link/image render hooks for multilingual single-host projects; `parser.wrapStandAloneImageWithinParagraph` controls standalone image wrapping behavior.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T03:56:21.896175+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
