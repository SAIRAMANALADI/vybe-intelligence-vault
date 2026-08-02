---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-02T14:16:27.698833+05:30'
collected_at: '2026-08-02T14:16:27.698847+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-02T14:16:27.698847+05:30'
last_seen: '2026-08-02T14:16:27.698847+05:30'
last_checked: '2026-08-02T14:16:27.698847+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markup Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), but supports alternatives like AsciiDoc, Org, Pandoc, or reStructuredText via configuration (`markup.defaultMarkdownHandler`); requires external tooling for non-default handlers.

- **Goldmark Extensions & Settings**: Goldmark’s default extensions (e.g., `footnote`, `table`, `typographer`) are enabled; customizable via `markup.goldmark.extensions` (e.g., `strikethrough`, `linkify`), with conflict resolution required for features like subscript vs. strikethrough.

- **Advanced Parser & Renderer Options**: Key Goldmark settings include `parser.autoHeadingID` (auto-generates heading IDs), `parser.wrapStandAloneImageWithinParagraph` (controls image wrapping), and `renderer.unsafe` (allows raw HTML); `duplicateResourceFiles` optimizes multilingual projects by disabling embedded render hooks.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T14:16:27.698833+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
