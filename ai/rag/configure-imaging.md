---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-04T03:55:11.386258+05:30'
collected_at: '2026-07-04T03:55:11.386267+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-04T03:55:11.386267+05:30'
last_seen: '2026-07-04T03:55:11.386267+05:30'
last_checked: '2026-07-04T03:55:11.386267+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Default Imaging Settings**: Default anchor is `smart` (using `muesli/smartcrop` for focal point detection), background color `#ffffff`, and `box` resampling filter; deprecated top-level `compression`, `hint`, and `quality` settings are replaced by format-specific configurations.

- **AVIF/WebP/JPEG Configuration**: AVIF (`lossy` compression, `encoderSpeed: 10`, `quality: 60`, `hint: photo`), WebP (`lossy` compression, `method: 2`, `quality: 75`, `useSharpYuv: false`), and JPEG (`quality: 75`) support format-specific tuning for encoding speed, quality, and chroma subsampling.

- **EXIF/Meta Filtering**: `meta.fields` excludes technical metadata (e.g., `GPS`, `Exif`, `Sharp`) by default; `sources` defaults to `['exif', 'iptc']` but can include `xmp` for broader metadata extraction.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T03:55:11.386258+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
