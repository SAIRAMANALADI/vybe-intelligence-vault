---
title: Releases · gohugoio/hugo · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/gohugoio/hugo/releases
published_at: '2026-06-26T22:43:31.784760+05:30'
collected_at: '2026-06-26T22:43:31.784770+05:30'
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
first_seen: '2026-06-26T22:43:31.784770+05:30'
last_seen: '2026-06-26T22:43:31.784770+05:30'
last_checked: '2026-06-26T22:43:31.784770+05:30'
health_score: 100
---

# Releases · gohugoio/hugo · GitHub

## Summary

- **AVIF Image Handling Improvements**: Default AVIF quality reduced to 60 (JPEG/WebP at 75 is comparable), added per-format quality config, and introduced `hint` parameter (YUV420 for lossy photos, YUV444 for text/icons) to optimize memory usage.

- **Security Fixes**: Addressed integer IPv4 host encoding in HTTP URL checks (`a00b5c7`), removed symlink handling in `os.ReadDir`, `os.ReadFile`, `os.Stat`, and `os.FileExists` (`cf9c8f9`), and updated `golang.org/x/image` dependency (`93c8c7d`).

- **Deprecations & Cleanup**: Removed deprecated `baseUrl` from JS config (`ff2903a`), deprecated `IsNode` in favor of `IsBranch` (`b89e7fe`), and adjusted tests for deprecated link/image render hook settings (`ca68936`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T22:43:31.784760+05:30

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
