---
title: 'Go Wiki: Go Modules - The Go Programming Language'
archive_category: automation-workflows
source_category: ai/rag
source_url: https://go.dev/wiki/Modules#modules
resource_id: blog:go-wiki-go-modules-the-go-programming-language
local_vault_path: ai/rag/go-wiki-go-modules-the-go-programming-language.md
quality_score: 70
archive_score: 82
archive_tier: useful
resource_kind: tutorial
importance: high
tags:
- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Go Wiki: Go Modules - The Go Programming Language

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 82 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- Go Modules support was introduced in Go 1.11 (with `vgo` prototype in 2018) and declared production-ready in Go 1.14, replacing legacy dependency management systems.
- Key behaviors by Go version:
  - **1.16**: Module mode (`GO111MODULE=on`) is default; `-mod=readonly` prevents `go.mod`/`go.sum` modifications; `go install pkg@version` replaces global installs; `retract` added to `go.mod`.
  - **1.15**: `GOMODCACHE` env var controls module cache location; `GODEBUG=modcacheunzipinplace=1` mitiga

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://go.dev/wiki/Modules#modules

## Local Vault File

Path: [go-wiki-go-modules-the-go-programming-language.md](../../ai/rag/go-wiki-go-modules-the-go-programming-language.md)
