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

- **Image Processing Configuration**: Hugo's `imaging` settings support format-specific parameters for AVIF (`compression`, `encoderSpeed`, `hint`, `quality`), JPEG (`quality`), and WebP (`compression`, `hint`, `method`, `quality`, `useSharpYuv`), with defaults optimized for photographic content (`anchor: smart`, `resampleFilter: box`, `bgColor: ffffff`).

- **Metadata Handling**: The `meta` method filters EXIF/IPTC metadata using glob patterns (`fields`) to exclude technical tags (e.g., `GPS`,

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://gohugo.io/configuration/imaging/#avif-images

## Local Vault File

Path: [configure-imaging.md](../../ai/rag/configure-imaging.md)
