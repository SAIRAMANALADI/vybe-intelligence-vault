---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-21T22:19:45.507251+05:30'
collected_at: '2026-07-21T22:19:45.507269+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-21T22:19:45.507269+05:30'
last_seen: '2026-07-21T22:19:45.507269+05:30'
last_checked: '2026-07-21T22:19:45.507269+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `bgColor: #ffffff`, `resampleFilter: box`, with format-specific configs for AVIF (`lossy` compression, `quality: 60`), JPEG (`quality: 75`), and WebP (`lossy` compression, `quality: 75`, `method: 2`).

- **Exif Metadata Control**: Configurable via `meta.fields` (glob-based field filtering) and `meta.sources` (sources: `exif`, `iptc`, `xmp`), with default exclusion of technical fields (e.g., `GPS`, `Exif`, `Sharp`) to optimize performance.

- **Deprecated Top-Level Settings**: `compression`, `hint`, and `quality` are deprecated in favor of format-specific settings (e.g., `imaging.avif.compression`, `imaging.jpeg.quality`). `resampleFilter` supports options like `lanczos`, `catmullRom`, or `nearestNeighbor` for resizing.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T22:19:45.507251+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
