---
title: Releases · jgm/pandoc · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/jgm/pandoc/releases
published_at: '2026-08-09T19:02:30.877011+05:30'
collected_at: '2026-08-09T19:02:30.877024+05:30'
tags:
- agents
- anthropic
- frontend_ui
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: github:jgm/pandoc
first_seen: '2026-08-09T19:02:30.877024+05:30'
last_seen: '2026-08-09T19:02:30.877024+05:30'
last_checked: '2026-08-09T19:02:30.877024+05:30'
health_score: 100
---

# Releases · jgm/pandoc · GitHub

## Summary

- **New Output Format & API Additions**: Pandoc 3.10.1 introduces `t2t` (Txt2Tags markup) as a new output format via `Text.Pandoc.Writers.Txt2Tags`, exporting `writeTxt2Tags` and re-exported in `Text.Pandoc.Writers`; also modifies `--defaults` to conditionally append `.yaml` only if no file exists with the original name.

- **Typst & LaTeX Writer Enhancements**: Typst reader now supports `auto_identifiers` extension (off by default) and uses `#divider()` for horizontal rules (Typst ≥0.15); LaTeX writer adds `float` class to force standard floating tables instead of `longtable`, critical for two-column layouts.

- **Math & RTF Improvements**: ODT writer switches to `starmath` for math rendering (improving editability), while RTF writer now emits proper RTF lists with `\listtable` support and allows dynamic `fontsize` specification via metadata.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T19:02:30.877011+05:30

## Related Tags

- agents
- anthropic
- frontend_ui
- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://github.com/jgm/pandoc/releases
