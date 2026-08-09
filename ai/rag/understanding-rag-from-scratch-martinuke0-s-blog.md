---
title: Understanding RAG from Scratch | martinuke0's Blog
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://martinuke0.github.io/posts/2025-12-26-understanding-rag-from-scratch/
published_at: '2026-08-09T18:51:37.027203+05:30'
collected_at: '2026-08-09T18:51:37.027211+05:30'
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
first_seen: '2026-08-09T18:51:37.027211+05:30'
last_seen: '2026-08-09T18:51:37.027211+05:30'
last_checked: '2026-08-09T18:51:37.027211+05:30'
health_score: 100
---

# Understanding RAG from Scratch | martinuke0's Blog

## Summary

- **RAG Pipeline**: Four-step process—(1) **Ingest & Extract** raw text from sources (PDFs, HTML, DBs), preserving metadata; (2) **Chunking** into semantically coherent segments (token-aware, sentence-aware, or semantic boundaries); (3) **Embedding & Indexing** via models (e.g., SBERT, OpenAI) stored in vector DBs (FAISS, Pinecone) with ANN indexes (HNSW, IVF+PQ); (4) **Retrieval → Augmentation → Generation** where queries are encoded, top-*k* chunks retrieved (cosine/L2 similarity), reranked (cross-encoders/BM25), and fed to LLM with structured prompts.

- **Chunking & Embedding Trade-offs**: Chunk size (500 tokens, 50-token overlap) balances context fidelity and retrieval granularity; embedding dimensionality (768–1536) trades memory/latency for accuracy; hybrid search (dense + sparse) improves recall; vector stores optimize for persistence, replication, and ANN latency.

- **Operational Challenges**: Incremental indexing (event-driven, soft deletes) mitigates re-indexing overhead; vector DB costs addressed via caching, sharding, or quantization; memory footprint reduced via dimensionality reduction (PCA, PQ) or smaller embeddings; hallucinations mitigated via source citation enforcement, post-processing verification, and reranking.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T18:51:37.027203+05:30

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
