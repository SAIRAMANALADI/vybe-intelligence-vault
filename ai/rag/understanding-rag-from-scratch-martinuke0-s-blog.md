---
title: Understanding RAG from Scratch | martinuke0's Blog
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://martinuke0.github.io/posts/2025-12-26-understanding-rag-from-scratch/
published_at: '2026-08-06T09:08:53.870657+05:30'
collected_at: '2026-08-06T09:08:53.870672+05:30'
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
first_seen: '2026-08-06T09:08:53.870672+05:30'
last_seen: '2026-08-06T09:08:53.870672+05:30'
last_checked: '2026-08-06T09:08:53.870672+05:30'
health_score: 100
---

# Understanding RAG from Scratch | martinuke0's Blog

## Summary

- **RAG Pipeline**: Four core steps—(1) **Ingest & Extract** (collect and parse raw text from diverse sources like PDFs, HTML, databases), (2) **Chunking** (split text into semantically coherent segments using token-aware or sentence-aware strategies), (3) **Embedding & Storing** (convert chunks to dense vectors via models like `sentence-transformers` or OpenAI embeddings and index in vector stores like FAISS or Milvus using ANN algorithms like HNSW), and (4) **Retrieval → Augmentation → Generation** (encode query, retrieve top-k chunks via similarity search, rerank with cross-encoders or BM25, construct prompt with retrieved context, and generate output with LLM).

- **Indexing & Query Optimization**: Chunking strategies directly impact retrieval quality—token-based chunking (e.g., 500 tokens with 50-token overlap) balances context window constraints and semantic coherence; hybrid search (dense + sparse embeddings) improves recall/precision; vector stores require dimensionality trade-offs (e.g., 768 vs. 1536) and ANN indexing (HNSW, IVF+PQ) for scalable nearest-neighbor search.

- **Operational Challenges**: Mitigate re-indexing inefficiencies via incremental indexing (change logs, event-driven ingestion) and soft deletes; reduce vector DB costs by sharding, quantization, or caching; address memory footprint via dimensionality reduction (PCA, quantization) and efficient storage formats; counter hallucinations by enforcing source citations, post-processing verification, and reranking for relevance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-06T09:08:53.870657+05:30

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
