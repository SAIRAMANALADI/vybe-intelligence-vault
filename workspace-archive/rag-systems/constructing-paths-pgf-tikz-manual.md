---
title: Constructing Paths - PGF/TikZ Manual
archive_category: rag-systems
source_category: ai/rag
source_url: https://tikz.dev/base-paths#pgf.back/pgfpathcurvebetweentime
resource_id: blog:constructing-paths-pgf-tikz-manual
local_vault_path: ai/rag/constructing-paths-pgf-tikz-manual.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- threejs
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Constructing Paths - PGF/TikZ Manual

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Path Construction Primitives**: PGF's core path operations include `\pgfpathmoveto` (starts/segments path), `\pgfpathlineto` (adds straight segment), `\pgfpathcurveto` (adds cubic Bézier curve), and `\pgfpathclose` (closes current path segment with straight line to start point). Paths are global entities persisting across TeX groups until flushed via `\pgfusepath`.

- **Elliptical/Circular Paths**: `\pgfpatharc` appends an arc/circular segment to the path, parameterized by start/end angles a

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://tikz.dev/base-paths#pgf.back/pgfpathcurvebetweentime

## Local Vault File

Path: [constructing-paths-pgf-tikz-manual.md](../../ai/rag/constructing-paths-pgf-tikz-manual.md)
