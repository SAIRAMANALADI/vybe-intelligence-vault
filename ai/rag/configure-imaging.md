---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-01T10:33:50.054830+05:30'
collected_at: '2026-07-01T10:33:50.054846+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-01T10:33:50.054846+05:30'
last_seen: '2026-07-01T10:33:50.054846+05:30'
last_checked: '2026-07-01T10:33:50.054846+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `bgColor: #ffffff`, `resampleFilter: box`, and format-specific defaults (AVIF: `quality: 60`, `encoderSpeed: 10`; JPEG: `quality: 75`; WebP: `quality: 75`, `method: 2`).

- **Format-Specific Configurations**:
  - **AVIF**: Supports `lossy`/`lossless` compression, `encoderSpeed` (1-10), `hint` (`drawing`, `icon`, `photo`, etc.), and `quality` (1-100).
  - **WebP**: Configurable via `compression`, `hint`, `method` (0-6), `quality` (1-100), and `useSharpYuv` (bool).

- **Metadata Handling**:
  - **Exif Filtering**: Excludes fields like `GPS`, `Exif`, `Exposure[MPB]`, etc., by default; configurable via `excludeFields`/`includeFields`.
  - **Meta Method**: Controls extracted metadata granularity via `fields` (glob patterns) and `sources` (`exif`, `iptc`, `xmp`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T10:33:50.054830+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
