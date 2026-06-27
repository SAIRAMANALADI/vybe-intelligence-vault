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

- **Trust Boundaries**: Hugo distinguishes between trusted (e.g., `layouts`, `static`, `data`) and untrusted (e.g., `content`, content adapters) directories; inline shortcodes require explicit trust of embedded logic.
- **Runtime Protections**: Uses a virtual, read-only filesystem, restricts external binaries, and avoids arbitrary command execution; default security policy balances usability with safety but may tighten in future releases.
- **Dependency & Output Security**: Enforces checksum val

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://gohugo.io/about/security/

## Local Vault File

Path: [security-model.md](../../ai/rag/security-model.md)
