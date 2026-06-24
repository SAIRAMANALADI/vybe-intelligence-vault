---
title: tikz pgf - How to offset two bezier paths with specific ratio elegantly? -
  TeX - LaTeX Stack Exchange
archive_category: vector-databases
source_category: ai/rag
source_url: https://tex.stackexchange.com/questions/764072/how-to-offset-two-bezier-paths-with-specific-ratio-elegantly
resource_id: blog:tikz-pgf-how-to-offset-two-bezier-paths-with-speci
local_vault_path: ai/rag/tikz-pgf-how-to-offset-two-bezier-paths-with-speci.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- agents
- frontend_ui
- hackernews
- rag
- reddit
- scripts
- threejs
- web-crawled
selection_reason:
- Useful for project building
---

# tikz pgf - How to offset two bezier paths with specific ratio elegantly? - TeX - LaTeX Stack Exchange

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: framework
- Selection reasons:
  - Useful for project building

## Summary

- **Path Splitting & Intersection Handling**: The solution leverages the `spath3` library to split the green and teal Bézier paths at specified positions (`0.65` and `0.5`, respectively) using `split at keep start/end`, then constructs a new path connecting these split segments while maintaining geometric continuity.

- **Orthogonal Offset via `nfold`**: The magenta offset path is generated using the `nfold` library's `offset` key, which applies a perpendicular displacement to the newly construc

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://tex.stackexchange.com/questions/764072/how-to-offset-two-bezier-paths-with-specific-ratio-elegantly

## Local Vault File

Path: [tikz-pgf-how-to-offset-two-bezier-paths-with-speci.md](../../ai/rag/tikz-pgf-how-to-offset-two-bezier-paths-with-speci.md)
