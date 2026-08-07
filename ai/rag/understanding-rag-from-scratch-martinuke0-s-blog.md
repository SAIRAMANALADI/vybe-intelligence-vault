---
title: Understanding RAG from Scratch | martinuke0's Blog
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://martinuke0.github.io/posts/2025-12-26-understanding-rag-from-scratch/
published_at: '2026-08-06T17:07:09.943448+05:30'
collected_at: '2026-08-06T17:07:09.943462+05:30'
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
first_seen: '2026-08-06T17:07:09.943462+05:30'
last_seen: '2026-08-06T17:07:09.943462+05:30'
last_checked: '2026-08-06T17:07:09.943462+05:30'
health_score: 100
---

# Understanding RAG from Scratch | martinuke0's Blog

## Summary

- **RAG Pipeline**: Four-step process—(1) **Ingest & Extract** raw content (HTML, PDF, DBs), (2) **Chunking** into semantically coherent segments (500 tokens, 50-token overlap), (3) **Embedding & Indexing** via models (SBERT/OpenAI) stored in vector DBs (FAISS/Milvus) with ANN indexing (HNSW/IVF+PQ), (4) **Retrieval→Augmentation→Generation** where queries are encoded, top-k chunks retrieved (cosine similarity), reranked (cross-encoders/BM25), and fed to LLM with citations.

- **Chunking & Embedding Trade-offs**: Chunk size impacts retrieval granularity (sentence-aware vs token-based), while embedding dimensionality (768–1536) balances index size vs. accuracy; hybrid retrieval (dense + sparse) improves recall/precision but increases compute.

- **Operational Challenges**: Incremental indexing (event-driven, ID-based upserts) mitigates re-indexing costs; vector DBs require soft deletes/tombstones for scalability; memory footprint is reduced via quantization/ANN compression; hallucinations are curbed via cross-encoder reranking and prompt-injected citation enforcement.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-06T17:07:09.943448+05:30

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
