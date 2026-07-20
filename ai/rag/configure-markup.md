---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-07-20T03:49:11.724622+05:30'
collected_at: '2026-07-20T03:49:11.724640+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-07-20T03:49:11.724640+05:30'
last_seen: '2026-07-20T03:49:11.724640+05:30'
last_checked: '2026-07-20T03:49:11.724640+05:30'
health_score: 100
---

# Configure markup

## Summary

- Hugo defaults to **Goldmark** for Markdown rendering (`.md`, `.mdown`, `.markdown` files) but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration, requiring external tool installations for non-default options.

- Goldmark’s default configuration includes extensions like **footnote**, **table**, **taskList**, **typographer**, and **linkify**, with optional extras (subscript/superscript, deleted/inserted text) and passthrough for LaTeX math, configurable via `markup.goldmark` in YAML/TOML/JSON.

- Key Goldmark settings include `duplicateResourceFiles` (for multilingual projects), `parser.wrapStandAloneImageWithinParagraph` (controls standalone image wrapping), and `parser.autoHeadingID` (auto-generates heading IDs), with conflicts requiring explicit overrides (e.g., disabling `strikethrough` to enable `subscript`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-20T03:49:11.724622+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
