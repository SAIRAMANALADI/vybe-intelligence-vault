---
title: 'Go Wiki: Go Modules - The Go Programming Language'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://go.dev/wiki/Modules#modules
published_at: '2026-08-09T15:38:43.282910+05:30'
collected_at: '2026-08-09T15:38:43.282924+05:30'
tags:
- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:go-wiki-go-modules-the-go-programming-language
first_seen: '2026-08-09T15:38:43.282924+05:30'
last_seen: '2026-08-09T15:38:43.282924+05:30'
last_checked: '2026-08-09T15:38:43.282924+05:30'
health_score: 100
---

# Go Wiki: Go Modules - The Go Programming Language

## Summary

- **Module Mode Defaults**: Since Go 1.16, module mode (`GO111MODULE=on`) is the default, and commands no longer modify `go.mod`/`go.sum` by default (`-mod=readonly`). The `retract` directive is introduced in `go.mod` for version exclusion.

- **Module Cache & Windows Fix**: Go 1.15 allows setting the module cache location via `GOMODCACHE` (default: `GOPATH[0]/pkg/mod`) and introduces a Windows workaround for "Access denied" errors via `GODEBUG=modcacheunzipinplace=1`.

- **Versioned Dependencies & Private Modules**: Go 1.13 defaults to downloading modules from the public Go module mirror and validates checksums against the public Go checksum database, requiring `GOPRIVATE` for private code.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T15:38:43.282910+05:30

## Related Tags

- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows
- youtube

## Source

Original source: https://go.dev/wiki/Modules#modules
