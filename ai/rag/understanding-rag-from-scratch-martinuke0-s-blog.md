---
title: Understanding RAG from Scratch | martinuke0's Blog
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://martinuke0.github.io/posts/2025-12-26-understanding-rag-from-scratch/
published_at: '2026-06-27T04:07:59.576729+05:30'
collected_at: '2026-06-27T04:07:59.576739+05:30'
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
first_seen: '2026-06-27T04:07:59.576739+05:30'
last_seen: '2026-06-27T04:07:59.576739+05:30'
last_checked: '2026-06-27T04:07:59.576739+05:30'
health_score: 100
---

# Understanding RAG from Scratch | martinuke0's Blog

## Summary

- **RAG Pipeline**: Four core steps—(1) **Ingest & Extract** (collect and parse raw text from sources like PDFs, HTML, or databases), (2) **Chunking** (split text into semantically coherent segments, typically 200–500 tokens with overlap), (3) **Embedding & Storing** (convert chunks to dense vectors using models like `sentence-transformers` or OpenAI embeddings and store in vector DBs like FAISS or Pinecone), and (4) **Retrieval → Augmentation → Generation** (encode query, retrieve top-*k* chunks via ANN search, rerank with cross-encoders, construct prompt, and generate answer with LLM).

- **Chunking & Embedding Trade-offs**: Chunk size impacts retrieval granularity (too large wastes context; too small loses coherence), while embedding dimensionality (e.g., 768 vs. 1536) balances index size, compute cost, and retrieval accuracy; hybrid search (BM25 + dense embeddings) improves precision/recall.

- **Operational Challenges**: Incremental indexing (via change logs or event-driven triggers) mitigates re-indexing overhead; vector DB costs are reduced via soft deletes, tombstones, or sharding; memory footprint is managed via quantization (e.g., PQ) or dimensionality reduction; hallucinations are mitigated by reranking, source citations, and factuality checks.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T04:07:59.576729+05:30

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
