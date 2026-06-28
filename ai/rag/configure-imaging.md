---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif-images
published_at: '2026-06-28T15:09:24.932843+05:30'
collected_at: '2026-06-28T15:09:24.932857+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-06-28T15:09:24.932857+05:30'
last_seen: '2026-06-28T15:09:24.932857+05:30'
last_checked: '2026-06-28T15:09:24.932857+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's `imaging` settings support format-specific parameters for AVIF (lossy/lossless, encoder speed, quality, hint), JPEG (quality), and WebP (compression, method, quality, `useSharpYuv`), with defaults optimized for photographic content (`hint: photo`).

- **Metadata Handling**: The `meta` method allows granular control over EXIF/IPTC/XMP metadata extraction via `fields` (glob patterns) and `sources` (e.g., `['exif', 'iptc']`), excluding technical fields by default to balance detail and performance.

- **Resampling & Focal Points**: Supports multiple resampling filters (`box`, `lanczos`, `catmullRom`, etc.) for resizing, with `anchor: smart` using `muesli/smartcrop` for dynamic focal point detection during cropping/filling.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T15:09:24.932843+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif-images
