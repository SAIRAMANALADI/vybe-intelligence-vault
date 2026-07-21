---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-07-21T19:59:36.532969+05:30'
collected_at: '2026-07-21T19:59:36.532983+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-07-21T19:59:36.532983+05:30'
last_seen: '2026-07-21T19:59:36.532983+05:30'
last_checked: '2026-07-21T19:59:36.532983+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering (`.md`, `.mdown`, `.markdown`), with alternatives (`asciidocext`, `org`, `pandoc`, `rst`) configurable via `defaultMarkdownHandler` in project settings; Goldmark is recommended for its CommonMark/GFM compliance and performance.

- **Goldmark Configuration**: Goldmark’s markup processor supports extensions (e.g., `footnote`, `strikethrough`, `table`, `typographer`) and extras (e.g., `subscript`, `superscript`) via nested YAML/TOML/JSON settings, with defaults optimized for GFM compatibility.

- **Key Goldmark Settings**: Critical parameters include `duplicateResourceFiles` (for multilingual projects), `parser.wrapStandAloneImageWithinParagraph` (controls `<p>` wrapping for standalone images), and `parser.autoHeadingID` (auto-generates heading IDs); conflicts (e.g., `strikethrough` vs. `extras.subscript`) require explicit resolution.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T19:59:36.532969+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
