---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-21T14:23:16.119077+05:30'
collected_at: '2026-07-21T14:23:16.119094+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-21T14:23:16.119094+05:30'
last_seen: '2026-07-21T14:23:16.119094+05:30'
last_checked: '2026-07-21T14:23:16.119094+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Hugo's `imaging` settings control image processing, including anchor point (`smart` default), background color (`#ffffff`), and resampling filters (`box` default, with options like `lanczos`, `catmullRom`, etc.).

- **Format-Specific Encoding**: AVIF (`lossy` compression, `quality: 60`, `encoderSpeed: 10`), JPEG (`quality: 75`), and WebP (`lossy` compression, `quality: 75`, `method: 2`) support configurable quality, compression, and hints (e.g., `photo`, `text`).

- **Metadata Handling**: The `meta` method filters EXIF/IPTC metadata via `fields` (glob patterns) and `sources` (`exif`, `iptc`), excluding technical fields (e.g., `GPS`, `Exif`) by default for performance optimization.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T14:23:16.119077+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
