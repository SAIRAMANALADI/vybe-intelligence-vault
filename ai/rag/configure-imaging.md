---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-08-01T19:32:11.991274+05:30'
collected_at: '2026-08-01T19:32:11.991282+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-01T19:32:11.991282+05:30'
last_seen: '2026-08-01T19:32:11.991282+05:30'
last_checked: '2026-08-01T19:32:11.991282+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Default settings include `anchor: smart`, `resampleFilter: box`, `bgColor: #ffffff`, and format-specific parameters for AVIF (`quality: 60`, `encoderSpeed: 10`), JPEG (`quality: 75`), and WebP (`quality: 75`, `method: 2`).

- **Exif Metadata Control**: Configurable via `meta.fields` (glob pattern to include/exclude fields) and `meta.sources` (sources like `exif`, `iptc`, `xmp`), with performance optimizations excluding technical metadata by default.

- **Deprecated Parameters**: Top-level `compression`, `hint`, and `quality` settings are deprecated in favor of format-specific configurations (e.g., `imaging.avif.compression`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-01T19:32:11.991274+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
