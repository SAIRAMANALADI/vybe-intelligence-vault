---
title: 'Go Wiki: Go Modules - The Go Programming Language'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://go.dev/wiki/Modules#modules
published_at: '2026-06-27T09:55:16.768171+05:30'
collected_at: '2026-06-27T09:55:16.768186+05:30'
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
first_seen: '2026-06-27T09:55:16.768186+05:30'
last_seen: '2026-06-27T09:55:16.768186+05:30'
last_checked: '2026-06-27T09:55:16.768186+05:30'
health_score: 100
---

# Go Wiki: Go Modules - The Go Programming Language

## Summary

- Go Modules support was introduced in Go 1.11 (with `vgo` prototype in 2018) and declared production-ready in Go 1.14, replacing legacy dependency management systems.
- Key behaviors by Go version:
  - **1.16**: Module mode (`GO111MODULE=on`) is default; `-mod=readonly` prevents `go.mod`/`go.sum` modifications; `go install pkg@version` replaces global installs; `retract` added to `go.mod`.
  - **1.15**: `GOMODCACHE` env var controls module cache location; `GODEBUG=modcacheunzipinplace=1` mitigates Windows "Access denied" errors.
  - **1.14**: Defaults to `-mod=vendor` with `go 1.14+` in `go.mod`; introduces `-modcacherw` and `-modfile` flags; supports Subversion repos.
  - **1.13**: Uses Go module mirror and checksum database by default; `GO111MODULE=auto` enables module mode in GOPATH if `go.mod` exists; `go get` behavior changes (e.g., `-u` no longer upgrades entire module).
- Semantic Import Versioning mandates major version suffixes (e.g., `/v2`) in import paths for v2+ modules, ensuring backward compatibility and clear versioning.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T09:55:16.768171+05:30

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
