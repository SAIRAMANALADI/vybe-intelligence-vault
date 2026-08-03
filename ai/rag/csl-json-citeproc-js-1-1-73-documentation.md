---
title: CSL-JSON — citeproc-js 1.1.73 documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://citeproc-js.readthedocs.io/en/latest/csl-json/markup.html
published_at: '2026-08-03T09:37:08.710990+05:30'
collected_at: '2026-08-03T09:37:08.711002+05:30'
tags:
- dataset
- rag
- reddit
- web-crawled
status: active
resource_id: blog:csl-json-citeproc-js-1-1-73-documentation
first_seen: '2026-08-03T09:37:08.711002+05:30'
last_seen: '2026-08-03T09:37:08.711002+05:30'
last_checked: '2026-08-03T09:37:08.711002+05:30'
health_score: 100
---

# CSL-JSON — citeproc-js 1.1.73 documentation

## Summary

- **CSL-JSON Data Structures**: Citation data is structured in three JSON formats: **Items** (unique bibliographic resources with `id` and `type` fields), **Citations** (clusters of items with `citationItems` and `properties`), and **Cite-items** (pinpoint references with optional `locator`, `label`, `prefix`, and `suffix` fields).

- **Field Type Handling**: Supports structured fields including **ordinary** (e.g., `title`), **name** (arrays of objects with `family`/`given` or `literal` for mononyms), and **date** (array `[Y,M,D]` or raw string formats like `YYYY-MM-DD/YYYY-MM-DD` for ranges).

- **HTML-Like Formatting & Extensions**: Recognizes limited HTML-like tags (`<italic>`, `<bold>`, `<small-caps>`, `<superscript>`) for inline formatting, with "flip-flop" behavior. Supports CSL-M extensions for advanced metadata (e.g., `non-dropping-particle`, `dropping-particle`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T09:37:08.710990+05:30

## Related Tags

- dataset
- rag
- reddit
- web-crawled

## Source

Original source: https://citeproc-js.readthedocs.io/en/latest/csl-json/markup.html
