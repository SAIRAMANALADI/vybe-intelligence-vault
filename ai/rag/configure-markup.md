---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-07-20T22:23:07.604393+05:30'
collected_at: '2026-07-20T22:23:07.604403+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-07-20T22:23:07.604403+05:30'
last_seen: '2026-07-20T22:23:07.604403+05:30'
last_checked: '2026-07-20T22:23:07.604403+05:30'
health_score: 100
---

# Configure markup

## Summary

- Hugo defaults to **Goldmark** for Markdown rendering, but supports alternative handlers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration, requiring external tool installations for non-default options.

- Goldmark’s default extensions include **CommonMark/GFM compliance** (`table`, `taskList`, `strikethrough`, `linkify`), with optional features like **Extras** (sub/superscript, insert/delete, mark) and **Passthrough** (LaTeX math) configurable via `markup.goldmark.extensions`.

- Key Goldmark settings include `duplicateResourceFiles` (for multilingual projects), `parser.wrapStandAloneImageWithinParagraph` (controls `<p>` wrapping for standalone images), and `parser.autoHeadingID` (auto-generates heading IDs).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-20T22:23:07.604393+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
