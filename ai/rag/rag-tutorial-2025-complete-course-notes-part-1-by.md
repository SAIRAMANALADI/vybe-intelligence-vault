---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-07-04T09:33:18.950262+05:30'
collected_at: '2026-07-04T09:33:18.950278+05:30'
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
- workflows
- youtube
status: active
resource_id: blog:rag-tutorial-2025-complete-course-notes-part-1-by
first_seen: '2026-07-04T09:33:18.950278+05:30'
last_seen: '2026-07-04T09:33:18.950278+05:30'
last_checked: '2026-07-04T09:33:18.950278+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: RAG combines LLMs with retrieval systems to enhance responses using external data (documents, databases) while avoiding context window overload; splits into **injection pipeline** (data ingestion: chunking, embedding) and **retrieval pipeline** (query embedding, similarity search, LLM augmentation).

- **Embeddings & Vector Databases**: Text is converted into high-dimensional vectors (e.g., OpenAI’s 3,072-dim embeddings) via embedding models; semantic similarity enables retrieval of relevant chunks. Vector databases (Pinecone, Weaviate, FAISS) store and index these embeddings for efficient similarity search.

- **Chunking & Retrieval Workflow**: Documents are split into fixed-token chunks (e.g., 1,000 tokens), embedded, and stored. User queries are embedded and matched against stored vectors using similarity metrics (e.g., cosine distance) to retrieve top-*k* relevant chunks, which are then passed to the LLM for answer generation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T09:33:18.950262+05:30

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
- workflows
- youtube

## Source

Original source: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
