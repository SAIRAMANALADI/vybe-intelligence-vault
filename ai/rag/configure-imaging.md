---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-20T22:23:12.520591+05:30'
collected_at: '2026-07-20T22:23:12.520600+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-20T22:23:12.520600+05:30'
last_seen: '2026-07-20T22:23:12.520600+05:30'
last_checked: '2026-07-20T22:23:12.520600+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's `imaging` settings support AVIF, JPEG, and WebP formats with format-specific parameters like `quality`, `compression`, and `hint`; deprecated top-level `compression`, `hint`, and `quality` settings are replaced by format-specific alternatives.

- **Exif Metadata Handling**: The `meta` method allows granular control over extracted metadata via `fields` (glob patterns) and `sources` (e.g., `exif`, `iptc`, `xmp`), with defaults excluding technical fields for performance optimization.

- **Resampling & Focal Point**: The `resampleFilter` (e.g., `lanczos`, `catmullRom`) defines pixel interpolation during resizing, while `anchor` (`smart` or directional) sets the focal point for cropping/filling images.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-20T22:23:12.520591+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
