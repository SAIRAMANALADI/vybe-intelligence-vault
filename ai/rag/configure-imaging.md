---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-03T15:13:15.421553+05:30'
collected_at: '2026-07-03T15:13:15.421565+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-03T15:13:15.421565+05:30'
last_seen: '2026-07-03T15:13:15.421565+05:30'
last_checked: '2026-07-03T15:13:15.421565+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `resampleFilter: box`, `bgColor: #ffffff`, and format-specific defaults (e.g., AVIF `quality: 60`, JPEG `quality: 75`, WebP `quality: 75` and `method: 2`).

- **Format-Specific Configurations**:
  - **AVIF**: Supports `lossy`/`lossless` compression, `encoderSpeed` (1–10), `hint` (e.g., `photo`), and `quality` (1–100).
  - **WebP**: Configurable via `compression`, `hint`, `method` (0–6), `quality` (1–100), and `useSharpYuv` (bool).
  - **JPEG**: Only `quality` (1–100) is configurable.

- **Metadata Handling**:
  - **Meta Method**: Controls extracted fields via `fields` (glob slice) and `sources` (`exif`, `iptc`, `xmp`).
  - **EXIF Filtering**: Excludes technical fields (e.g., `GPS`, `Exif`) by default for performance optimization.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T15:13:15.421553+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
