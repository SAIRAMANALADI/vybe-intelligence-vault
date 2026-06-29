---
title: Releases · gohugoio/hugo · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/gohugoio/hugo/releases
published_at: '2026-06-29T10:37:33.093210+05:30'
collected_at: '2026-06-29T10:37:33.093223+05:30'
tags:
- agents
- frontend_ui
- hackernews
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: github:gohugoio/hugo
first_seen: '2026-06-29T10:37:33.093223+05:30'
last_seen: '2026-06-29T10:37:33.093223+05:30'
last_checked: '2026-06-29T10:37:33.093223+05:30'
health_score: 100
---

# Releases · gohugoio/hugo · GitHub

## Summary

- **Security & Bug Fixes**:
  - Fixed page/section name collision regression in `hugolib` ([#15046](https://github.com/gohugoio/hugo/issues/15046)).
  - Resolved `ERR_ACCESS_DENIED` in Node.js resolver ([#15041](https://github.com/gohugoio/hugo/issues/15041)).
  - Standardized behavior for missing external converters in `markup` ([#14222](https://github.com/gohugoio/hugo/issues/14222)).
  - Security patches: Normalized IPv4 host encodings in `http.urls` check and dropped symlinks in filesystem operations.

- **AVIF & Imaging Improvements**:
  - Reduced default AVIF `quality` to 60 (comparable to JPEG/WebP at 75) and added per-format quality/config support.
  - Introduced `hint` parameter for AVIF (YUV420 for photos, YUV444 for text/icons) to optimize encoding memory.

- **Deprecations & Build Updates**:
  - Deprecated `Imaging.Compression` in favor of format-specific configs (`webp`, `avif`).
  - Removed deprecated `baseUrl` in `jsconfig` and aligned tests with deprecated link/image render hook settings.
  - Enforced Go version alignment (latest only) and re-added `macos-latest` to CI test matrix.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T10:37:33.093210+05:30

## Related Tags

- agents
- frontend_ui
- hackernews
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://github.com/gohugoio/hugo/releases
