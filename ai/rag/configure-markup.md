---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-10T21:54:21.366006+05:30'
collected_at: '2026-08-10T21:54:21.366017+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-10T21:54:21.366017+05:30'
last_seen: '2026-08-10T21:54:21.366017+05:30'
last_checked: '2026-08-10T21:54:21.366017+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Renderer**: Hugo defaults to Goldmark for Markdown-to-HTML conversion, with configurable alternatives (`asciidocext`, `org`, `pandoc`, `rst`) requiring external renderers and security policy adjustments.

- **Goldmark Configuration**: Supports extensions like `footnote`, `table`, `taskList`, and `typographer` (enabled by default), with optional `extras` (e.g., subscript/superscript) and `passthrough` for LaTeX math, all customizable via `markup.goldmark` in YAML/TOML/JSON.

- **Parser & Renderer Settings**: Key Goldmark settings include `duplicateResourceFiles` (multilingual resource handling), `wrapStandAloneImageWithinParagraph` (controls `<p>` wrapping for images), and `autoHeadingID` (auto-generates heading IDs), with defaults optimized for CommonMark/GFM compliance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T21:54:21.366006+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
