---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-09T18:57:19.422467+05:30'
collected_at: '2026-08-09T18:57:19.422481+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-09T18:57:19.422481+05:30'
last_seen: '2026-08-09T18:57:19.422481+05:30'
last_checked: '2026-08-09T18:57:19.422481+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown-to-HTML rendering, but supports alternative handlers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration; requires external tooling for non-default handlers.

- **Goldmark Configuration**: Default Goldmark settings include extensions like `footnote`, `linkify`, `strikethrough`, and `table`; customizable via `markup.goldmark` in YAML/TOML/JSON, with options for CJK, Extras (e.g., subscript/superscript), Passthrough (LaTeX), and Typographer.

- **Key Parser/Runtime Settings**: `duplicateResourceFiles` controls multilingual resource duplication; `wrapStandAloneImageWithinParagraph` toggles `<p>` wrapping for standalone images; `autoHeadingID` and `autoIDType` manage heading ID generation for fragment links.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T18:57:19.422467+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
