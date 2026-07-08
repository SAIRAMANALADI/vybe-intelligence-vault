---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-07-08T09:16:41.473570+05:30'
collected_at: '2026-07-08T09:16:41.473580+05:30'
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
first_seen: '2026-07-08T09:16:41.473580+05:30'
last_seen: '2026-07-08T09:16:41.473580+05:30'
last_checked: '2026-07-08T09:16:41.473580+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with retrieval systems to fetch external data (documents, databases) for contextually accurate responses, avoiding context window overload (e.g., GPT-4.1: 1M tokens, but enterprise data exceeds 1.3 quintillion tokens).

- **Embedding Pipeline**: Chunks source documents (e.g., 10M tokens → 10K chunks of 1K tokens each), converts them into high-dimensional vectors (e.g., OpenAI’s 3,072-dim embeddings) via embedding models, and stores them in vector databases (e.g., Pinecone, Weaviate) for semantic similarity matching.

- **Retrieval & Generation**: User queries are embedded, matched against stored vectors to retrieve top-*k* relevant chunks, and passed to the LLM with the original text for answer synthesis, ensuring efficient and precise responses without exceeding context limits.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-08T09:16:41.473570+05:30

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
