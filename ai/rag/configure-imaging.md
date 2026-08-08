---
title: Configure imaging
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/imaging/#avif-images
published_at: '2026-08-08T18:52:55.706356+05:30'
collected_at: '2026-08-08T18:52:55.706375+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-imaging
first_seen: '2026-08-08T18:52:55.706375+05:30'
last_seen: '2026-08-08T18:52:55.706375+05:30'
last_checked: '2026-08-08T18:52:55.706375+05:30'
health_score: 100
---

# Configure imaging

## Summary

- **Default Imaging Settings**: Anchor set to `smart`, background color `#ffffff`, resample filter `box`, with format-specific defaults for AVIF (`lossy`, `quality=60`, `encoderSpeed=10`), JPEG (`quality=75`), and WebP (`lossy`, `quality=75`, `method=2`).

- **Exif/Meta Configuration**: Excludes fields like `GPS`, `Exif`, `Exposure[M|P|B]`, `Contrast`, etc., by default; supports customizable glob patterns for `fields` and sources (`exif`, `iptc`, `xmp`).

- **Deprecated/Replaced Parameters**: `compression`, `hint`, and `quality` are deprecated in favor of format-specific settings (e.g., `imaging.avif.compression`); `Meta` method replaces deprecated `Exif` method for metadata extraction.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T18:52:55.706356+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/imaging/#avif-images
