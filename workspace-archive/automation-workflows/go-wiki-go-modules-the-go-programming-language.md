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

- Go Modules introduced in Go 1.11 (2018), replacing `vgo` prototype; production-ready since Go 1.14 with `-mod=vendor` and `-mod=readonly` defaults.
- Go 1.16+ enforces module mode (`GO111MODULE=on` by default), uses `-mod=readonly` for `go.mod`/`go.sum` protection, and supports `go install pkg@version` for global installs.
- `GOPRIVATE`, `GONOPROXY`, and `GONOSUMDB` configure private module handling; `retract` in `go.mod` allows version deprecation.

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://go.dev/wiki/Modules#modules

## Local Vault File

Path: [go-wiki-go-modules-the-go-programming-language.md](../../ai/rag/go-wiki-go-modules-the-go-programming-language.md)
