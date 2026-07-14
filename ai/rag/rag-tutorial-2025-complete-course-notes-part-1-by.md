---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-07-14T19:47:06.681575+05:30'
collected_at: '2026-07-14T19:47:06.681588+05:30'
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
first_seen: '2026-07-14T19:47:06.681588+05:30'
last_seen: '2026-07-14T19:47:06.681588+05:30'
last_checked: '2026-07-14T19:47:06.681588+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with external retrieval systems to fetch relevant context (e.g., documents) dynamically, avoiding context window overload by replacing brute-force prompt injection with targeted retrieval. Key components: **injection pipeline** (chunking + embedding) and **retrieval pipeline** (query embedding + similarity search).

- **Embedding Mechanics**: Text is converted into high-dimensional vectors (e.g., OpenAI’s `text-embedding-3-large` uses 3,072 dimensions) where semantic proximity in vector space reflects semantic similarity (e.g., "cat" and "kitten" embeddings are closer than "elephant"). Embeddings enable efficient similarity search in vector databases (e.g., Pinecone, FAISS).

- **Vector Database Workflow**: During ingestion, documents are chunked (e.g., 1,000 tokens), embedded, and stored. At query time, the user’s input is embedded and compared against stored vectors using similarity metrics (e.g., cosine distance) to retrieve top-*k* relevant chunks, which are then passed to the LLM for answer generation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-14T19:47:06.681575+05:30

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
