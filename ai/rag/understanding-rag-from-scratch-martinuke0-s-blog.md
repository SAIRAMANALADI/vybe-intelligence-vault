---
title: Understanding RAG from Scratch | martinuke0's Blog
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://martinuke0.github.io/posts/2025-12-26-understanding-rag-from-scratch/
published_at: '2026-08-09T21:22:35.135601+05:30'
collected_at: '2026-08-09T21:22:35.135616+05:30'
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
first_seen: '2026-08-09T21:22:35.135616+05:30'
last_seen: '2026-08-09T21:22:35.135616+05:30'
last_checked: '2026-08-09T21:22:35.135616+05:30'
health_score: 100
---

# Understanding RAG from Scratch | martinuke0's Blog

## Summary

- **RAG Pipeline**: Four-step process—(1) **Ingest & Extract** raw content from diverse sources (HTML, PDFs, databases), (2) **Chunking** into semantically coherent segments (500-token chunks with 50-token overlap), (3) **Embedding & Indexing** using models like `sentence-transformers` or OpenAI embeddings stored in vector DBs (FAISS, Milvus, Pinecone) with ANN indexes (HNSW/IVF+PQ), and (4) **Retrieval→Augmentation→Generation** where queries are encoded, top-*k* chunks retrieved via semantic search (cosine similarity), reranked (cross-encoders/BM25), and fed to LLM with structured prompts.

- **Chunking & Embedding Trade-offs**: Chunk size/overlap balances token limits and semantic coherence; embedding dimensionality (768–1536) trades accuracy vs. index size/compute. Hybrid retrieval (dense + sparse BM25) improves recall/precision, while vector stores optimize for persistence, latency, and multi-tenancy (e.g., FAISS for offline, Pinecone for managed).

- **Operational Challenges**: Mitigate **re-indexing inefficiency** via incremental ingestion (event-driven, change logs) and soft deletes; **cost/latency** of vector DBs via caching, sharding, quantization (PQ), or hybrid search; **memory footprint** via dimensionality reduction (PCA) or smaller embedding models; **hallucinations** via cross-verification (verifier LLMs, source citations) and reranking.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T21:22:35.135601+05:30

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
