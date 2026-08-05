---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-05T09:11:47.061907+05:30'
collected_at: '2026-08-05T09:11:47.061918+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-05T09:11:47.061918+05:30'
last_seen: '2026-08-05T09:11:47.061918+05:30'
last_checked: '2026-08-05T09:11:47.061918+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering (`.md`, `.mdown`, `.markdown`), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration, requiring external tool installation for non-default options.

- **Goldmark Configuration**: Default Goldmark settings include extensions like `footnote` (enabled), `typographer` (replaces characters with HTML entities), and `linkify` (converts URLs to links), with parser/renderer options like `autoHeadingID` and `hardWraps`.

- **Extras & Passthrough**: The `extras` extension enables subscript/superscript (`H~2~O`, `1^st^`), while `passthrough` allows LaTeX math expressions; conflicts (e.g., `strikethrough` vs. `delete`) require disabling one to use the other.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-05T09:11:47.061907+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
