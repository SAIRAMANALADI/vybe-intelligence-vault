---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-20T01:12:26.387357+05:30'
collected_at: '2026-07-20T01:12:26.387372+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-20T01:12:26.387372+05:30'
last_seen: '2026-07-20T01:12:26.387372+05:30'
last_checked: '2026-07-20T01:12:26.387372+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Default Imaging Settings**: Anchor set to `smart` (using `muesli/smartcrop`), background color `#ffffff`, resample filter `box`, with format-specific defaults for AVIF (`lossy`, `quality:60`), JPEG (`quality:75`), and WebP (`lossy`, `quality:75`, `method:2`).

- **Format-Specific Controls**:
  - **AVIF**: Supports `lossy`/`lossless` compression, `encoderSpeed:1-10`, `hint:photo` (4:2:0 chroma), and `quality:1-100`.
  - **WebP**: Configurable via `compression`, `hint`, `method:0-6`, `quality:1-100`, and `useSharpYuv` (RGB-to-YUV conversion toggle).

- **Metadata Handling**: `Meta` method filters EXIF/IPTC/XMP fields via `fields` glob patterns (default excludes technical metadata) and `sources` (`exif`, `iptc`, `xmp`), optimizing build performance by excluding XMP by default.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-20T01:12:26.387357+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
