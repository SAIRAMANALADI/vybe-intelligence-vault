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

- **Image Processing Configuration**: Hugo's `imaging` settings control image processing with defaults for `anchor: smart`, `bgColor: #ffffff`, `resampleFilter: box`, and format-specific optimizations for AVIF, JPEG, and WebP.

- **Format-Specific Encoding**: AVIF (`lossy` compression, `encoderSpeed: 10`, `quality: 60`), JPEG (`quality: 75`), and WebP (`lossy` compression, `method: 2`, `quality: 75`) support customizable quality, compression, and encoding hints.

- **Metadata & Exif Handling**:

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://gohugo.io/configuration/imaging/#avif

## Local Vault File

Path: [configure-imaging.md](../../ai/rag/configure-imaging.md)
