---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-07-07T15:33:27.099071+05:30'
collected_at: '2026-07-07T15:33:27.099083+05:30'
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
first_seen: '2026-07-07T15:33:27.099083+05:30'
last_seen: '2026-07-07T15:33:27.099083+05:30'
last_checked: '2026-07-07T15:33:27.099083+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with retrieval systems to fetch external context (e.g., documents) for improved answers, avoiding context window overload; splits into **Injection Pipeline** (data ingestion/chunking/embedding) and **Retrieval Pipeline** (query embedding + similarity search).

- **Embedding Fundamentals**: Converts text chunks into high-dimensional vectors (e.g., OpenAI’s `text-embedding-3-large` uses 3,072 dimensions) where semantic similarity is measured via vector proximity; vector databases (e.g., Pinecone, FAISS) store and retrieve these embeddings for query matching.

- **Chunking & Retrieval Workflow**: Documents are split into fixed-token chunks (e.g., 1,000 tokens), embedded, and stored; user queries are embedded and matched against stored vectors to retrieve top-*k* relevant chunks, which are then passed to the LLM for answer generation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-07T15:33:27.099071+05:30

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
