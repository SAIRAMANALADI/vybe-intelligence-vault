---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-08-02T01:10:28.587111+05:30'
collected_at: '2026-08-02T01:10:28.587126+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-02T01:10:28.587126+05:30'
last_seen: '2026-08-02T01:10:28.587126+05:30'
last_checked: '2026-08-02T01:10:28.587126+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's `imaging` settings support AVIF (lossy/lossless, `encoderSpeed: 1-10`, `quality: 1-100`), JPEG (`quality: 1-100`), and WebP (`compression: lossy/lossless`, `method: 0-6`, `useSharpYuv: bool`) formats with format-specific encoding parameters.

- **Metadata & Resampling**: Default `resampleFilter: box` (supports `lanczos`, `catmullRom`, etc.), `anchor: smart` (via `muesli/smartcrop`), and EXIF/IPTC metadata filtering (`excludeFields` glob patterns, `sources: ["exif", "iptc"]`).

- **Deprecated & Legacy**: Top-level `compression`/`hint`/`quality` settings are deprecated (v0.163.0+); use format-specific alternatives. Legacy `Exif` method replaced by `Meta` method with configurable `fields` and `sources`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T01:10:28.587111+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
