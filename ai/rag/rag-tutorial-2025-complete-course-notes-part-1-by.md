---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-06-30T15:32:54.187143+05:30'
collected_at: '2026-06-30T15:32:54.187158+05:30'
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
first_seen: '2026-06-30T15:32:54.187158+05:30'
last_seen: '2026-06-30T15:32:54.187158+05:30'
last_checked: '2026-06-30T15:32:54.187158+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with external retrieval systems to fetch relevant context from documents/databases, avoiding context window overload; split into **injection pipeline** (data ingestion, chunking, embedding) and **retrieval pipeline** (query embedding, similarity search, LLM generation).

- **Embedding Fundamentals**: Text is converted into high-dimensional vectors (e.g., OpenAI’s `text-embedding-3-large` uses 3,072 dimensions) where semantic similarity is preserved—closer vectors imply related meaning; used for both document chunks and user queries.

- **Vector Databases & Retrieval**: Chunked documents are stored as embeddings in vector DBs (e.g., Pinecone, FAISS); user queries are embedded and matched via similarity search to retrieve top-*k* relevant chunks, which are then passed to the LLM for answer synthesis.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T15:32:54.187143+05:30

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
