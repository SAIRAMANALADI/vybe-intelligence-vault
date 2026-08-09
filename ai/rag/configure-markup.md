---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-10T03:34:20.113390+05:30'
collected_at: '2026-08-10T03:34:20.113401+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-10T03:34:20.113401+05:30'
last_seen: '2026-08-10T03:34:20.113401+05:30'
last_checked: '2026-08-10T03:34:20.113401+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markdown Rendering Configuration**: Hugo defaults to Goldmark for Markdown-to-HTML conversion (CommonMark/GFM-compliant), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration; requires external tooling and security policy updates for non-default handlers.

- **Goldmark Extensions**: Default extensions include `definitionList`, `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, and `typographer`; optional `extras` (subscript/superscript/delete/insert/mark) and `passthrough` (LaTeX math) require explicit enablement; conflicts (e.g., `subscript` vs. `strikethrough`) must be resolved manually.

- **Goldmark Parser/Renderer Settings**: Key parser settings include `autoHeadingID` (auto-generates heading IDs), `wrapStandAloneImageWithinParagraph` (controls `<p>` wrapping for standalone images), and `autoDefinitionTermID` (adds IDs to description list terms); renderer settings like `hardWraps`, `unsafe`, and `xhtml` modify output behavior.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T03:34:20.113390+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
