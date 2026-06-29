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

- **Image Processing Configuration**: Hugo's `imaging` settings control image processing (e.g., resizing, format conversion) with defaults like `anchor: smart`, `resampleFilter: box`, and format-specific parameters (AVIF/WebP/JPEG).

- **Format-Specific Encoding**: AVIF (`lossy` compression, `encoderSpeed: 10`, `quality: 60`), WebP (`method: 2`, `quality: 75`), and JPEG (`quality: 75`) support configurable trade-offs between file size and quality.

- **Metadata Handling**: `meta.fields` filters

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://gohugo.io/configuration/imaging/#avif

## Local Vault File

Path: [configure-imaging.md](../../ai/rag/configure-imaging.md)
