---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif-images
published_at: '2026-07-21T03:54:17.266513+05:30'
collected_at: '2026-07-21T03:54:17.266525+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-21T03:54:17.266525+05:30'
last_seen: '2026-07-21T03:54:17.266525+05:30'
last_checked: '2026-07-21T03:54:17.266525+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's imaging module supports format-specific settings for AVIF (`compression`, `encoderSpeed`, `hint`, `quality`), JPEG (`quality`), and WebP (`compression`, `hint`, `method`, `quality`, `useSharpYuv`), with default values optimized for performance and quality.

- **Metadata & EXIF Handling**: The `meta` method allows granular control over extracted metadata via `fields` (glob patterns) and `sources` (`exif`, `iptc`, `xmp`), excluding technical fields (e.g., `GPS`, `Exif`) by default for performance.

- **Resampling & Focal Point**: The `resampleFilter` (e.g., `box`, `lanczos`, `catmullRom`) defines pixel interpolation during resizing, while `anchor` (`smart` or directional) sets the focal point for cropping/filling images.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T03:54:17.266513+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif-images
