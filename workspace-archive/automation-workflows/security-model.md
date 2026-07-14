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

- **Trust Model**: Hugo distinguishes between trusted (templates, assets) and untrusted (content, content adapters) sources, with exceptions for inline shortcodes; the `hugo server` is trusted but restricted to local development.
- **Runtime Security**: Hugo employs a virtual file system, read-only access for user-defined components, controlled external binaries, and a strict security policy with default protections to minimize vulnerabilities during the build process.
- **Dependency & Output Se

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://gohugo.io/about/security/

## Local Vault File

Path: [security-model.md](../../ai/rag/security-model.md)
