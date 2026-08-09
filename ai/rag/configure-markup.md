---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-09T08:10:22.511747+05:30'
collected_at: '2026-08-09T08:10:22.511764+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-09T08:10:22.511764+05:30'
last_seen: '2026-08-09T08:10:22.511764+05:30'
last_checked: '2026-08-09T08:10:22.511764+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to **Goldmark** for Markdown rendering (CommonMark/GFM-compliant), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration, requiring external tool installation for non-default handlers.

- **Goldmark Configuration**: Goldmark’s default settings include enabled extensions (`footnote`, `table`, `taskList`, `typographer`, `strikethrough`, `linkify`), with optional extras (`subscript`, `superscript`, `delete`, `insert`, `mark`) and passthrough for LaTeX math, configurable via `markup.goldmark` in YAML/TOML/JSON.

- **Key Parser/Runtime Settings**: Critical Goldmark settings include `duplicateResourceFiles` (for multilingual projects), `wrapStandAloneImageWithinParagraph` (controls `<p>` wrapping for standalone images), and `autoHeadingID`/`autoIDType` (auto-generates heading IDs), with `unsafe` and `xhtml` flags for rendering behavior.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T08:10:22.511747+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
