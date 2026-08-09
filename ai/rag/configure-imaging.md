---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif-images
published_at: '2026-08-09T13:00:16.624184+05:30'
collected_at: '2026-08-09T13:00:16.624197+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-09T13:00:16.624197+05:30'
last_seen: '2026-08-09T13:00:16.624197+05:30'
last_checked: '2026-08-09T13:00:16.624197+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's `imaging` settings control image processing with format-specific parameters (e.g., AVIF, JPEG, WebP), including `anchor` (cropping/filling focal point), `resampleFilter` (e.g., `lanczos`, `box`), and `bgColor` (hex RGB for transparency conversion).

- **Format-Specific Encoding**: AVIF (`lossy`/`lossless` compression, `encoderSpeed` 1-10, `hint` for content type), JPEG (`quality` 1-100), and WebP (`method` 0-6, `useSharpYuv` for RGB-to-YUV conversion) support configurable trade-offs between quality, speed, and file size.

- **Metadata Handling**: The `meta` method filters EXIF/IPTC/XMP fields via `fields` (glob patterns) and `sources` (e.g., `exif`, `iptc`), with defaults excluding technical metadata (e.g., `GPS`, `Sharp`) to optimize performance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T13:00:16.624184+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif-images
