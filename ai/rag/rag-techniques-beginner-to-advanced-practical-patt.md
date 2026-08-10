---
title: 'RAG Techniques, Beginner to Advanced: Practical Patterns, Code, and Resources
  | martinuke0''s Blog'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://martinuke0.github.io/posts/2025-12-12-rag-techniques-beginner-to-advanced-practical-patterns-code-and-resources/
published_at: '2026-08-10T16:13:01.640476+05:30'
collected_at: '2026-08-10T16:13:01.640492+05:30'
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
first_seen: '2026-08-10T16:13:01.640492+05:30'
last_seen: '2026-08-10T16:13:01.640492+05:30'
last_checked: '2026-08-10T16:13:01.640492+05:30'
health_score: 100
---

# RAG Techniques, Beginner to Advanced: Practical Patterns, Code, and Resources | martinuke0's Blog

## Summary

- **Core RAG Architecture**: Combines dense (embedding-based) and sparse (BM25/TF-IDF) retrieval with a generator LLM; uses FAISS/Chroma for vector search and cross-encoders (e.g., monoT5) for reranking to optimize precision/recall.

- **Minimal Pipeline Implementation**: Indexes documents via `SentenceTransformer` embeddings stored in FAISS, retrieves top-*k* chunks via vector similarity, and generates answers using Flan-T5 with prompt templates for citation grounding.

- **Advanced Enhancements**: Implements hybrid retrieval (dense + sparse), query expansion (HyDE/multi-query), multi-hop decomposition, GraphRAG (knowledge graphs), and context compression to improve factuality, reduce latency, and enable agentic tool use.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T16:13:01.640476+05:30

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
