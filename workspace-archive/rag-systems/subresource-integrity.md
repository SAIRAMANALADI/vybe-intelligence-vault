---
title: Subresource Integrity
archive_category: rag-systems
source_category: ai/rag
source_url: https://w3c.github.io/webappsec/specs/subresourceintegrity/#integrity-metadata
resource_id: blog:subresource-integrity
local_vault_path: ai/rag/subresource-integrity.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- hackernews
- rag
- reddit
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Subresource Integrity

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Integrity Verification Mechanism**: Defines an `integrity` attribute for HTML elements (`script`, `link`) and the `fetch()` API to validate fetched resources using cryptographic hashes (SHA-256/384/512), ensuring delivered content matches expected representations before execution/rendering.

- **Eligibility & Security Constraints**: Integrity checks are restricted to same-origin responses or CORS-enabled cross-origin requests; file:// URIs and non-secure contexts (HTTP) are excluded to preve

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://w3c.github.io/webappsec/specs/subresourceintegrity/#integrity-metadata

## Local Vault File

Path: [subresource-integrity.md](../../ai/rag/subresource-integrity.md)
