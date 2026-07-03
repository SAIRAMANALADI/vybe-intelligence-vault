---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-07-04T03:48:34.906877+05:30'
collected_at: '2026-07-04T03:48:34.906890+05:30'
tags:
- agents
- anthropic
- benchmark
- hackernews
- meta-ai
- mistral
- models
- openai
- producthunt
- rag
- web-crawled
- youtube
status: active
resource_id: blog:rag-tutorial-2025-complete-course-notes-part-1-by
first_seen: '2026-07-04T03:48:34.906890+05:30'
last_seen: '2026-07-04T03:48:34.906890+05:30'
last_checked: '2026-07-04T03:48:34.906890+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Divided into two pipelines—**Injection** (data ingestion: chunking + embedding) and **Retrieval** (query embedding + vector DB similarity search)—to mitigate LLM context window limits (e.g., 1M tokens for GPT-4.1 vs. enterprise-scale data like 1PB requiring 1.3 quintillion tokens).

- **Embedding Mechanics**: Text converted to high-dimensional vectors (e.g., OpenAI’s `text-embedding-3-large` outputs 3,072 dimensions) where semantic similarity is quantified via Euclidean/cosine distance in multi-dimensional space; chunks (e.g., 1,000 tokens) are stored in vector DBs (Pinecone, FAISS) for efficient retrieval.

- **Retrieval Pipeline**: User query undergoes identical embedding, then retriever ranks chunks by similarity (e.g., top-5) using algorithms like FAISS; retrieved chunks are passed to LLM for answer generation, bypassing direct vector usage post-retrieval.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T03:48:34.906877+05:30

## Related Tags

- agents
- anthropic
- benchmark
- hackernews
- meta-ai
- mistral
- models
- openai
- producthunt
- rag
- web-crawled
- youtube

## Source

Original source: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
