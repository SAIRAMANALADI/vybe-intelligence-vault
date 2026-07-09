---
title: Understanding RAG from Scratch | martinuke0's Blog
archive_category: model-providers
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

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 76 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **RAG Pipeline**: Four-step process—(1) **Ingest & Extract** raw text from sources (PDFs, HTML, DBs), (2) **Chunking** into semantically coherent segments (e.g., 500-token chunks with overlap), (3) **Embedding & Indexing** via models (e.g., SBERT, OpenAI embeddings) stored in vector DBs (FAISS, Pinecone) using ANN (HNSW/IVF+PQ), and (4) **Retrieval→Augmentation→Generation** where queries are encoded, top-*k* chunks retrieved (cosine/L2 similarity), reranked (cross-encoders/BM25), and fed into

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://martinuke0.github.io/posts/2025-12-26-understanding-rag-from-scratch/

## Local Vault File

Path: [understanding-rag-from-scratch-martinuke0-s-blog.md](../../ai/rag/understanding-rag-from-scratch-martinuke0-s-blog.md)
