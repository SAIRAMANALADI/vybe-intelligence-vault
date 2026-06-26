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

- **Image Processing Defaults**: Default settings include `anchor: smart`, `resampleFilter: box`, `bgColor: #ffffff`, and format-specific encodings (AVIF: `lossy` @60 quality, JPEG: `75` quality, WebP: `lossy` @75 quality, `method: 2`).

- **Format-Specific Configurations**:
  - **AVIF**: Supports `lossy`/`lossless` compression, `encoderSpeed` (1-10), `hint` (photo/picture/text), and `quality` (1-100).
  - **WebP**: Configurable via `compression`, `hint`, `method` (0-6), `quality` (1-100), and `

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://gohugo.io/configuration/imaging/#avif

## Local Vault File

Path: [configure-imaging.md](../../ai/rag/configure-imaging.md)
