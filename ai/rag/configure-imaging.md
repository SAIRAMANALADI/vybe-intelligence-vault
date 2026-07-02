---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-02T15:09:16.100841+05:30'
collected_at: '2026-07-02T15:09:16.100854+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-02T15:09:16.100854+05:30'
last_seen: '2026-07-02T15:09:16.100854+05:30'
last_checked: '2026-07-02T15:09:16.100854+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configurations**:
  - Default settings include `anchor: smart`, `bgColor: #ffffff`, `resampleFilter: box`, with format-specific optimizations for AVIF (`quality: 60`, `encoderSpeed: 10`), JPEG (`quality: 75`), and WebP (`quality: 75`, `method: 2`).

- **Exif Metadata Control**:
  - Excludes fields like `GPS`, `Exif`, `Contrast`, `Resolution`, etc., by default via `excludeFields`; supports customization via `includeFields` and `sources` (`exif`, `iptc`, `xmp`).

- **Deprecated & Format-Specific Parameters**:
  - Top-level `compression`, `hint`, and `quality` settings are deprecated (v0.163.0); replaced by format-specific equivalents (e.g., `imaging.avif.compression`, `imaging.webp.method`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T15:09:16.100841+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
