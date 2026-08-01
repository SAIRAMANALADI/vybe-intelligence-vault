---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-08-02T03:48:26.518514+05:30'
collected_at: '2026-08-02T03:48:26.518528+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-02T03:48:26.518528+05:30'
last_seen: '2026-08-02T03:48:26.518528+05:30'
last_checked: '2026-08-02T03:48:26.518528+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's `imaging` settings support format-specific configurations for AVIF (`lossy/lossless`, `encoderSpeed`, `hint`, `quality`), JPEG (`quality`), and WebP (`compression`, `hint`, `method`, `quality`, `useSharpYuv`), with defaults optimized for photographic content.

- **Metadata Handling**: The `meta` method allows granular control over EXIF/IPTC/XMP metadata extraction via `fields` (glob patterns) and `sources` (e.g., `exif`, `iptc`), excluding technical fields by default for performance.

- **Resampling & Focal Points**: Top-level settings include `resampleFilter` (e.g., `box`, `lanczos`, `catmullRom`) for resizing quality and `anchor` (`smart`/fixed positions) for cropping/filling focal points.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T03:48:26.518514+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
