---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-06-30T01:52:17.203805+05:30'
collected_at: '2026-06-30T01:52:17.203820+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-06-30T01:52:17.203820+05:30'
last_seen: '2026-06-30T01:52:17.203820+05:30'
last_checked: '2026-06-30T01:52:17.203820+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `resampleFilter: box`, `bgColor: #ffffff`, and format-specific defaults (e.g., AVIF `quality: 60`, JPEG `quality: 75`, WebP `quality: 75`).

- **Format-Specific Configurations**:
  - **AVIF**: Supports `lossy`/`lossless` compression, `encoderSpeed: 1-10`, `hint: photo/drawing/icon/text`, and `quality: 1-100`.
  - **WebP**: Configurable via `compression`, `method: 0-6`, `useSharpYuv: bool`, and `quality: 1-100`.

- **Metadata Handling**:
  - **EXIF Filtering**: Excludes fields like `GPS`, `Exif`, `Contrast`, etc., by default; configurable via `excludeFields`/`includeFields`.
  - **Meta Method**: Controls metadata extraction via `fields` (glob patterns) and `sources` (`exif`, `iptc`, `xmp`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T01:52:17.203805+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
