---
title: 'Go Wiki: Go Modules - The Go Programming Language'
archive_category: automation-workflows
source_category: ai/rag
source_url: https://go.dev/wiki/Modules#modules
resource_id: blog:go-wiki-go-modules-the-go-programming-language
local_vault_path: ai/rag/go-wiki-go-modules-the-go-programming-language.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
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
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Module Mode Default**: Since Go 1.16, `GO111MODULE=on` is default; commands use `-mod=readonly` by default to prevent `go.mod`/`go.sum` modifications unless explicitly overridden.
- **Module Cache Control**: Go 1.15+ supports `GOMODCACHE` env var to customize module cache location, with a `GODEBUG=modcacheunzipinplace=1` workaround for Windows filesystem conflicts.
- **Semantic Versioning Enforcement**: Major versions (v2+) require explicit import paths (e.g., `module/v2`), with `retract` di

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://go.dev/wiki/Modules#modules

## Local Vault File

Path: [go-wiki-go-modules-the-go-programming-language.md](../../ai/rag/go-wiki-go-modules-the-go-programming-language.md)
