---
title: Configure imaging
archive_category: vector-databases
source_category: ai/rag
source_url: https://gohugo.io/configuration/imaging/#avif
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

- **Image Processing Configuration**: Hugo's imaging settings support `anchor` (e.g., `smart`, `center`), `bgColor` (hex RGB), and `resampleFilter` (e.g., `box`, `lanczos`, `catmullRom`) for resizing/cropping operations.

- **Format-Specific Encoding**: AVIF (`lossy`/`lossless` compression, `encoderSpeed: 1-10`, `quality: 1-100`), JPEG (`quality: 1-100`), and WebP (`compression`, `method: 0-6`, `useSharpYuv`) settings optimize output fidelity/size trade-offs.

- **Metadata Handling**: `exif` fie

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://gohugo.io/configuration/imaging/#avif

## Local Vault File

Path: [configure-imaging.md](../../ai/rag/configure-imaging.md)
