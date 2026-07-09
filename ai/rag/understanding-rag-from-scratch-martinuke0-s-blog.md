---
title: Understanding RAG from Scratch | martinuke0's Blog
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://martinuke0.github.io/posts/2025-12-26-understanding-rag-from-scratch/
published_at: '2026-07-10T04:16:21.371614+05:30'
collected_at: '2026-07-10T04:16:21.371644+05:30'
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
first_seen: '2026-07-10T04:16:21.371644+05:30'
last_seen: '2026-07-10T04:16:21.371644+05:30'
last_checked: '2026-07-10T04:16:21.371644+05:30'
health_score: 100
---

# Understanding RAG from Scratch | martinuke0's Blog

## Summary

- **RAG Pipeline**: Four-step process—(1) **Ingest & Extract** raw text from sources (PDFs, HTML, DBs), (2) **Chunking** into semantically coherent segments (e.g., 500-token chunks with overlap), (3) **Embedding & Indexing** via models (e.g., SBERT, OpenAI embeddings) stored in vector DBs (FAISS, Pinecone) using ANN (HNSW/IVF+PQ), and (4) **Retrieval→Augmentation→Generation** where queries are encoded, top-*k* chunks retrieved (cosine/L2 similarity), reranked (cross-encoders/BM25), and fed into LLMs with structured prompts.

- **Chunking & Embedding Trade-offs**: Chunk size/overlap balances context window vs. semantic coherence; embedding dimensionality (768–1536) trades accuracy vs. index size/latency; hybrid retrieval (sparse BM25 + dense embeddings) improves recall/precision; vector stores optimize for persistence, replication, and query throughput (exact vs. ANN indexing).

- **Operational Challenges**: **Re-indexing** mitigated via incremental ingestion (change logs, event-driven triggers); **cost/latency** reduced via soft deletes, tombstones, and upserts; **memory footprint** minimized via quantization/dimensionality reduction; **hallucinations** addressed via citation enforcement, post-processing verifiers, and hybrid search for grounding.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-10T04:16:21.371614+05:30

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
