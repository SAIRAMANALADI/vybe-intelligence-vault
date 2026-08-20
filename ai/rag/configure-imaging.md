---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif-images
published_at: '2026-08-10T03:30:18.980659+05:30'
collected_at: '2026-08-10T03:30:18.980673+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-10T03:30:18.980673+05:30'
last_seen: '2026-08-10T03:30:18.980673+05:30'
last_checked: '2026-08-10T03:30:18.980673+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's `imaging` settings support format-specific parameters for AVIF (`compression`, `encoderSpeed`, `hint`, `quality`), JPEG (`quality`), and WebP (`compression`, `hint`, `method`, `quality`, `useSharpYuv`), with defaults optimized for performance and quality trade-offs.

- **Metadata Handling**: The `meta` method allows granular control over EXIF/IPTC/XMP metadata extraction via `fields` (glob patterns) and `sources` (e.g., `exif`, `iptc`), excluding technical fields by default to reduce cache size.

- **Resampling & Focal Points**: `resampleFilter` (e.g., `box`, `lanczos`, `catmullRom`) dictates pixel interpolation during resizing, while `anchor` (`smart` or directional) defines cropping/filling focal points using `muesli/smartcrop` for automated detection.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T03:30:18.980659+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif-images
