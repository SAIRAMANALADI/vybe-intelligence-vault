---
title: Security model
archive_category: automation-workflows
source_category: ai/rag
source_url: https://gohugo.io/about/security/
resource_id: blog:security-model
local_vault_path: ai/rag/security-model.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: template
importance: medium
tags:
- rag
- reddit
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Useful for project building
---

# Security model

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: template
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Trust Model**: Hugo distinguishes between trusted (templates, static assets, `layouts`, `archetypes`, `data`, `i18n`, `resources`) and untrusted (content, content adapters in `content`) sources, with exceptions for inline shortcodes.

- **Runtime Security**: Implements a virtual file system, read-only access for user-defined components, controlled external binaries, and no arbitrary command execution; relies on Go modules with `go.sum` for dependency integrity.

- **Web Security**: Follows O

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://gohugo.io/about/security/

## Local Vault File

Path: [security-model.md](../../ai/rag/security-model.md)
