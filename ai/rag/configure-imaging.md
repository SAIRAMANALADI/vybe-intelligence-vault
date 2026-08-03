---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif-images
published_at: '2026-08-04T01:37:01.578033+05:30'
collected_at: '2026-08-04T01:37:01.578045+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-04T01:37:01.578045+05:30'
last_seen: '2026-08-04T01:37:01.578045+05:30'
last_checked: '2026-08-04T01:37:01.578045+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Image Processing Defaults**: Default settings include `anchor: smart`, `resampleFilter: box`, `bgColor: #ffffff`, with format-specific parameters for AVIF (`lossy` compression, `quality: 60`), JPEG (`quality: 75`), and WebP (`lossy` compression, `quality: 75`, `method: 2`).

- **Exif Metadata Control**: Configurable via `excludeFields` (e.g., `GPS|Exif|Exposure[M|P|B]`) and `includeFields`, with sources limited to `exif` and `iptc` by default for performance optimization.

- **Deprecated/Replaced Parameters**: `compression`, `hint`, and `quality` are deprecated in favor of format-specific settings (e.g., `imaging.avif.compression`), while `Meta` method replaces the deprecated `Exif` method for metadata extraction.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T01:37:01.578033+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif-images
