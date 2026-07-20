---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-20T20:12:18.945257+05:30'
collected_at: '2026-07-20T20:12:18.945274+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-20T20:12:18.945274+05:30'
last_seen: '2026-07-20T20:12:18.945274+05:30'
last_checked: '2026-07-20T20:12:18.945274+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Default settings include `anchor: smart`, `resampleFilter: box`, and format-specific parameters for AVIF (`quality: 60`, `encoderSpeed: 10`), JPEG (`quality: 75`), and WebP (`quality: 75`, `method: 2`).

- **Exif Metadata Control**: Configurable via `excludeFields` (e.g., `GPS|Exif|Contrast`) and `includeFields` (empty by default), with sources limited to `exif` and `iptc` for performance optimization.

- **Format-Specific Tuning**: AVIF supports `lossy`/`lossless` compression and `hint` presets (`photo`, `drawing`), while WebP offers `useSharpYuv` for RGB-to-YUV conversion and `method` levels (0-6) for compression effort.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-20T20:12:18.945257+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
