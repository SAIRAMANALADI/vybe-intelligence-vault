---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-05T17:09:24.189659+05:30'
collected_at: '2026-08-05T17:09:24.189675+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-05T17:09:24.189675+05:30'
last_seen: '2026-08-05T17:09:24.189675+05:30'
last_checked: '2026-08-05T17:09:24.189675+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markup Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration, requiring external tool installations for non-default options.

- **Goldmark Extensions & Settings**: Goldmark’s default extensions (e.g., `footnote`, `typographer`, `table`) are enabled; configurable via `markup.goldmark` with granular control over parser behavior (e.g., `autoHeadingID`, `wrapStandAloneImageWithinParagraph`) and renderer settings (e.g., `hardWraps`, `unsafe`).

- **Extras & Passthrough Features**: The `extras` extension enables HTML elements (`++insert++`, `==mark==`, `H~2~O`) but requires disabling `strikethrough` for `subscript`/`delete` conflicts; `passthrough` allows LaTeX math rendering for equations.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-05T17:09:24.189659+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
