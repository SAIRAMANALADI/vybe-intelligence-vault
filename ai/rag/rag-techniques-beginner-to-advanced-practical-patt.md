---
title: 'RAG Techniques, Beginner to Advanced: Practical Patterns, Code, and Resources
  | martinuke0''s Blog'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://martinuke0.github.io/posts/2025-12-12-rag-techniques-beginner-to-advanced-practical-patterns-code-and-resources/
published_at: '2026-08-10T19:19:39.826695+05:30'
collected_at: '2026-08-10T19:19:39.826709+05:30'
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
first_seen: '2026-08-10T19:19:39.826709+05:30'
last_seen: '2026-08-10T19:19:39.826709+05:30'
last_checked: '2026-08-10T19:19:39.826709+05:30'
health_score: 100
---

# RAG Techniques, Beginner to Advanced: Practical Patterns, Code, and Resources | martinuke0's Blog

## Summary

- **Minimal RAG Pipeline**: Uses `sentence-transformers` for embeddings, FAISS for vector search, and `transformers` (Flan-T5) for generation; replaceable with any LLM provider (OpenAI, Anthropic, etc.).

- **Core Components**: Retriever (dense/sparse), generator (LLM), embeddings (e.g., `all-MiniLM-L6-v2`), chunking (400–1000 tokens with overlap), reranker (cross-encoder like `monoT5`), and hybrid retrieval (BM25 + embeddings).

- **Indexing & Querying**: Documents indexed via FAISS (inner product for cosine similarity); retrieval involves embedding query, searching index, and prompting LLM with top-*k* passages for grounded generation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T19:19:39.826695+05:30

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
