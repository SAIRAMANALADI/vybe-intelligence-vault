---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-09T01:35:12.155333+05:30'
collected_at: '2026-07-09T01:35:12.155342+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-09T01:35:12.155342+05:30'
last_seen: '2026-07-09T01:35:12.155342+05:30'
last_checked: '2026-07-09T01:35:12.155342+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `bgColor: #ffffff`, `resampleFilter: box`, with format-specific configs for AVIF (`lossy` compression, `quality: 60`, `encoderSpeed: 10`), JPEG (`quality: 75`), and WebP (`lossy` compression, `quality: 75`, `method: 2`).

- **Exif Metadata Control**: Configurable via `meta.fields` (glob-based filtering) and `meta.sources` (supports `exif`, `iptc`, `xmp`), with default exclusion of technical fields (e.g., `GPS`, `Exif`, `Sharp`) to optimize performance.

- **Deprecated Legacy Settings**: Top-level `compression`, `hint`, and `quality` are deprecated (v0.163.0+) in favor of format-specific equivalents (e.g., `imaging.avif.compression`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-09T01:35:12.155333+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
