---
title: Releases · gohugoio/hugo · GitHub
archive_category: vector-databases
source_category: ai/rag
source_url: https://github.com/gohugoio/hugo/releases
resource_id: github:gohugoio/hugo
local_vault_path: ai/rag/gohugoio-hugo.md
quality_score: 70
archive_score: 75
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- frontend_ui
- hackernews
- rag
- reddit
- scripts
- web-crawled
selection_reason:
- Active open-source repository
---

# Releases · gohugoio/hugo · GitHub

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 75 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Active open-source repository

## Summary

- **AVIF Image Handling Improvements**: Default AVIF quality reduced to 60 (JPEG/WebP at 75 comparable), added per-format quality configuration, and introduced `hint` parameter (YUV420 for lossy, YUV444 for text/icons) to optimize memory usage.

- **Security Fixes**: Addressed vulnerabilities in `golang.org/x/image` (CVE-related), normalized IPv4 host encodings in URL checks, and dropped symlink handling in `os.ReadDir`, `os.ReadFile`, `os.Stat`, and `os.FileExists`.

- **Deprecations & Cleanup*

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://github.com/gohugoio/hugo/releases

## Local Vault File

Path: [gohugoio-hugo.md](../../ai/rag/gohugoio-hugo.md)
