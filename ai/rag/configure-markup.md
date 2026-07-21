---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-07-21T14:27:23.647363+05:30'
collected_at: '2026-07-21T14:27:23.647380+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-07-21T14:27:23.647380+05:30'
last_seen: '2026-07-21T14:27:23.647380+05:30'
last_checked: '2026-07-21T14:27:23.647380+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markup Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), but supports alternative renderers like AsciiDoc, Org, Pandoc, or reStructuredText via configuration (`markup.defaultMarkdownHandler` in YAML/TOML/JSON).

- **Goldmark Extensions & Settings**: Goldmark’s default extensions (e.g., `footnote`, `strikethrough`, `table`) are enabled by default, with configurable typography, CJK handling, and parser behavior (e.g., `autoHeadingID`, `wrapStandAloneImageWithinParagraph`).

- **Extras & Passthrough**: The `extras` extension enables deleted/inserted text, sub/superscript, and mark formatting; the `passthrough` extension allows LaTeX math equations. Conflicts (e.g., `subscript` vs. `strikethrough`) require explicit disambiguation in config.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T14:27:23.647363+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
