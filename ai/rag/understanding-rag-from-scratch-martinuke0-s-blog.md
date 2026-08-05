---
title: Understanding RAG from Scratch | martinuke0's Blog
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://martinuke0.github.io/posts/2025-12-26-understanding-rag-from-scratch/
published_at: '2026-08-05T22:26:36.246575+05:30'
collected_at: '2026-08-05T22:26:36.246591+05:30'
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
first_seen: '2026-08-05T22:26:36.246591+05:30'
last_seen: '2026-08-05T22:26:36.246591+05:30'
last_checked: '2026-08-05T22:26:36.246591+05:30'
health_score: 100
---

# Understanding RAG from Scratch | martinuke0's Blog

## Summary

- **RAG Pipeline**: Four-step process—(1) **Ingest & Extract** raw content (PDFs, HTML, databases), (2) **Chunking** into semantically coherent segments (token-aware or sentence-based), (3) **Embedding & Indexing** via models (e.g., SBERT, OpenAI) stored in vector DBs (FAISS, Pinecone) using ANN (HNSW/IVF+PQ), (4) **Retrieval→Augmentation→Generation** where queries are embedded, top-*k* chunks retrieved (cosine similarity), reranked (cross-encoders/BM25), and fed to LLM with structured prompts.

- **Chunking & Embedding Trade-offs**: Chunk size (500 tokens, 50-token overlap) balances context vs. noise; embedding dimensionality (768–1536) trades memory/latency for accuracy; hybrid retrieval (dense + sparse) improves recall/precision; vector stores optimize for persistence, replication, and query throughput.

- **Operational Challenges**: **Re-indexing** mitigated via incremental ingestion (change logs, event-driven); **Vector DB costs** reduced via caching, sharding, quantization (PQ), or serverless options; **Hallucinations** addressed via cross-encoder reranking, source citations, and factuality checks (verifier LLMs or database queries).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-05T22:26:36.246575+05:30

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
