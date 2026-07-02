---
title: Security model
archive_category: vector-databases
source_category: ai/rag
source_url: https://gohugo.io/about/security/
resource_id: blog:security-model
local_vault_path: ai/rag/security-model.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: template
importance: medium
tags:
- rag
- reddit
- web-crawled
- workflows
selection_reason:
- Useful for project building
---

# Security model

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: template
- Selection reasons:
  - Useful for project building

## Summary

- **Trust Model**: Hugo distinguishes between trusted (templates, static assets, `layouts`, `archetypes`, `data`, `i18n`, `resources`) and untrusted (content, content adapters in `content`) sources, with exceptions for inline shortcodes.

- **Runtime Security**: Implements a virtual file system, read-only access for user-defined components, controlled external binaries, and no arbitrary command execution; relies on Go modules with `go.sum` for dependency integrity.

- **Web Security**: Follows O

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://gohugo.io/about/security/

## Local Vault File

Path: [security-model.md](../../ai/rag/security-model.md)
