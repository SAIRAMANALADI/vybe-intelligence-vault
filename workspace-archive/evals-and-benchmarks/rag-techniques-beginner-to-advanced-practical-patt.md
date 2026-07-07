---
title: 'RAG Techniques, Beginner to Advanced: Practical Patterns, Code, and Resources
  | martinuke0''s Blog'
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://martinuke0.github.io/posts/2025-12-12-rag-techniques-beginner-to-advanced-practical-patterns-code-and-resources/
resource_id: blog:rag-techniques-beginner-to-advanced-practical-patt
local_vault_path: ai/rag/rag-techniques-beginner-to-advanced-practical-patt.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: benchmark
importance: medium
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
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# RAG Techniques, Beginner to Advanced: Practical Patterns, Code, and Resources | martinuke0's Blog

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Minimal RAG Pipeline**: Uses `sentence-transformers` for embeddings, FAISS for vector search, and `transformers` (e.g., Flan-T5) for generation; supports dense retrieval with optional sparse (BM25) via `rank-bm25`.

- **Core RAG Components**: Retriever (dense/sparse), generator (LLM), embeddings (e.g., `all-MiniLM-L6-v2`), chunking (400–1000 tokens with overlap), reranking (e.g., `monoT5`), and hybrid retrieval (sparse + dense).

- **Advanced Techniques**: Multi-hop retrieval, GraphRAG (know

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://martinuke0.github.io/posts/2025-12-12-rag-techniques-beginner-to-advanced-practical-patterns-code-and-resources/

## Local Vault File

Path: [rag-techniques-beginner-to-advanced-practical-patt.md](../../ai/rag/rag-techniques-beginner-to-advanced-practical-patt.md)
