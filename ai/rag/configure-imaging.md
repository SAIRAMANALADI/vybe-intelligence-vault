---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif-images
published_at: '2026-07-17T14:08:20.635333+05:30'
collected_at: '2026-07-17T14:08:20.635345+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-17T14:08:20.635345+05:30'
last_seen: '2026-07-17T14:08:20.635345+05:30'
last_checked: '2026-07-17T14:08:20.635345+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's `imaging` settings support format-specific parameters for AVIF (`compression`, `encoderSpeed`, `hint`, `quality`), JPEG (`quality`), and WebP (`compression`, `hint`, `method`, `quality`, `useSharpYuv`), with defaults optimized for photographic content (`anchor: smart`, `resampleFilter: box`, `bgColor: ffffff`).

- **Metadata Handling**: The `meta` method filters EXIF/IPTC metadata using glob patterns (`fields`) to exclude technical tags (e.g., `GPS`, `Exif`, `Exposure*`) by default, while `sources` defines extraction from `exif`, `iptc`, or `xmp` (latter excluded for performance).

- **Resampling & Performance**: Resizing uses algorithms like `lanczos` (high-quality) or `box` (fast), with AVIF/WebP encoder speed (`encoderSpeed: 1-10`) and WebP method (`method: 0-6`) balancing compression efficiency vs. processing time.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-17T14:08:20.635333+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif-images
