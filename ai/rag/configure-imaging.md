---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-06-27T09:53:58.801428+05:30'
collected_at: '2026-06-27T09:53:58.801443+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-06-27T09:53:58.801443+05:30'
last_seen: '2026-06-27T09:53:58.801443+05:30'
last_checked: '2026-06-27T09:53:58.801443+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Settings**: Default anchor set to `smart` (using `muesli/smartcrop` for focal point detection), background color `#ffffff`, and `box` resampling filter for resizing operations.

- **Format-Specific Configurations**:
  - **AVIF**: Lossy compression with `encoderSpeed: 10`, `hint: photo`, and `quality: 60`.
  - **WebP**: Lossy compression with `method: 2`, `quality: 75`, and `useSharpYuv: false`.
  - **JPEG**: Default `quality: 75`.

- **Metadata Handling**:
  - **Exif Filtering**: Excludes fields like `GPS`, `Exif`, `Contrast`, and `Sharp` by default; supports custom inclusion via `includeFields`.
  - **Sources**: Extracts metadata from `exif` and `iptc` by default, with `xmp` excluded for performance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T09:53:58.801428+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
