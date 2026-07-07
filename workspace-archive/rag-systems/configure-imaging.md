---
title: Configure imaging
archive_category: rag-systems
source_category: ai/rag
source_url: https://gohugo.io/configuration/imaging/#avif
resource_id: blog:configure-imaging
local_vault_path: ai/rag/configure-imaging.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Configure imaging

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Image Processing Configuration**: Hugo's imaging settings support AVIF, JPEG, and WebP formats with configurable `quality`, `compression`, and `hint` (e.g., `photo`, `drawing`) for optimal encoding; deprecated global `compression`, `hint`, and `quality` settings now require format-specific overrides.

- **Resampling & Focal Point Control**: Default `resampleFilter` is `box`, with alternatives like `lanczos` or `catmullRom` for quality/speed trade-offs; `anchor` supports `smart` (via `muesli/

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://gohugo.io/configuration/imaging/#avif

## Local Vault File

Path: [configure-imaging.md](../../ai/rag/configure-imaging.md)
