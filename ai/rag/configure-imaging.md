---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif-images
published_at: '2026-08-04T14:46:32.515685+05:30'
collected_at: '2026-08-04T14:46:32.515699+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-04T14:46:32.515699+05:30'
last_seen: '2026-08-04T14:46:32.515699+05:30'
last_checked: '2026-08-04T14:46:32.515699+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `bgColor: #ffffff`, `resampleFilter: box`, and format-specific configurations for AVIF, JPEG, and WebP with quality/compression controls (e.g., AVIF `quality: 60`, JPEG `quality: 75`, WebP `quality: 75`, `method: 2`).

- **Format-Specific Configurations**:
  - **AVIF**: Supports `lossy`/`lossless` compression, `encoderSpeed: 1-10`, `hint: photo/drawing/icon/text`, and `quality: 1-100`.
  - **WebP**: Supports `lossy`/`lossless` compression, `hint: photo/drawing/icon/text`, `method: 0-6`, `quality: 1-100`, and `useSharpYuv: false`.
  - **JPEG**: Only `quality: 1-100` (default `75`).

- **Metadata & EXIF Control**:
  - **Meta Method**: Configurable via `fields` (glob patterns) and `sources` (`exif`, `iptc`, `xmp`).
  - **EXIF Exclusion**: Default excludes `GPS`, `Exif`, `Exposure[M|P|B]`, `Contrast`, `Resolution`, `Sharp`, `JPEG`, `Metering`, `Sensing`, `Saturation`, `ColorSpace`, `Flash`, `WhiteBalance` for performance optimization.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T14:46:32.515685+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif-images
