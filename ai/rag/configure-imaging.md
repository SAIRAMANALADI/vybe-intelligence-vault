---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-06-26T10:16:26.438974+05:30'
collected_at: '2026-06-26T10:16:26.438986+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-06-26T10:16:26.438986+05:30'
last_seen: '2026-06-26T10:16:26.438986+05:30'
last_checked: '2026-06-26T10:16:26.438986+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `resampleFilter: box`, `bgColor: #ffffff`, and format-specific encodings (AVIF: `lossy` @60 quality, JPEG: `75` quality, WebP: `lossy` @75 quality, `method: 2`).

- **Format-Specific Configurations**:
  - **AVIF**: Supports `lossy`/`lossless` compression, `encoderSpeed` (1-10), `hint` (photo/picture/text), and `quality` (1-100).
  - **WebP**: Configurable via `compression`, `hint`, `method` (0-6), `quality` (1-100), and `useSharpYuv` (bool).

- **Metadata Control**:
  - **Exif Filtering**: Excludes fields like `GPS`, `Exif`, and `Sharp` by default; supports glob-based inclusion/exclusion.
  - **Sources**: Configurable via `sources: ['exif', 'iptc', 'xmp']` (XMP excluded by default for performance).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T10:16:26.438974+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
