---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-08T14:23:01.525696+05:30'
collected_at: '2026-07-08T14:23:01.525711+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-08T14:23:01.525711+05:30'
last_seen: '2026-07-08T14:23:01.525711+05:30'
last_checked: '2026-07-08T14:23:01.525711+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's imaging settings support format-specific configurations for AVIF (`lossy/lossless`, `encoderSpeed`, `hint`, `quality`), JPEG (`quality`), and WebP (`compression`, `hint`, `method`, `quality`, `useSharpYuv`), with defaults optimized for photographic content.

- **Resampling & Cropping**: Uses `resampleFilter` (e.g., `box`, `lanczos`, `catmullRom`) for resizing and `anchor` (`smart`/focal points) for cropping/filling, with `bgColor` for transparent-to-opaque conversions.

- **Metadata Handling**: `Meta` method controls EXIF/IPTC/XMP extraction via `fields` (glob patterns) and `sources`, excluding technical metadata (e.g., `GPS`, `Exif`) by default for performance optimization.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-08T14:23:01.525696+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
