---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-20T15:12:09.564353+05:30'
collected_at: '2026-07-20T15:12:09.564361+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-20T15:12:09.564361+05:30'
last_seen: '2026-07-20T15:12:09.564361+05:30'
last_checked: '2026-07-20T15:12:09.564361+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Core Imaging Settings**:
  - Defaults: `anchor: smart`, `bgColor: #ffffff`, `resampleFilter: box`
  - Deprecated global settings (`compression`, `hint`, `quality`) replaced by format-specific configs (AVIF, JPEG, WebP).

- **Format-Specific Configurations**:
  - **AVIF**: `compression: lossy`, `encoderSpeed: 1-10`, `hint: photo`, `quality: 1-100`
  - **WebP**: `compression: lossy`, `method: 0-6`, `quality: 1-100`, `useSharpYuv: false`
  - **JPEG**: `quality: 1-100` (default: 75).

- **Metadata & Exif Handling**:
  - `meta.fields`: Glob-based filtering (e.g., `['! *{GPS,Exif,...}*']` to exclude fields)
  - `meta.sources`: Supports `exif`, `iptc`, `xmp` (default: `['exif', 'iptc']`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-20T15:12:09.564353+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
