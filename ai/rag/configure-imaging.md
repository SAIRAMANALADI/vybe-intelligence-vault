---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-08-05T04:02:19.253034+05:30'
collected_at: '2026-08-05T04:02:19.253049+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-05T04:02:19.253049+05:30'
last_seen: '2026-08-05T04:02:19.253049+05:30'
last_checked: '2026-08-05T04:02:19.253049+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Top-level imaging settings**: Default `anchor: smart`, `bgColor: #ffffff`, `resampleFilter: box`, with deprecated global `compression`, `hint`, and `quality` settings replaced by format-specific configurations (e.g., AVIF, JPEG, WebP).

- **Format-specific configurations**:
  - **AVIF**: Lossy compression by default (`quality: 60`, `encoderSpeed: 10`), with `hint: photo` and optional `lossless` mode.
  - **WebP**: Configurable `method` (0–6), `quality` (1–100), `useSharpYuv`, and `compression` (lossy/lossless), with `hint` options matching AVIF.

- **Metadata handling**: `Meta` method supports glob-based `fields` filtering (e.g., excluding `GPS|Exif|*`) and sources (`exif`, `iptc`, `xmp`), with defaults optimized for performance by excluding technical metadata.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-05T04:02:19.253034+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
