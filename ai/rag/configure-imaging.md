---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-06-30T03:57:14.083183+05:30'
collected_at: '2026-06-30T03:57:14.083197+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-06-30T03:57:14.083197+05:30'
last_seen: '2026-06-30T03:57:14.083197+05:30'
last_checked: '2026-06-30T03:57:14.083197+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's `imaging` settings control image processing with defaults for `anchor: smart`, `bgColor: #ffffff`, `resampleFilter: box`, and format-specific optimizations for AVIF, JPEG, and WebP.

- **Format-Specific Encoding**: AVIF (`lossy` compression, `encoderSpeed: 10`, `quality: 60`), JPEG (`quality: 75`), and WebP (`lossy` compression, `method: 2`, `quality: 75`) support customizable quality, compression, and encoding hints.

- **Metadata & Exif Handling**: The `meta` method filters EXIF/IPTC metadata via `fields` (glob patterns) and `sources` (`exif`, `iptc`, `xmp`), excluding technical fields by default for performance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T03:57:14.083183+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
