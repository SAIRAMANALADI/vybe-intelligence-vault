---
title: Build RAG with Milvus | Milvus Documentation
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://milvus.io/docs/build-rag-with-milvus.md
resource_id: blog:build-rag-with-milvus-milvus-documentation
local_vault_path: ai/rag/build-rag-with-milvus-milvus-documentation.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- anthropic
- openai
- rag
- reddit
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Build RAG with Milvus | Milvus Documentation

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Milvus RAG Pipeline**: Combines Milvus vector search with OpenAI's LLM to generate responses from retrieved documents, using semantic search to find relevant context before LLM processing.

- **Milvus Collection Setup**: Creates a vector collection with `text-embedding-3-small` embeddings (1536-dim), using inner product (`IP`) metric and `Bounded` consistency for efficient retrieval of top-3 matches.

- **Dynamic Schema Handling**: Automatically stores non-schema fields (e.g., `text`) in Mil

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://milvus.io/docs/build-rag-with-milvus.md

## Local Vault File

Path: [build-rag-with-milvus-milvus-documentation.md](../../ai/rag/build-rag-with-milvus-milvus-documentation.md)
