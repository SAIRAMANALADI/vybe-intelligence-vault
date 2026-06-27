---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-06-27T16:40:32.344113+05:30'
collected_at: '2026-06-27T16:40:32.344127+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-06-27T16:40:32.344127+05:30'
last_seen: '2026-06-27T16:40:32.344127+05:30'
last_checked: '2026-06-27T16:40:32.344127+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's imaging settings support `anchor` (e.g., `smart`, `center`), `bgColor` (hex RGB), and `resampleFilter` (e.g., `box`, `lanczos`, `catmullRom`) for resizing/cropping operations.

- **Format-Specific Encoding**: AVIF (`lossy`/`lossless` compression, `encoderSpeed: 1-10`, `quality: 1-100`), JPEG (`quality: 1-100`), and WebP (`compression`, `method: 0-6`, `useSharpYuv`) settings optimize output fidelity/size trade-offs.

- **Metadata Handling**: `exif` fields can be filtered via glob patterns (e.g., exclude `GPS|Exif|*Exposure*`), with sources limited to `exif`, `iptc`, or `xmp` (default: `['exif', 'iptc']`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T16:40:32.344113+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
