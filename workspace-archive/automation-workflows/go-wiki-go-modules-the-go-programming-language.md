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

- **Module Mode Defaults**: Since Go 1.16, `GO111MODULE=on` is the default in all cases, and `go install pkg@version` is the recommended method for global package installation; `go.mod` files are no longer modified by default (`-mod=readonly`).

- **Module Cache & Permissions**: Go 1.15 introduced `GOMODCACHE` to customize the module cache location (default: `GOPATH[0]/pkg/mod`), and Go 1.14 added `-modcacherw` to preserve default directory permissions in the cache.

- **Versioned Module Support

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://go.dev/wiki/Modules#modules

## Local Vault File

Path: [go-wiki-go-modules-the-go-programming-language.md](../../ai/rag/go-wiki-go-modules-the-go-programming-language.md)
