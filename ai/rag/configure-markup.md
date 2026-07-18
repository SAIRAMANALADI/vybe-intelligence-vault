---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-07-17T14:08:15.774256+05:30'
collected_at: '2026-07-17T14:08:15.774266+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-07-17T14:08:15.774266+05:30'
last_seen: '2026-07-17T14:08:15.774266+05:30'
last_checked: '2026-07-17T14:08:15.774266+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markup Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration, requiring external tool installations for non-default handlers.

- **Goldmark Extensions & Settings**: Goldmark’s default extensions (e.g., `footnote`, `table`, `typographer`) can be customized; critical settings include `duplicateResourceFiles` (for multilingual projects), `parser.autoHeadingID` (auto-generated heading IDs), and `parser.wrapStandAloneImageWithinParagraph` (controls `p` wrapping for standalone images).

- **Extras & Typographer Features**: The `extras` extension enables HTML elements (`<del>`, `<ins>`, `<mark>`, sub/superscript) via Markdown syntax (e.g., `++bar++`, `==baz==`, `H~2~O`), while the `typographer` extension replaces ASCII sequences with typographic HTML entities (e.g., `--` → `–`, `'` → `’`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-17T14:08:15.774256+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
