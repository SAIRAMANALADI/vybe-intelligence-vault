---
title: Understanding RAG from Scratch | martinuke0's Blog
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://martinuke0.github.io/posts/2025-12-26-understanding-rag-from-scratch/
published_at: '2026-07-10T13:18:53.177179+05:30'
collected_at: '2026-07-10T13:18:53.177192+05:30'
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
status: active
resource_id: blog:understanding-rag-from-scratch-martinuke0-s-blog
first_seen: '2026-07-10T13:18:53.177192+05:30'
last_seen: '2026-07-10T13:18:53.177192+05:30'
last_checked: '2026-07-10T13:18:53.177192+05:30'
health_score: 100
---

# Understanding RAG from Scratch | martinuke0's Blog

## Summary

- **RAG Pipeline**: Four-step process involving (1) **ingestion & extraction** of raw content (e.g., PDFs, HTML), (2) **chunking** into semantically coherent segments (e.g., 500-token chunks with 50-token overlap), (3) **embedding & indexing** via models (e.g., sentence-transformers, OpenAI embeddings) stored in vector databases (e.g., FAISS, Milvus), and (4) **retrieval-augmentation-generation** where queries are embedded, top-*k* chunks retrieved (via ANN/HNSW), and prompts augmented for LLM generation.

- **Chunking & Embedding Trade-offs**: Chunking strategies (sentence-aware, token-based, semantic) balance context window constraints and semantic coherence, while embedding models (e.g., SBERT, OpenAI) trade dimensionality (768–1536) and compute cost for accuracy, with ANN indexing (HNSW, IVF+PQ) optimizing retrieval speed vs. memory.

- **Query-Time Optimization**: Queries are encoded with the same embedding model, ranked via hybrid methods (BM25 + cosine similarity), reranked with cross-encoders, and filtered (e.g., deduplication), with prompts constructed to include top-*k* chunks and citations, while mitigating challenges like re-indexing (incremental ingestion), vector DB costs (soft deletes, sharding), and hallucinations (post-processing verification).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-10T13:18:53.177179+05:30

## Related Tags

- anthropic
- benchmark
- hackernews
- mistral
- models
- openai
- paper
- rag
- web-crawled

## Source

Original source: https://martinuke0.github.io/posts/2025-12-26-understanding-rag-from-scratch/
