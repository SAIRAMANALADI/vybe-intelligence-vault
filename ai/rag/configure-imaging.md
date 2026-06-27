---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-06-27T21:58:27.877441+05:30'
collected_at: '2026-06-27T21:58:27.877451+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-06-27T21:58:27.877451+05:30'
last_seen: '2026-06-27T21:58:27.877451+05:30'
last_checked: '2026-06-27T21:58:27.877451+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's `imaging` settings control image processing (e.g., resizing, format conversion) with defaults for `anchor: smart`, `bgColor: #ffffff`, `resampleFilter: box`, and format-specific optimizations (AVIF/WebP/JPEG).

- **Format-Specific Encoding**: AVIF (`lossy` compression, `encoderSpeed: 10`, `quality: 60`), WebP (`method: 2`, `quality: 75`, `useSharpYuv: false`), and JPEG (`quality: 75`) support configurable quality, compression, and performance tradeoffs.

- **Metadata Handling**: The `meta` method filters EXIF/IPTC metadata via `fields` (glob patterns) and `sources` (`exif`, `iptc`), excluding technical tags (e.g., `GPS`, `Exif`) by default for performance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T21:58:27.877441+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
