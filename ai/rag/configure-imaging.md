---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-07T15:40:22.107467+05:30'
collected_at: '2026-07-07T15:40:22.107477+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-07T15:40:22.107477+05:30'
last_seen: '2026-07-07T15:40:22.107477+05:30'
last_checked: '2026-07-07T15:40:22.107477+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's imaging settings support AVIF, JPEG, and WebP formats with configurable `quality`, `compression`, and `hint` (e.g., `photo`, `drawing`) for optimal encoding; deprecated global `compression`, `hint`, and `quality` settings now require format-specific overrides.

- **Resampling & Focal Point Control**: Default `resampleFilter` is `box`, with alternatives like `lanczos` or `catmullRom` for quality/speed trade-offs; `anchor` supports `smart` (via `muesli/smartcrop`) or fixed positions (e.g., `TopLeft`) for cropping/filling.

- **Metadata & EXIF Handling**: `meta` method allows granular control over extracted fields (glob patterns) and sources (`exif`, `iptc`, `xmp`), excluding technical tags (e.g., `GPS`, `Exif`) by default to optimize performance and cache size.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-07T15:40:22.107467+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
