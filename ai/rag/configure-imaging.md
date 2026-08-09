---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-08-10T00:43:40.577798+05:30'
collected_at: '2026-08-10T00:43:40.577809+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-10T00:43:40.577809+05:30'
last_seen: '2026-08-10T00:43:40.577809+05:30'
last_checked: '2026-08-10T00:43:40.577809+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `bgColor: #ffffff`, `resampleFilter: box`, with format-specific configurations for AVIF (`quality: 60`, `encoderSpeed: 10`), JPEG (`quality: 75`), and WebP (`quality: 75`, `method: 2`).

- **Format-Specific Configurations**:
  - **AVIF**: Supports `lossy`/`lossless` compression, `encoderSpeed` (1-10), `hint` (`photo`/`drawing`/etc.), and `quality` (1-100).
  - **WebP**: Configurable via `compression` (`lossy`/`lossless`), `method` (0-6), `quality` (1-100), `hint`, and `useSharpYuv` (bool).

- **Metadata & Exif Handling**:
  - `meta.fields` allows glob-based filtering of metadata (default excludes `GPS`, `Exif`, `Exposure*` fields).
  - `sources` specifies metadata extraction from `exif`, `iptc`, or `xmp` (default: `['exif', 'iptc']`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T00:43:40.577798+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
