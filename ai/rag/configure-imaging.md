---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-21T01:34:11.083736+05:30'
collected_at: '2026-07-21T01:34:11.083758+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-21T01:34:11.083758+05:30'
last_seen: '2026-07-21T01:34:11.083758+05:30'
last_checked: '2026-07-21T01:34:11.083758+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Default Imaging Settings**: Anchor set to `smart` (using `muesli/smartcrop` for focal point detection), background color `#ffffff` (RGB hex), and `box` resampling filter for image transformations.

- **Format-Specific Configurations**:
  - **AVIF**: Lossy compression (`quality=60`), encoder speed `10`, `photo` hint, and `4:2:0` chroma subsampling.
  - **WebP**: Lossy compression (`quality=75`), method `2`, `photo` hint, and optional `SharpYUV` conversion (`useSharpYuv=false`).

- **Metadata Handling**:
  - **Exif Filtering**: Excludes fields like `GPS`, `Exif`, and `Exposure*` by default; supports glob patterns for customization.
  - **Sources**: Extracts metadata from `exif` and `iptc` (XMP excluded by default for performance).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T01:34:11.083736+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
