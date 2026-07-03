---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-03T20:10:13.239825+05:30'
collected_at: '2026-07-03T20:10:13.239840+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-03T20:10:13.239840+05:30'
last_seen: '2026-07-03T20:10:13.239840+05:30'
last_checked: '2026-07-03T20:10:13.239840+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `bgColor: #ffffff`, `resampleFilter: box`, and format-specific defaults for AVIF (`quality: 60`, `encoderSpeed: 10`), JPEG (`quality: 75`), and WebP (`quality: 75`, `method: 2`).

- **Exif Metadata Control**: Configurable via `meta.fields` (glob-based filtering) and `meta.sources` (`exif`, `iptc`, or `xmp`), with default exclusion of technical fields (e.g., `GPS`, `Exif`, `Sharp`) to optimize performance.

- **Format-Specific Tuning**: AVIF supports `lossy`/`lossless` compression with `encoderSpeed` (1-10) and `hint` (e.g., `photo`, `text`); WebP allows `method` (0-6) and `useSharpYuv` for RGB-to-YUV conversion.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T20:10:13.239825+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
