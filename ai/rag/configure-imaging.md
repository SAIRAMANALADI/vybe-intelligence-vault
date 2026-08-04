---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-08-04T22:43:23.211228+05:30'
collected_at: '2026-08-04T22:43:23.211240+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-04T22:43:23.211240+05:30'
last_seen: '2026-08-04T22:43:23.211240+05:30'
last_checked: '2026-08-04T22:43:23.211240+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Default Imaging Settings**: Configurable via `imaging` block in Hugo's config file, supporting formats like AVIF, JPEG, and WebP with format-specific parameters (e.g., `quality`, `compression`, `hint`). Top-level settings include `anchor` (e.g., `smart` for auto-cropping), `bgColor` (hex RGB for transparency fallback), and `resampleFilter` (e.g., `box`, `lanczos`, `catmullRom`).

- **AVIF/WebP Encoding**: AVIF supports `lossy`/`lossless` compression with `encoderSpeed` (1–10) and `hint` (e.g., `photo`, `text`). WebP uses `method` (0–6), `quality` (1–100), and `useSharpYuv` (bool) for RGB-to-YUV conversion. Both default to `lossy` compression.

- **Metadata Control**: `Meta` method filters EXIF/IPTC/XMP fields via `fields` (glob patterns) and `sources` (e.g., `['exif', 'iptc']`). Default excludes technical fields (e.g., `GPS`, `Exif`) to optimize performance and cache size.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T22:43:23.211228+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
