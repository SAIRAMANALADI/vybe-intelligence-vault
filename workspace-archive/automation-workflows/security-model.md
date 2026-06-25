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
resource_kind: tutorial
importance: medium
tags:
- rag
- reddit
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Security model

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Trust Boundaries**: Hugo distinguishes between trusted (e.g., `layouts`, `static`) and untrusted (e.g., `content`, content adapters) sources, with inline shortcodes requiring explicit trust. The `hugo server` is restricted to local development.

- **Runtime Security**: Hugo enforces sandboxing via a virtual file system, read-only access for user-defined components, and strict control over external binaries (e.g., Asciidoctor). Arbitrary OS command execution is disabled by design.

- **Depend

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://gohugo.io/about/security/

## Local Vault File

Path: [security-model.md](../../ai/rag/security-model.md)
