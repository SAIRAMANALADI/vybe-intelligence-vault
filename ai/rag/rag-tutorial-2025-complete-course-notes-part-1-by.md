---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-07-04T21:47:55.054693+05:30'
collected_at: '2026-07-04T21:47:55.054706+05:30'
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
first_seen: '2026-07-04T21:47:55.054706+05:30'
last_seen: '2026-07-04T21:47:55.054706+05:30'
last_checked: '2026-07-04T21:47:55.054706+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: RAG combines LLMs with retrieval systems to fetch external information (documents, databases) dynamically, addressing LLM context window limitations (e.g., GPT-4.1: 1M tokens, GPT-5: 400K tokens) while avoiding prompt overload. The system splits into two pipelines: **Injection** (data ingestion/chunking → embedding → vector DB storage) and **Retrieval** (user query → embedding → similarity search → top-*k* chunks → LLM generation).

- **Embedding Mechanics**: Embedding models (e.g., OpenAI’s `text-embedding-3-large` with 3,072 dimensions) convert text chunks/queries into high-dimensional vectors where semantic similarity is preserved (e.g., "cat" `[34, 8, 7.5]` vs. "kitten" `[33, 8, 7.2]`). Vector databases (Pinecone, Weaviate, FAISS) store these embeddings for efficient similarity search via algorithms like cosine similarity.

- **Chunking & Retrieval Pipeline**: Documents are split into fixed-token chunks (e.g., 1,000 tokens) to balance granularity and context. Retrieval uses the query’s vector to fetch top-*k* semantically relevant chunks from the vector DB, which are then passed to the LLM for answer synthesis. Hybrid search (combining keyword/vector retrieval) and rerankers (e.g., reciprocal rank fusion) are advanced techniques to improve precision.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T21:47:55.054693+05:30

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
