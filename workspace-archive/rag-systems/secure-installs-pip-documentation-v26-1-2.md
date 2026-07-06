---
title: Secure installs - pip documentation v26.1.2
archive_category: rag-systems
source_category: ai/rag
source_url: https://pip.pypa.io/en/stable/topics/secure-installs/#hash-checking-mode
resource_id: blog:secure-installs-pip-documentation-v26-1-2
local_vault_path: ai/rag/secure-installs-pip-documentation-v26-1-2.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Secure installs - pip documentation v26.1.2

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Hash-checking Mode**: Enabled via `--require-hashes` to enforce SHA256 (or stronger) hashes for all requirements in `requirements.txt`, preventing remote tampering and ensuring dependency integrity. Requires pinned versions (`==`) and hashes for all direct and transitive dependencies.
- **Binary-Only Installs**: Use `--only-binary :all:` to disallow source distributions, reducing attack surface by avoiding compilation and arbitrary code execution during installation.
- **Secure Project Insta

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://pip.pypa.io/en/stable/topics/secure-installs/#hash-checking-mode

## Local Vault File

Path: [secure-installs-pip-documentation-v26-1-2.md](../../ai/rag/secure-installs-pip-documentation-v26-1-2.md)
