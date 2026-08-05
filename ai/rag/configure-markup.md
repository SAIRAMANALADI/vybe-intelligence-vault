---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-06T04:01:52.138829+05:30'
collected_at: '2026-08-06T04:01:52.138848+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-06T04:01:52.138848+05:30'
last_seen: '2026-08-06T04:01:52.138848+05:30'
last_checked: '2026-08-06T04:01:52.138848+05:30'
health_score: 100
---

# Configure markup

## Summary

- Hugo defaults to **Goldmark** for Markdown rendering (CommonMark/GFM-compliant), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration with required external dependencies.

- Goldmark’s default extensions include `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, and `typographer`, with optional modules like `extras` (sub/superscript, insert/delete, mark) and `passthrough` (LaTeX math) requiring explicit enablement.

- Key Goldmark parser/renderer settings include `autoHeadingID` (auto-generates heading IDs), `wrapStandAloneImageWithinParagraph` (controls `<p>` wrapping for images), and `duplicateResourceFiles` (affects multilingual resource handling).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-06T04:01:52.138829+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
