---
title: Understanding RAG from Scratch | martinuke0's Blog
archive_category: vector-databases
source_category: ai/rag
source_url: https://martinuke0.github.io/posts/2025-12-26-understanding-rag-from-scratch/
resource_id: blog:understanding-rag-from-scratch-martinuke0-s-blog
local_vault_path: ai/rag/understanding-rag-from-scratch-martinuke0-s-blog.md
quality_score: 70
archive_score: 76
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- anthropic
- benchmark
- hackernews
- mistral
- models
- openai
- paper
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Understanding RAG from Scratch | martinuke0's Blog

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 76 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **RAG Pipeline**: Four-step process involving (1) **ingestion & extraction** of raw content (e.g., PDFs, HTML), (2) **chunking** into semantically coherent segments (e.g., 500-token chunks with 50-token overlap), (3) **embedding & indexing** via models (e.g., sentence-transformers, OpenAI embeddings) stored in vector databases (e.g., FAISS, Milvus), and (4) **retrieval-augmentation-generation** where queries are embedded, top-*k* chunks retrieved (via ANN/HNSW), and prompts augmented for LLM g

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://martinuke0.github.io/posts/2025-12-26-understanding-rag-from-scratch/

## Local Vault File

Path: [understanding-rag-from-scratch-martinuke0-s-blog.md](../../ai/rag/understanding-rag-from-scratch-martinuke0-s-blog.md)
