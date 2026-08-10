---
title: 'RAG Techniques, Beginner to Advanced: Practical Patterns, Code, and Resources
  | martinuke0''s Blog'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://martinuke0.github.io/posts/2025-12-12-rag-techniques-beginner-to-advanced-practical-patterns-code-and-resources/
published_at: '2026-08-10T13:40:31.836371+05:30'
collected_at: '2026-08-10T13:40:31.836382+05:30'
tags:
- agents
- anthropic
- benchmark
- frontend_ui
- hackernews
- meta-ai
- models
- openai
- paper
- rag
- reddit
- web-crawled
status: active
resource_id: blog:rag-techniques-beginner-to-advanced-practical-patt
first_seen: '2026-08-10T13:40:31.836382+05:30'
last_seen: '2026-08-10T13:40:31.836382+05:30'
last_checked: '2026-08-10T13:40:31.836382+05:30'
health_score: 100
---

# RAG Techniques, Beginner to Advanced: Practical Patterns, Code, and Resources | martinuke0's Blog

## Summary

- **RAG Pipeline Core**: Combines a retriever (dense embeddings + vector search or sparse BM25/TF-IDF) with an LLM generator to ground responses in retrieved context, reducing hallucinations and enabling dynamic knowledge updates.

- **Minimal Implementation**: Uses `sentence-transformers` for embeddings, FAISS for vector search, and Flan-T5 for generation; documents are chunked, embedded, and indexed for retrieval, with retrieval results passed to the LLM for answer synthesis.

- **Intermediate Enhancements**: Techniques include chunking with overlap, hybrid retrieval (dense + sparse), reranking with cross-encoders (e.g., monoT5), query expansion (HyDE, multi-query), metadata filtering, and evaluation/observability for optimizing precision, recall, and latency.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T13:40:31.836371+05:30

## Related Tags

- agents
- anthropic
- benchmark
- frontend_ui
- hackernews
- meta-ai
- models
- openai
- paper
- rag
- reddit
- web-crawled

## Source

Original source: https://martinuke0.github.io/posts/2025-12-12-rag-techniques-beginner-to-advanced-practical-patterns-code-and-resources/
