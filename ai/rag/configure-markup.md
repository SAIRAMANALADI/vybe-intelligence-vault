---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-07-21T09:23:10.013516+05:30'
collected_at: '2026-07-21T09:23:10.013524+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-07-21T09:23:10.013524+05:30'
last_seen: '2026-07-21T09:23:10.013524+05:30'
last_checked: '2026-07-21T09:23:10.013524+05:30'
health_score: 100
---

# Configure markup

## Summary

- Hugo defaults to **Goldmark** for Markdown rendering, with `.md`, `.mdown`, or `.markdown` files processed as Markdown unless explicitly overridden via front matter or configuration (`markup.defaultMarkdownHandler`).
- Goldmark supports **extensions** (e.g., `footnote`, `linkify`, `strikethrough`) and **Extras** (e.g., `++inserted++`, `==marked==`, `H~2~O`) with configurable behaviors, including conflicts (e.g., disabling `strikethrough` when enabling `subscript`).
- Key Goldmark settings include `duplicateResourceFiles` (resource duplication in multilingual projects), `parser.wrapStandAloneImageWithinParagraph` (controls standalone image wrapping), and `parser.autoHeadingID` (auto-generates heading IDs).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T09:23:10.013516+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
