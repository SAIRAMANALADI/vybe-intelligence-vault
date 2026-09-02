---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-09-02T10:23:49.650841+05:30'
collected_at: '2026-09-02T10:23:49.650857+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-09-02T10:23:49.650857+05:30'
last_seen: '2026-09-02T10:23:49.650857+05:30'
last_checked: '2026-09-02T10:23:49.650857+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's imaging settings support AVIF (lossy/lossless, encoder speed 1-10, `photo` hint), JPEG (quality 1-100), and WebP (lossy/lossless, method 0-6, `photo` hint, `useSharpYuv` toggle) with default quality values (AVIF:60, JPEG:75, WebP:75).

- **Resampling & Focal Points**: Uses `resampleFilter` (e.g., `box`, `lanczos`, `catmullRom`) for resizing and `anchor` (`smart`/9-point) for cropping/filling, with `bgColor` (`#ffffff`) for transparency conversion.

- **Metadata Control**: `Meta` method filters EXIF/IPTC/XMP fields via `fields` glob patterns and `sources` (default: `['exif', 'iptc']`), excluding technical tags (e.g., `GPS`, `Sharp`) by default for performance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-02T10:23:49.650841+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
