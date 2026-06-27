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
resource_kind: tutorial
importance: medium
tags:
- rag
- reddit
- web-crawled
- workflows
selection_reason:
- Valuable developer reference
---

# Security model

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Trust Model**: Hugo distinguishes between trusted (e.g., `layouts`, `static`, `data`) and untrusted (e.g., `content`, content adapters) sources, with exceptions for inline shortcodes. The `hugo server` is restricted to local development only.

- **Runtime Security**: Uses a virtual file system, read-only access for user-defined components, and strict sandboxing to prevent arbitrary OS command execution. External binaries (e.g., Asciidoctor) are predefined and disabled by default.

- **Depend

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://gohugo.io/about/security/

## Local Vault File

Path: [security-model.md](../../ai/rag/security-model.md)
