---
title: Configure markup
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
published_at: '2026-08-07T08:57:04.005530+05:30'
collected_at: '2026-08-07T08:57:04.005542+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-markup
first_seen: '2026-08-07T08:57:04.005542+05:30'
last_seen: '2026-08-07T08:57:04.005542+05:30'
last_checked: '2026-08-07T08:57:04.005542+05:30'
health_score: 100
---

# Configure markup

## Summary

- **Markdown Rendering Configuration**: Hugo defaults to Goldmark for Markdown processing (`.md`, `.mdown`, `.markdown`), with alternative renderers (AsciiDoc, Org, Pandoc, reStructuredText) configurable via `defaultMarkdownHandler`; requires additional tooling and security policy updates for non-Goldmark handlers.

- **Goldmark Extensions & Settings**: Default Goldmark configuration includes CJK, definition lists, footnotes, linkify, strikethrough, tables, task lists, and typographer; extras (deleted/inserted text, mark, sub/superscript) and passthrough (LaTeX math) are optional; conflicts (e.g., subscript vs. strikethrough) must be resolved explicitly.

- **Parser & Renderer Options**: Key parser settings include `wrapStandAloneImageWithinParagraph` (controls `<p>` wrapping for images), `autoDefinitionTermID` (adds `id` to `<dt>`), and `autoHeadingID` (adds `id` to headings); renderer options include `hardWraps`, `unsafe` (raw HTML), and `xhtml` (XHTML output).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-07T08:57:04.005530+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/markup/#syntaxhighlight
