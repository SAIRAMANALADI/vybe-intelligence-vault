---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-08-05T01:36:51.773615+05:30'
collected_at: '2026-08-05T01:36:51.773622+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-05T01:36:51.773622+05:30'
last_seen: '2026-08-05T01:36:51.773622+05:30'
last_checked: '2026-08-05T01:36:51.773622+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `bgColor: ffffff`, `resampleFilter: box`, with format-specific configs for AVIF (`lossy` compression, `quality: 60`), JPEG (`quality: 75`), and WebP (`lossy` compression, `quality: 75`, `method: 2`).

- **Exif Metadata Control**: Configurable via `excludeFields` (e.g., `GPS|Exif|Exposure[M|P|B]|Contrast`) and `includeFields` to filter metadata extraction, with sources limited to `exif` and `iptc` by default for performance.

- **Resampling & Encoding Options**: Supports multiple resampling filters (`box`, `lanczos`, `catmullRom`, etc.) and format-specific encoding parameters (e.g., AVIF `encoderSpeed: 1-10`, WebP `useSharpYuv: bool`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-05T01:36:51.773615+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
