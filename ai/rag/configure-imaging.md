---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-06-29T03:51:22.611131+05:30'
collected_at: '2026-06-29T03:51:22.611146+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-06-29T03:51:22.611146+05:30'
last_seen: '2026-06-29T03:51:22.611146+05:30'
last_checked: '2026-06-29T03:51:22.611146+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `resampleFilter: box`, `bgColor: #ffffff`, and format-specific defaults for AVIF (`quality: 60`, `encoderSpeed: 10`), JPEG (`quality: 75`), and WebP (`quality: 75`, `method: 2`).

- **Exif Metadata Control**: Configurable via `excludeFields` (regex-based exclusion of fields like GPS, Exif, and technical metadata) and `sources` (supports `exif`, `iptc`, or `xmp` with `exif` and `iptc` as defaults for performance).

- **Format-Specific Tuning**: AVIF supports `lossy`/`lossless` compression with `encoderSpeed` (1-10) and `hint` (e.g., `photo`, `text`); WebP offers `method` (0-6) and `useSharpYuv` for RGB-to-YUV conversion optimization.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T03:51:22.611131+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
