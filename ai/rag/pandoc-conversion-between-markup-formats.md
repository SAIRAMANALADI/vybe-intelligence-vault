---
title: 'pandoc: Conversion between markup formats'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://hackage.haskell.org/package/pandoc
published_at: '2026-06-24T21:15:05.866896+05:30'
collected_at: '2026-06-24T21:15:05.866910+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:pandoc-conversion-between-markup-formats
first_seen: '2026-06-24T21:15:05.866910+05:30'
last_seen: '2026-06-24T21:15:05.866910+05:30'
last_checked: '2026-06-24T21:15:05.866910+05:30'
health_score: 100
---

# pandoc: Conversion between markup formats

## Summary

- **Multi-format conversion engine**: Pandoc is a Haskell library enabling bidirectional conversion between 30+ markup formats, including Markdown variants, LaTeX, HTML, EPUB, Docx, and Typst, with support for mathematical content translation between TeX, MathML, and Word equations.

- **Modular architecture**: Implements a plugin-based system with Lua scripting for extensibility, featuring dedicated modules for reading/writing specific formats (e.g., `Text.Pandoc.Readers.LaTeX`, `Text.Pandoc.Writers.Docx`) and built-in support for citations via `Text.Pandoc.Citeproc`.

- **CLI integration**: Distributed as `pandoc` (library) and `pandoc-cli` (standalone executable), with PDF generation requiring external tools (pdflatex/wkhtmltopdf) and comprehensive error handling via `Text.Pandoc.Error`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T21:15:05.866896+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://hackage.haskell.org/package/pandoc
