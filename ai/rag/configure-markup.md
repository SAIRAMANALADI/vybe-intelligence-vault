---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-09T21:29:46.388061+05:30'
collected_at: '2026-08-09T21:29:46.388077+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-09T21:29:46.388077+05:30'
last_seen: '2026-08-09T21:29:46.388077+05:30'
last_checked: '2026-08-09T21:29:46.388077+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to [Goldmark](https://github.com/yuin/goldmark/) for Markdown-to-HTML rendering, with `.md`, `.mdown`, or `.markdown` files processed unless overridden via `markup` field; alternatives (`asciidocext`, `org`, `pandoc`, `rst`) require external renderers and security policy updates.

- **Goldmark Configuration**: Default Goldmark settings include enabled extensions (`definitionList`, `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, `typographer`) and configurable parser/renderer options (e.g., `autoHeadingID`, `hardWraps`, `unsafe`); `Extras` and `Passthrough` extensions require explicit enablement.

- **Key Settings**: `duplicateResourceFiles` (default `false`) controls multilingual resource duplication; `parser.wrapStandAloneImageWithinParagraph` (default `true`) wraps standalone images in `<p>` tags; `parser.autoIDType` (default `github`) defines heading ID generation strategy.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T21:29:46.388061+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
