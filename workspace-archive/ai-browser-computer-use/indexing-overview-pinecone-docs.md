---
title: Indexing overview - Pinecone Docs
archive_category: ai-browser-computer-use
source_category: ai/rag
source_url: https://docs.pinecone.io/docs/namespaces
resource_id: blog:indexing-overview-pinecone-docs
local_vault_path: ai/rag/indexing-overview-pinecone-docs.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- dataset
- models
- rag
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Indexing overview - Pinecone Docs

## Why This Is In The Archive

- Matched archive category: `AI Browser and Computer Use`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- Pinecone indexes store data as documents (schema-based) or records (vector-based), supporting dense/sparse vectors, full-text search (BM25/Lucene), and metadata filtering without explicit schema declaration.
- Namespaces partition records within an index for multitenancy and query efficiency, with implicit creation during upsert and plan-dependent scalability limits.
- Metadata supports flat JSON key-value pairs (40KB max per record), with strict type constraints (no nested objects, nulls, or

## Use Cases

- Browser web automation
- GUI action orchestration
- Agent computer control

## Source

Original source URL: https://docs.pinecone.io/docs/namespaces

## Local Vault File

Path: [indexing-overview-pinecone-docs.md](../../ai/rag/indexing-overview-pinecone-docs.md)
