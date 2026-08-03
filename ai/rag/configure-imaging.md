---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-08-03T09:32:38.114381+05:30'
collected_at: '2026-08-03T09:32:38.114394+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-03T09:32:38.114394+05:30'
last_seen: '2026-08-03T09:32:38.114394+05:30'
last_checked: '2026-08-03T09:32:38.114394+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's imaging module supports AVIF (lossy/lossless, encoder speed 1-10, quality 1-100), JPEG (quality 1-100), and WebP (lossy/lossless, method 0-6, quality 1-100, `useSharpYuv` flag) with format-specific settings replacing deprecated global `compression`, `hint`, and `quality` options.

- **Resampling & Focal Point**: Default `resampleFilter` is `box` (fast averaging), with alternatives like `lanczos` (high-quality) or `nearestNeighbor` (fastest). Smart cropping uses `muesli/smartcrop` for focal point detection (`TopLeft`, `Center`, etc.).

- **Metadata Handling**: The `Meta` method filters EXIF/IPTC/XMP fields via glob patterns (e.g., excluding `GPS|Exif|*Exposure*`) and sources (default: `['exif', 'iptc']`), optimizing cache size and build performance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T09:32:38.114381+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
