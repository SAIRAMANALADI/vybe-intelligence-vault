---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-18T16:55:15.619741+05:30'
collected_at: '2026-07-18T16:55:15.619748+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-18T16:55:15.619748+05:30'
last_seen: '2026-07-18T16:55:15.619748+05:30'
last_checked: '2026-07-18T16:55:15.619748+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Default Imaging Settings**: Anchor set to `smart` (using `muesli/smartcrop` for focal point detection), background color `#ffffff`, resample filter `box`, and EXIF metadata exclusion rules for fields like GPS, Exif, and Exposure metadata.

- **Format-Specific Configurations**:
  - **AVIF**: Lossy compression by default, encoder speed `10` (1-10 scale), `photo` hint, and quality `60`.
  - **JPEG**: Quality `75` (1-100 scale).
  - **WebP**: Lossy compression, `photo` hint, method `2` (0-6 scale), quality `75`, and `useSharpYuv` disabled.

- **Metadata Control**:
  - **Meta Method**: Glob-based field filtering (e.g., `['! *{GPS,Exif,...}*']`) and sources (`exif`, `iptc`) to optimize metadata extraction performance and cache size.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-18T16:55:15.619741+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
