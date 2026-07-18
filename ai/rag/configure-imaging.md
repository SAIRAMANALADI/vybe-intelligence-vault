---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-18T01:12:19.290949+05:30'
collected_at: '2026-07-18T01:12:19.290962+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-18T01:12:19.290962+05:30'
last_seen: '2026-07-18T01:12:19.290962+05:30'
last_checked: '2026-07-18T01:12:19.290962+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Hugo's `imaging` config supports AVIF (lossy/lossless, `encoderSpeed: 1-10`, `hint: photo/picture/etc.`), JPEG (`quality: 1-100`), and WebP (`compression: lossy/lossless`, `method: 0-6`, `useSharpYuv: bool`) with format-specific settings replacing deprecated global `compression`, `hint`, and `quality` options.

- **Resampling & Metadata Control**: Top-level settings include `anchor: smart|TopLeft|...`, `resampleFilter: box|lanczos|...`, `bgColor: hex`, and `exif` filtering via `excludeFields`/`includeFields` glob patterns (e.g., `GPS|Exif|*Exposure*`).

- **Meta Extraction**: The `Meta` method allows granular metadata control via `fields` (glob patterns) and `sources` (`exif`, `iptc`, `xmp`), with defaults excluding technical tags (e.g., `ColorSpace`, `GPS`) to optimize performance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-18T01:12:19.290949+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
