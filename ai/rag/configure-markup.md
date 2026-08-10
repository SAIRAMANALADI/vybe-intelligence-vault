---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-10T16:20:12.702867+05:30'
collected_at: '2026-08-10T16:20:12.702885+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-10T16:20:12.702885+05:30'
last_seen: '2026-08-10T16:20:12.702885+05:30'
last_checked: '2026-08-10T16:20:12.702885+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markup Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration, requiring external tool installations for non-default options.

- **Goldmark Extensibility**: Goldmark’s default extensions (e.g., `footnote`, `table`, `taskList`, `typographer`) can be customized; Extras extension enables advanced elements (e.g., `++insert++`, `==mark==`, `H~2~O`), while Passthrough supports LaTeX for mathematical expressions.

- **Key Goldmark Settings**: Critical parser/renderer settings include `duplicateResourceFiles` (multilingual resource handling), `wrapStandAloneImageWithinParagraph` (controls `<p>` wrapping for standalone images), and `autoHeadingID`/`autoIDType` (automatic ID generation for headings/terms).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T16:20:12.702867+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
