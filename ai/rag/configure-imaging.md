---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif-images
published_at: '2026-06-25T16:42:11.492862+05:30'
collected_at: '2026-06-25T16:42:11.492871+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-06-25T16:42:11.492871+05:30'
last_seen: '2026-06-25T16:42:11.492871+05:30'
last_checked: '2026-06-25T16:42:11.492871+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `resampleFilter: box`, `bgColor: #ffffff`, and format-specific defaults for AVIF (`lossy` compression, `quality: 60`), JPEG (`quality: 75`), and WebP (`lossy` compression, `method: 2`, `quality: 75`).

- **Format-Specific Configurations**:
  - **AVIF**: Supports `lossy`/`lossless` compression, `encoderSpeed` (1-10), `hint` (`drawing`, `icon`, `photo`, `picture`, `text`), and `quality` (1-100).
  - **WebP**: Configurable via `compression`, `hint`, `method` (0-6), `quality` (1-100), and `useSharpYuv` (bool).
  - **JPEG**: Only `quality` (1-100) is configurable.

- **Metadata Handling**:
  - **Exif Filtering**: Excludes fields like `GPS`, `Exif`, `Contrast`, etc., by default; customizable via `excludeFields`/`includeFields`.
  - **Meta Method**: Uses `sources` (`exif`, `iptc`, `xmp`) and `fields` (glob patterns) to control metadata extraction granularity.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-25T16:42:11.492862+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif-images
