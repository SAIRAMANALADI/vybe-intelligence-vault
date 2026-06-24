---
title: 2.3 to 2.4 | Dovecot CE
archive_category: vector-databases
source_category: ai/rag
source_url: https://doc.dovecot.org/latest/installation/upgrade/2.3-to-2.4.html
resource_id: blog:2-3-to-2-4-dovecot-ce
local_vault_path: ai/rag/2-3-to-2-4-dovecot-ce.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- reddit
- web-crawled
selection_reason:
- Valuable developer reference
---

# 2.3 to 2.4 | Dovecot CE

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Mandatory Configuration Updates**: `dovecot.conf` must now include `dovecot_config_version` and `dovecot_storage_version` as the first settings; old v2.3 hierarchical configs are incompatible and must be converted using the provided tool.

- **Syntax and Variable Changes**: Plugin settings are now global (no `plugin {}` block), variable expansion requires `$SET:` prefix (e.g., `$SET:default_internal_user`), and `%{variables}` syntax is replaced with new filters (e.g., `%{user | domain}` for

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://doc.dovecot.org/latest/installation/upgrade/2.3-to-2.4.html

## Local Vault File

Path: [2-3-to-2-4-dovecot-ce.md](../../ai/rag/2-3-to-2-4-dovecot-ce.md)
