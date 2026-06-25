---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-06-26T01:59:30.261301+05:30'
collected_at: '2026-06-26T01:59:30.261312+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-06-26T01:59:30.261312+05:30'
last_seen: '2026-06-26T01:59:30.261312+05:30'
last_checked: '2026-06-26T01:59:30.261312+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's `imaging` section supports format-specific settings for AVIF (`lossy/lossless` compression, `encoderSpeed`, `hint`, `quality`), JPEG (`quality`), and WebP (`compression`, `hint`, `method`, `quality`, `useSharpYuv`), with defaults optimized for photographic content.

- **Resampling & Cropping**: Uses `resampleFilter` (e.g., `box`, `lanczos`, `catmullRom`) for resizing, `anchor` (e.g., `smart`, `Center`) for focal point detection during cropping/filling, and `bgColor` for transparent-to-opaque format conversions.

- **Metadata Handling**: Configurable via `meta.fields` (glob-based field filtering) and `meta.sources` (`exif`, `iptc`, `xmp`), with performance-focused defaults excluding technical metadata like GPS/Exif fields.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T01:59:30.261301+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
