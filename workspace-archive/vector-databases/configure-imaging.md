---
title: Configure imaging
archive_category: vector-databases
source_category: ai/rag
source_url: https://gohugo.io/configuration/imaging/#avif-images
resource_id: blog:configure-imaging
local_vault_path: ai/rag/configure-imaging.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- rag
- reddit
- web-crawled
selection_reason:
- Valuable developer reference
---

# Configure imaging

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `resampleFilter: box`, `bgColor: #ffffff`, with format-specific defaults (e.g., AVIF `quality: 60`, JPEG `quality: 75`, WebP `quality: 75`, `method: 2`).

- **Format-Specific Configurations**:
  - **AVIF**: Supports `lossy`/`lossless` compression, `encoderSpeed: 1-10`, `hint: photo/drawing/icon/text`, and `quality: 1-100`.
  - **WebP**: Configurable via `compression`, `hint`, `method: 0-6`, `quality: 1-100`, and `useSharp

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://gohugo.io/configuration/imaging/#avif-images

## Local Vault File

Path: [configure-imaging.md](../../ai/rag/configure-imaging.md)
