---
title: 'Go Wiki: Go Modules - The Go Programming Language'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://go.dev/wiki/Modules#modules
published_at: '2026-07-03T03:59:19.218589+05:30'
collected_at: '2026-07-03T03:59:19.218603+05:30'
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
first_seen: '2026-07-03T03:59:19.218603+05:30'
last_seen: '2026-07-03T03:59:19.218603+05:30'
last_checked: '2026-07-03T03:59:19.218603+05:30'
health_score: 100
---

# Go Wiki: Go Modules - The Go Programming Language

## Summary

- **Module Mode Defaults**: Since Go 1.16, `GO111MODULE=on` is the default in all cases, and `go install pkg@version` is the recommended method for global package installation; `go.mod` files are no longer modified by default (`-mod=readonly`).

- **Module Cache & Permissions**: Go 1.15 introduced `GOMODCACHE` to customize the module cache location (default: `GOPATH[0]/pkg/mod`), and Go 1.14 added `-modcacherw` to preserve default directory permissions in the cache.

- **Versioned Module Support**: Go 1.13+ defaults to downloading modules from the public Go module mirror and validates them against the Go checksum database; private modules require `GOPRIVATE`, `GONOPROXY`, or `GONOSUMDB` configuration.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T03:59:19.218589+05:30

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
