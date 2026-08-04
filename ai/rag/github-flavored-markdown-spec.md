---
title: GitHub Flavored Markdown Spec
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.github.com/gfm/
published_at: '2026-08-04T14:48:22.345281+05:30'
collected_at: '2026-08-04T14:48:22.345317+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:github-flavored-markdown-spec
first_seen: '2026-08-04T14:48:22.345317+05:30'
last_seen: '2026-08-04T14:48:22.345317+05:30'
last_checked: '2026-08-04T14:48:22.345317+05:30'
health_score: 100
---

# GitHub Flavored Markdown Spec

## Summary

- **GFM Extensions**: GitHub Flavored Markdown (GFM) is a strict superset of CommonMark, adding extensions like tables, task lists, strikethrough, and autolinks, while enforcing additional post-processing for security and consistency.

- **Parsing Phases**: GFM parsing occurs in two phases—Phase 1 structures blocks (e.g., headings, lists, code blocks) via a defined precedence hierarchy, while Phase 2 resolves inline elements (e.g., links, emphasis, code spans) with strict precedence rules.

- **Character Handling**: GFM treats all Unicode code points as valid characters, defines line endings as `U+000A`, `U+000D`, or `U+000D U+000A`, and classifies whitespace per Unicode `Zs` category or specific control characters.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T14:48:22.345281+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://github.github.com/gfm/
