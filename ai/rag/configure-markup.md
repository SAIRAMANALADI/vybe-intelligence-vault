---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-07-20T15:12:04.842332+05:30'
collected_at: '2026-07-20T15:12:04.842346+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-07-20T15:12:04.842346+05:30'
last_seen: '2026-07-20T15:12:04.842346+05:30'
last_checked: '2026-07-20T15:12:04.842346+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Default Markdown Handler**: Hugo defaults to Goldmark for Markdown rendering (`.md`, `.mdown`, `.markdown`), with alternatives (`asciidocext`, `org`, `pandoc`, `rst`) configurable via `defaultMarkdownHandler` in project settings.

- **Goldmark Configuration**: Goldmark’s default settings include extensions like `definitionList`, `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, and `typographer`, with configurable parser (`autoHeadingID`, `wrapStandAloneImageWithinParagraph`) and renderer options.

- **Extras & Passthrough**: Extras extension enables `deleted text`, `inserted text`, `mark text`, `subscript`, and `superscript` via `++`, `~~`, `==`, `~`, `^` syntax; Passthrough extension supports LaTeX math expressions for equations.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-20T15:12:04.842332+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
