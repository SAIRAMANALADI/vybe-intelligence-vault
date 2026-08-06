---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-08-06T09:15:18.366248+05:30'
collected_at: '2026-08-06T09:15:18.366264+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-06T09:15:18.366264+05:30'
last_seen: '2026-08-06T09:15:18.366264+05:30'
last_checked: '2026-08-06T09:15:18.366264+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `resampleFilter: box`, `bgColor: #ffffff`, and format-specific encodings (AVIF: `lossy` at `quality: 60`, JPEG: `quality: 75`, WebP: `lossy` at `quality: 75` with `method: 2`).

- **Format-Specific Configurations**:
  - **AVIF**: Supports `lossy`/`lossless` compression, `encoderSpeed` (1-10), `hint` (`drawing`/`icon`/`photo`/`picture`/`text`), and `quality` (1-100).
  - **WebP**: Configurable via `compression`, `hint`, `method` (0-6), `quality` (1-100), and `useSharpYuv` (bool).

- **Metadata Handling**: `meta.fields` filters EXIF/IPTC/XMP metadata using glob patterns (default excludes technical fields like `GPS`, `Exif`), while `sources` specifies metadata extraction from `exif`, `iptc`, or `xmp` (default: `['exif', 'iptc']`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-06T09:15:18.366248+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
