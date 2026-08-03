---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-08-03T20:55:31.621823+05:30'
collected_at: '2026-08-03T20:55:31.621835+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-03T20:55:31.621835+05:30'
last_seen: '2026-08-03T20:55:31.621835+05:30'
last_checked: '2026-08-03T20:55:31.621835+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's imaging module supports AVIF, JPEG, and WebP formats with format-specific settings for `compression`, `hint`, `quality`, and advanced options like `encoderSpeed` (AVIF) and `method` (WebP).

- **Top-Level Imaging Parameters**: Default settings include `anchor` (cropping/filling focal point), `bgColor` (background for transparent-to-opaque conversions), `resampleFilter` (e.g., `lanczos`, `catmullRom`), and deprecated global `quality`/`compression`/`hint` (now format-specific).

- **Metadata Handling**: The `meta` method allows granular control over EXIF/IPTC/XMP metadata extraction via `fields` (glob patterns) and `sources` (e.g., `exif`, `iptc`), with defaults excluding technical metadata to optimize performance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T20:55:31.621823+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
