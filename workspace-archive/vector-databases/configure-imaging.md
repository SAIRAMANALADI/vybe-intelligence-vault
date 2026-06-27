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

- **Image Processing Settings**: Default anchor set to `smart` (using `muesli/smartcrop` for focal point detection), background color `#ffffff`, and `box` resampling filter for resizing operations.

- **Format-Specific Configurations**:
  - **AVIF**: Lossy compression with `encoderSpeed: 10`, `hint: photo`, and `quality: 60`.
  - **WebP**: Lossy compression with `method: 2`, `quality: 75`, and `useSharpYuv: false`.
  - **JPEG**: Default `quality: 75`.

- **Metadata Handling**:
  - **Exif Filteri

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://gohugo.io/configuration/imaging/#avif

## Local Vault File

Path: [configure-imaging.md](../../ai/rag/configure-imaging.md)
