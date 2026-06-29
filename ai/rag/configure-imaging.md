---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-06-29T17:00:13.694015+05:30'
collected_at: '2026-06-29T17:00:13.694028+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-06-29T17:00:13.694028+05:30'
last_seen: '2026-06-29T17:00:13.694028+05:30'
last_checked: '2026-06-29T17:00:13.694028+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's `imaging` settings control image processing (e.g., resizing, format conversion) with defaults like `anchor: smart`, `resampleFilter: box`, and format-specific parameters (AVIF/WebP/JPEG).

- **Format-Specific Encoding**: AVIF (`lossy` compression, `encoderSpeed: 10`, `quality: 60`), WebP (`method: 2`, `quality: 75`), and JPEG (`quality: 75`) support configurable trade-offs between file size and quality.

- **Metadata Handling**: `meta.fields` filters EXIF/IPTC/XMP metadata (e.g., excluding `GPS`, `Exif` by default), while `sources` defines extraction sources (`exif`, `iptc`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T17:00:13.694015+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
