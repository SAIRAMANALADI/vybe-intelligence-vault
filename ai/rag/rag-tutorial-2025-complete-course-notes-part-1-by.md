---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-07-07T04:10:09.119712+05:30'
collected_at: '2026-07-07T04:10:09.119722+05:30'
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
first_seen: '2026-07-07T04:10:09.119722+05:30'
last_seen: '2026-07-07T04:10:09.119722+05:30'
last_checked: '2026-07-07T04:10:09.119722+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with retrieval systems to fetch relevant external data (e.g., documents, databases) for context, avoiding prompt overload by limiting input to the LLM's context window (e.g., 1M tokens for GPT-4.1 vs. enterprise-scale data in petabytes).

- **Embedding Pipeline**: Documents are chunked (e.g., 1,000 tokens per chunk), converted into high-dimensional vector embeddings (e.g., OpenAI's 3,072-dim "text-embedding-3-large"), and stored in vector databases (e.g., Pinecone, FAISS) for semantic similarity matching.

- **Retrieval & Generation**: User queries are embedded and matched against stored vectors to retrieve top-*k* relevant chunks (e.g., via cosine similarity), which are then fed to the LLM for answer synthesis, decoupling retrieval (vector operations) from generation (LLM inference).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-07T04:10:09.119712+05:30

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
