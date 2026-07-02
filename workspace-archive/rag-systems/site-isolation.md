---
title: Site Isolation
archive_category: rag-systems
source_category: ai/rag
source_url: https://www.chromium.org/Home/chromium-security/site-isolation/
resource_id: blog:site-isolation
local_vault_path: ai/rag/site-isolation.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- paper
- rag
- reddit
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Site Isolation

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Process Isolation**: Site Isolation enforces cross-site documents (including iframes) to run in separate sandboxed processes, mitigating attacks like UXSS and Spectre by preventing cross-site data leakage even if renderer processes are compromised.

- **Cross-Origin Data Blocking**: Implements Cross-Origin Read Blocking (CORB) to restrict delivery of cross-site resources (HTML, XML, JSON, PDF) unless explicitly permitted via CORS, reducing exposure to sensitive data.

- **Platform-Specific D

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://www.chromium.org/Home/chromium-security/site-isolation/

## Local Vault File

Path: [site-isolation.md](../../ai/rag/site-isolation.md)
