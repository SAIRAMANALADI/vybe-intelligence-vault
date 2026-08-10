---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-11T01:01:04.888277+05:30'
collected_at: '2026-08-11T01:01:04.888294+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-11T01:01:04.888294+05:30'
last_seen: '2026-08-11T01:01:04.888294+05:30'
last_checked: '2026-08-11T01:01:04.888294+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown-to-HTML conversion (`.md`, `.mdown`, `.markdown`), with alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) configurable via `defaultMarkdownHandler` in project settings.

- **Goldmark Configuration**: Goldmark’s default extensions include `definitionList`, `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, and `typographer`, with optional extras (`delete`, `insert`, `mark`, `subscript`, `superscript`) and passthrough for LaTeX math.

- **Key Settings**: Critical Goldmark settings include `duplicateResourceFiles` (resource duplication in multilingual projects), `parser.wrapStandAloneImageWithinParagraph` (controls standalone image wrapping), and `parser.autoHeadingID` (auto-generates heading IDs).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-11T01:01:04.888277+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
