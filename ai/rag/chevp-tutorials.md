---
title: tutorials/docs/data-science-and-analytics/RAG_Tutorial.md at main · chevp/tutorials
  · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/chevp/tutorials/tree/main/docs/data-science-and-analytics/RAG_Tutorial.md
published_at: '2026-09-04T00:57:46.796555+05:30'
collected_at: '2026-09-04T00:57:46.796568+05:30'
tags:
- agents
- benchmark
- hackernews
- models
- openai
- rag
- web-crawled
status: active
resource_id: github:chevp/tutorials
first_seen: '2026-09-04T00:57:46.796568+05:30'
last_seen: '2026-09-04T00:57:46.796568+05:30'
last_checked: '2026-09-04T00:57:46.796568+05:30'
health_score: 100
---

# tutorials/docs/data-science-and-analytics/RAG_Tutorial.md at main · chevp/tutorials · GitHub

## Summary

- **RAG Pipeline**: Two-phase process combining retrieval (vector similarity search in embeddings) and generation (LLM response conditioned on retrieved context), addressing hallucinations, outdated knowledge, and domain specificity.

- **Core Components**: Document loader → text splitter (e.g., recursive chunking with 300-token chunks, 20-token overlap) → embedding model (e.g., OpenAI `text-embedding-ada-002`) → vector store (in-memory or external) → retriever (top-k similarity search with minScore threshold) → LLM (e.g., `gpt-3.5-turbo` with augmented prompt).

- **Advanced Techniques**: Hybrid search (BM25 + vector similarity), metadata filtering (e.g., category/department-based retrieval), query rewriting (LLM-generated alternative queries), and conversational memory (e.g., sliding-window chat memory) to enhance relevance and coherence.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-04T00:57:46.796555+05:30

## Related Tags

- agents
- benchmark
- hackernews
- models
- openai
- rag
- web-crawled

## Source

Original source: https://github.com/chevp/tutorials/tree/main/docs/data-science-and-analytics/RAG_Tutorial.md
