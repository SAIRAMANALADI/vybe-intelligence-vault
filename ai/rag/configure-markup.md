---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-07-10T04:22:09.189496+05:30'
collected_at: '2026-07-10T04:22:09.189510+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-07-10T04:22:09.189510+05:30'
last_seen: '2026-07-10T04:22:09.189510+05:30'
last_checked: '2026-07-10T04:22:09.189510+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markup Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), but supports alternative renderers (AsciiDoc, Org, Pandoc, reStructuredText) via configuration; requires external tooling and security policy updates for non-Goldmark handlers.

- **Goldmark Extensions & Parser**: Goldmark’s default extensions (footnote, linkify, strikethrough, table, taskList, typographer) are enabled; parser supports auto-heading IDs (`autoHeadingID: true`), attribute parsing (`attribute.block: false`), and standalone image wrapping control (`wrapStandAloneImageWithinParagraph: true`).

- **Extras & Passthrough Features**: Extras extension enables subscript/superscript (`==`, `H~2~O`), deleted/inserted/marked text (`++`, `~~`, `==`), while Passthrough allows LaTeX math rendering; conflicts (e.g., subscript vs. strikethrough) require explicit disabling of conflicting extensions.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-10T04:22:09.189496+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
