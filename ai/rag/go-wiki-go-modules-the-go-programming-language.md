---
title: 'Go Wiki: Go Modules - The Go Programming Language'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://go.dev/wiki/Modules#modules
published_at: '2026-07-14T19:59:39.472548+05:30'
collected_at: '2026-07-14T19:59:39.472560+05:30'
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
first_seen: '2026-07-14T19:59:39.472560+05:30'
last_seen: '2026-07-14T19:59:39.472560+05:30'
last_checked: '2026-07-14T19:59:39.472560+05:30'
health_score: 100
---

# Go Wiki: Go Modules - The Go Programming Language

## Summary

- **Module Mode Default**: Since Go 1.16, `GO111MODULE=on` is default; commands use `-mod=readonly` by default to prevent `go.mod`/`go.sum` modifications unless explicitly overridden.
- **Module Cache Control**: Go 1.15+ supports `GOMODCACHE` env var to customize module cache location, with a `GODEBUG=modcacheunzipinplace=1` workaround for Windows filesystem conflicts.
- **Semantic Versioning Enforcement**: Major versions (v2+) require explicit import paths (e.g., `module/v2`), with `retract` directive in `go.mod` enabling version deprecation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-14T19:59:39.472548+05:30

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
