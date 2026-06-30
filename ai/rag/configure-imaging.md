---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-06-30T22:53:16.653433+05:30'
collected_at: '2026-06-30T22:53:16.653448+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-06-30T22:53:16.653448+05:30'
last_seen: '2026-06-30T22:53:16.653448+05:30'
last_checked: '2026-06-30T22:53:16.653448+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `bgColor: #ffffff`, `resampleFilter: box`, and format-specific defaults (e.g., AVIF `quality: 60`, JPEG `quality: 75`, WebP `quality: 75`).

- **Format-Specific Encoding Controls**:
  - **AVIF**: Supports `lossy`/`lossless` compression, `encoderSpeed` (1-10), `hint` (e.g., `photo`), and `quality` (1-100).
  - **WebP**: Configurable via `compression`, `method` (0-6), `hint`, `quality` (1-100), and `useSharpYuv` (bool).

- **Metadata & Exif Handling**:
  - `meta.fields` allows glob-based filtering of metadata (e.g., excluding `GPS`, `Exif`).
  - `sources` specifies metadata extraction from `exif`, `iptc`, or `xmp` (default: `['exif', 'iptc']`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T22:53:16.653433+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
