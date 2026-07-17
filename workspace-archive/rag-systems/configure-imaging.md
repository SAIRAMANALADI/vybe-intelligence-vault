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

- **Image Processing Defaults**: Hugo's `imaging` config supports AVIF (lossy/lossless, `encoderSpeed: 1-10`, `hint: photo/picture/etc.`), JPEG (`quality: 1-100`), and WebP (`compression: lossy/lossless`, `method: 0-6`, `useSharpYuv: bool`) with format-specific settings replacing deprecated global `compression`, `hint`, and `quality` options.

- **Resampling & Metadata Control**: Top-level settings include `anchor: smart|TopLeft|...`, `resampleFilter: box|lanczos|...`, `bgColor: hex`, and `exif`

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://gohugo.io/configuration/imaging/#avif

## Local Vault File

Path: [configure-imaging.md](../../ai/rag/configure-imaging.md)
