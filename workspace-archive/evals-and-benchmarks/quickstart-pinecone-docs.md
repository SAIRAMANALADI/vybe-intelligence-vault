---
title: Quickstart - Pinecone Docs
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://docs.pinecone.io/guides/get-started/quickstart
resource_id: blog:quickstart-pinecone-docs
local_vault_path: ai/rag/quickstart-pinecone-docs.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- agents
- anthropic
- hackernews
- meta-ai
- models
- openai
- rag
- reddit
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Useful for project building
---

# Quickstart - Pinecone Docs

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Index Creation**: Use `create_index_for_model` (e.g., `llama-text-embed-v2`) with cloud/region parameters to initialize a serverless Pinecone index with integrated embedding.

- **Data Ingestion**: Upsert records via `upsert_records` (SDK v9+) with `_id` and `content` fields (mapped via `field_map`) into a namespace for vector storage and retrieval.

- **Search & Reranking**: Execute `search` with `inputs.text` for query embedding, then apply reranking (`bge-reranker-v2-m3`) to refine top_k

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://docs.pinecone.io/guides/get-started/quickstart

## Local Vault File

Path: [quickstart-pinecone-docs.md](../../ai/rag/quickstart-pinecone-docs.md)
