---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-07-07T00:46:56.840144+05:30'
collected_at: '2026-07-07T00:46:56.840161+05:30'
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
first_seen: '2026-07-07T00:46:56.840161+05:30'
last_seen: '2026-07-07T00:46:56.840161+05:30'
last_checked: '2026-07-07T00:46:56.840161+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with retrieval systems to fetch relevant external information (e.g., documents, databases) dynamically, addressing context window limitations (e.g., GPT-4.1: 1M tokens, GPT-5: 400K tokens) by injecting only pertinent chunks (e.g., 1K tokens each) into the LLM prompt.

- **Embedding Pipeline**: Text chunks are converted into high-dimensional vector embeddings (e.g., OpenAI’s `text-embedding-3-large`: 3,072 dimensions) using specialized models, enabling semantic similarity search in vector databases (e.g., Pinecone, Weaviate) to retrieve top-*k* relevant chunks for a user query.

- **Two-Part System**: Injection pipeline (chunking + embedding) preprocesses documents into vectorized chunks stored in a vector DB; retrieval pipeline converts user queries into embeddings, performs similarity matching, and augments the LLM’s prompt with retrieved chunks to generate accurate responses.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-07T00:46:56.840144+05:30

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
