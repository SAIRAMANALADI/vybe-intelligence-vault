---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-06T09:15:23.660499+05:30'
collected_at: '2026-08-06T09:15:23.660513+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-06T09:15:23.660513+05:30'
last_seen: '2026-08-06T09:15:23.660513+05:30'
last_checked: '2026-08-06T09:15:23.660513+05:30'
health_score: 100
---

# Configure markup

## Summary

- Hugo defaults to **Goldmark** for Markdown rendering (`.md`, `.mdown`, `.markdown`), with alternatives (`asciidocext`, `org`, `pandoc`, `rst`) requiring separate installation and security policy updates.

- Goldmark’s default config includes **CommonMark/GFM-compliant extensions** (`table`, `taskList`, `strikethrough`, `linkify`, `footnote`, `typographer`) and supports **Extras** (sub/superscript, insert/delete, mark) and **Passthrough** (LaTeX math) via optional toggles.

- Key Goldmark settings: `duplicateResourceFiles` (controls multilingual resource duplication), `parser.wrapStandAloneImageWithinParagraph` (controls `<p>` wrapping for standalone images), and `parser.autoHeadingID` (auto-generates heading IDs).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-06T09:15:23.660499+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
