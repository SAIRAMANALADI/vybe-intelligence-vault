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

- **Image Processing Configuration**: Hugo's `imaging` settings support format-specific parameters for AVIF (lossy/lossless, encoder speed, quality, hint), JPEG (quality), and WebP (compression, method, quality, `useSharpYuv`), with defaults optimized for photographic content (`hint: photo`).

- **Metadata Handling**: The `meta` method allows granular control over EXIF/IPTC/XMP metadata extraction via `fields` (glob patterns) and `sources` (e.g., `['exif', 'iptc']`), excluding technical fields b

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://gohugo.io/configuration/imaging/#avif-images

## Local Vault File

Path: [configure-imaging.md](../../ai/rag/configure-imaging.md)
