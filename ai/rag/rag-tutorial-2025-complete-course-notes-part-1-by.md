---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-07-03T03:51:05.339192+05:30'
collected_at: '2026-07-03T03:51:05.339203+05:30'
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
first_seen: '2026-07-03T03:51:05.339203+05:30'
last_seen: '2026-07-03T03:51:05.339203+05:30'
last_checked: '2026-07-03T03:51:05.339203+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with retrieval systems to fetch external information (documents, databases) dynamically, avoiding context window overload; divided into **Injection Pipeline** (data ingestion, chunking, embedding) and **Retrieval Pipeline** (query embedding, similarity search, answer generation).

- **Embedding Fundamentals**: Converts text chunks into high-dimensional vectors (e.g., OpenAI’s `text-embedding-3-large` uses 3,072 dimensions) where semantic similarity is preserved—closer vectors indicate related content; used for efficient retrieval via vector databases (Pinecone, Weaviate, FAISS).

- **Chunking & Retrieval Workflow**: Documents are split into fixed-token chunks (e.g., 1,000 tokens), embedded, and stored; user queries are embedded and matched against stored vectors using similarity metrics (e.g., cosine distance) to retrieve top-*k* relevant chunks, which are then passed to the LLM for contextual answer synthesis.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T03:51:05.339192+05:30

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
