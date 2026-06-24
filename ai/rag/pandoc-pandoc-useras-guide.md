---
title: "Pandoc - Pandoc Userâ\x80\x99s Guide"
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pandoc.org/MANUAL.html
published_at: '2026-06-24T23:25:34.560604+05:30'
collected_at: '2026-06-24T23:25:34.560618+05:30'
tags:
- agents
- hackernews
- paper
- rag
- reddit
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:pandoc-pandoc-useras-guide
first_seen: '2026-06-24T23:25:34.560618+05:30'
last_seen: '2026-06-24T23:25:34.560618+05:30'
last_checked: '2026-06-24T23:25:34.560618+05:30'
health_score: 100
---

# Pandoc - Pandoc Userâs Guide

## Summary

- **Modular Conversion Engine**: Pandoc is a Haskell-based tool/library with a modular architecture consisting of readers (input formats) and writers (output formats), enabling conversion between formats (e.g., Markdown, HTML, LaTeX, DOCX) via an intermediate AST; custom filters can modify the AST during processing.

- **Format-Specific Limitations**: Conversions are structural (preserving document elements like tables/footnotes) but lossy for formatting details (e.g., margins, complex tables) due to Pandoc’s simplified document model; perfect conversions are only guaranteed from Pandoc’s Markdown to other formats.

- **PDF Generation Workflow**: PDF output requires a LaTeX engine (or alternatives like ConTeXt/HTML) via `--pdf-engine`; intermediate formats (e.g., `.tex`) can be debugged, and LaTeX compilation demands specific packages (e.g., `amsmath`, `unicode-math`, `babel`) for full functionality.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T23:25:34.560604+05:30

## Related Tags

- agents
- hackernews
- paper
- rag
- reddit
- web-crawled
- workflows
- youtube

## Source

Original source: https://pandoc.org/MANUAL.html
