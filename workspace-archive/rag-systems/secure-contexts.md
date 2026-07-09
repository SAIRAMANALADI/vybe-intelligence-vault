---
title: Secure Contexts
archive_category: rag-systems
source_category: ai/rag
source_url: https://w3c.github.io/webappsec-secure-contexts/
resource_id: blog:secure-contexts
local_vault_path: ai/rag/secure-contexts.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- rag
- reddit
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Secure Contexts

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Secure Context Definition**: A secure context requires delivery over authenticated, encrypted channels (e.g., HTTPS/WSS) or specific trustworthy origins (e.g., `localhost`, `file://`), ensuring confidentiality and integrity for sensitive operations.

- **Ancestral Risk Mitigation**: Features exposed in secure contexts (e.g., via `[SecureContext]` WebIDL attribute) are restricted if embedded in non-secure ancestor contexts (e.g., HTTP frames), preventing privilege escalation through cooperati

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://w3c.github.io/webappsec-secure-contexts/

## Local Vault File

Path: [secure-contexts.md](../../ai/rag/secure-contexts.md)
