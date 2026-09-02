---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-09-02T18:29:58.934730+05:30'
collected_at: '2026-09-02T18:29:58.934759+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-09-02T18:29:58.934759+05:30'
last_seen: '2026-09-02T18:29:58.934759+05:30'
last_checked: '2026-09-02T18:29:58.934759+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `bgColor: ffffff`, `resampleFilter: box`, with format-specific configs for AVIF (`lossy` compression, `quality: 60`, `encoderSpeed: 10`), JPEG (`quality: 75`), and WebP (`lossy` compression, `quality: 75`, `method: 2`).

- **Exif Metadata Control**: Configurable via `excludeFields` (e.g., `GPS|Exif|Exposure[M|P|B]`) and `includeFields` to filter metadata fields, with sources (`exif`, `iptc`, `xmp`) optimized for performance by excluding XMP by default.

- **Deprecated & Replaced Settings**: Top-level `compression`, `hint`, and `quality` are deprecated (v0.163.0); replaced by format-specific settings (AVIF/WebP/JPEG). `Meta` method replaces deprecated `Exif` method for metadata extraction.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-02T18:29:58.934730+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
