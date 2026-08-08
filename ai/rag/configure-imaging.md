---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif-images
published_at: '2026-08-08T15:35:07.513337+05:30'
collected_at: '2026-08-08T15:35:07.513348+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-08T15:35:07.513348+05:30'
last_seen: '2026-08-08T15:35:07.513348+05:30'
last_checked: '2026-08-08T15:35:07.513348+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's `imaging` settings support AVIF, JPEG, and WebP with format-specific parameters (`compression`, `quality`, `hint`) and deprecated legacy top-level settings (`compression`, `hint`, `quality`).

- **Resampling & Metadata**: Default `resampleFilter` is `box`; supported filters include `lanczos`, `catmullRom`, and `nearestNeighbor`. EXIF metadata filtering uses glob patterns (e.g., `! *{GPS,Exif,...}*`) with sources `exif`/`iptc`.

- **AVIF/WebP Tuning**: AVIF `encoderSpeed` (1-10) trades speed for file size; WebP `method` (0-6) balances compression vs. speed. Both use `lossy`/`lossless` compression modes with perceptual quality defaults (AVIF:60, WebP/JPEG:75).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T15:35:07.513337+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif-images
