---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-07-13T09:35:27.838090+05:30'
collected_at: '2026-07-13T09:35:27.838104+05:30'
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
first_seen: '2026-07-13T09:35:27.838104+05:30'
last_seen: '2026-07-13T09:35:27.838104+05:30'
last_checked: '2026-07-13T09:35:27.838104+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: RAG combines LLMs with retrieval systems to fetch relevant external information (e.g., documents, databases) dynamically, addressing context window limitations (e.g., GPT-4.1: 1M tokens, GPT-5: 400K tokens) and avoiding prompt overload by injecting only pertinent chunks into the LLM.

- **Vector Embeddings & Pipeline**: Documents are chunked (e.g., 1,000 tokens/segment), converted into high-dimensional embeddings (e.g., OpenAI’s 3,072-dim vectors) via embedding models (e.g., `text-embedding-3-large`), and stored in vector databases (e.g., Pinecone, FAISS). User queries undergo identical embedding before semantic similarity matching retrieves top-*k* relevant chunks.

- **Retrieval & Generation**: The retriever uses similarity algorithms (e.g., cosine distance) to rank chunks by relevance to the query, passing the top results to the LLM for answer synthesis. Vector embeddings are solely for retrieval; post-retrieval processing relies on raw text chunks.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-13T09:35:27.838090+05:30

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
