---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-06-28T03:52:25.347768+05:30'
collected_at: '2026-06-28T03:52:25.347783+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-06-28T03:52:25.347783+05:30'
last_seen: '2026-06-28T03:52:25.347783+05:30'
last_checked: '2026-06-28T03:52:25.347783+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `resampleFilter: box`, `bgColor: #ffffff`, and format-specific defaults for AVIF (`quality: 60`, `encoderSpeed: 10`), JPEG (`quality: 75`), and WebP (`quality: 75`, `method: 2`).

- **Format-Specific Configurations**:
  - **AVIF**: Supports `lossy`/`lossless` compression, `encoderSpeed` (1-10), `hint` (e.g., `photo`, `text`), and `quality` (1-100).
  - **WebP**: Supports `lossy`/`lossless` compression, `method` (0-6), `hint`, `quality` (1-100), and `useSharpYuv` (bool).
  - **JPEG**: Only `quality` (1-100) configurable.

- **Metadata Control**: `meta.fields` (glob-based filtering) and `meta.sources` (`exif`, `iptc`, `xmp`) allow granular EXIF/IPTC/XMP metadata extraction, with defaults excluding technical fields (e.g., `GPS`, `Exif`) for performance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T03:52:25.347768+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
