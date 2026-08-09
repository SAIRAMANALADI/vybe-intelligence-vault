---
title: 'RAG Techniques, Beginner to Advanced: Practical Patterns, Code, and Resources
  | martinuke0''s Blog'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://martinuke0.github.io/posts/2025-12-12-rag-techniques-beginner-to-advanced-practical-patterns-code-and-resources/
published_at: '2026-08-10T03:23:46.302113+05:30'
collected_at: '2026-08-10T03:23:46.302127+05:30'
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
first_seen: '2026-08-10T03:23:46.302127+05:30'
last_seen: '2026-08-10T03:23:46.302127+05:30'
last_checked: '2026-08-10T03:23:46.302127+05:30'
health_score: 100
---

# RAG Techniques, Beginner to Advanced: Practical Patterns, Code, and Resources | martinuke0's Blog

## Summary

- **Minimal RAG Pipeline**: Uses `sentence-transformers` (all-MiniLM-L6-v2) for embeddings, FAISS (IndexFlatIP) for vector search, and Flan-T5-small for generation; documents indexed with normalized embeddings and stored in FAISS index and pickle file.

- **Hybrid Retrieval Techniques**: Combines sparse (BM25) and dense (FAISS) retrieval for improved precision/recall; includes reranking with cross-encoders (e.g., monoT5, bge-reranker) and query expansion methods (HyDE, multi-query) to enhance retrieval quality.

- **Advanced RAG Patterns**: Implements multi-hop retrieval, GraphRAG (knowledge graphs), multi-vector/learned retrievers, context optimization (e.g., compression), agentic RAG (tool integration), and safety/grounding mechanisms for production-grade systems.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T03:23:46.302113+05:30

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
