---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-06-29T21:43:19.317705+05:30'
collected_at: '2026-06-29T21:43:19.317720+05:30'
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
first_seen: '2026-06-29T21:43:19.317720+05:30'
last_seen: '2026-06-29T21:43:19.317720+05:30'
last_checked: '2026-06-29T21:43:19.317720+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with retrieval systems to fetch relevant external data (documents, databases) for answering queries, avoiding context window overload by injecting only pertinent chunks into the LLM.

- **Embedding Pipeline**: Chunks source documents (e.g., 10M tokens → 10K chunks of 1K tokens each) and converts them into high-dimensional vector embeddings (e.g., OpenAI’s 3,072-dim vectors) using specialized models, stored in vector databases (e.g., Pinecone, FAISS) for semantic similarity matching.

- **Retrieval & Generation**: User queries are embedded and matched against stored vectors to retrieve top-*k* relevant chunks, which are then fed to the LLM alongside the query to generate a precise answer, decoupling retrieval (vector similarity) from generation (LLM processing).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T21:43:19.317705+05:30

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
