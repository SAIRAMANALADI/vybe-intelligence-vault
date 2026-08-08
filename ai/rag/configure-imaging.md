---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-08-08T21:26:18.133259+05:30'
collected_at: '2026-08-08T21:26:18.133269+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-08T21:26:18.133269+05:30'
last_seen: '2026-08-08T21:26:18.133269+05:30'
last_checked: '2026-08-08T21:26:18.133269+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Configuration**: Default settings include `anchor: smart`, `bgColor: ffffff`, `resampleFilter: box`, with format-specific optimizations for AVIF (`lossy` compression, `quality: 60`), JPEG (`quality: 75`), and WebP (`lossy` compression, `method: 2`, `quality: 75`).

- **Exif Metadata Control**: Excludes fields like `GPS`, `Exif`, `Exposure[M|P|B]`, and others by default; supports customization via `excludeFields`/`includeFields` and sources (`exif`, `iptc`, `xmp`).

- **Deprecated/Replaced Settings**: Top-level `compression`, `hint`, and `quality` are deprecated (v0.163.0); replaced by format-specific equivalents (AVIF, WebP, JPEG).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T21:26:18.133259+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
