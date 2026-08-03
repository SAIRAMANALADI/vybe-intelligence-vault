---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-03T09:32:28.886735+05:30'
collected_at: '2026-08-03T09:32:28.886750+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-03T09:32:28.886750+05:30'
last_seen: '2026-08-03T09:32:28.886750+05:30'
last_checked: '2026-08-03T09:32:28.886750+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markup Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration; requires external tooling for non-Goldmark handlers.

- **Goldmark Extensions & Parser**: Goldmark’s default extensions (e.g., `footnote`, `table`, `typographer`) are enabled; parser settings like `autoHeadingID` and `wrapStandAloneImageWithinParagraph` control structural rendering behavior.

- **Extras & Typographer Customization**: Extras extension enables HTML elements (`++insert++`, `==mark==`, `H~2~O`); Typographer replaces ASCII sequences (e.g., `---` → `—`); conflicts (e.g., `strikethrough` vs. `subscript`) require explicit disabling.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T09:32:28.886735+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
