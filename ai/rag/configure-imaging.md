---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif
published_at: '2026-07-21T16:57:29.827852+05:30'
collected_at: '2026-07-21T16:57:29.827867+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-07-21T16:57:29.827867+05:30'
last_seen: '2026-07-21T16:57:29.827867+05:30'
last_checked: '2026-07-21T16:57:29.827867+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Core Imaging Settings**: Default anchor is `smart` (using `muesli/smartcrop`), background color is `#ffffff`, and resampling filter is `box`; deprecated global `compression`, `hint`, and `quality` settings are replaced by format-specific configurations.

- **Format-Specific Parameters**:
  - **AVIF**: Lossy compression by default, with `encoderSpeed` (1–10), `hint` (`photo`), and `quality` (1–100, default 60).
  - **WebP**: Lossy compression by default, with `method` (0–6), `hint` (`photo`), `quality` (1–100, default 75), and `useSharpYuv` (false).
  - **JPEG**: `quality` (1–100, default 75).

- **Metadata Control**:
  - **Exif Filtering**: Excludes fields like `GPS`, `Exif`, and `Exposure*` by default; `includeFields` and `excludeFields` support regex patterns.
  - **Meta Method**: Configurable via `fields` (glob patterns) and `sources` (`exif`, `iptc`, `xmp`; defaults to `['exif', 'iptc']`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T16:57:29.827852+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif
