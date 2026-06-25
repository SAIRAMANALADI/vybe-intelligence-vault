---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-06-25T22:55:08.034295+05:30'
collected_at: '2026-06-25T22:55:08.034302+05:30'
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
first_seen: '2026-06-25T22:55:08.034302+05:30'
last_seen: '2026-06-25T22:55:08.034302+05:30'
last_checked: '2026-06-25T22:55:08.034302+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with external retrieval systems to fetch relevant context from documents/databases, avoiding context window overload by processing only necessary chunks (e.g., 1,000 tokens) via embedding models (e.g., OpenAI’s 3,072-dimension vectors).

- **Injection Pipeline**: Involves chunking source documents (e.g., PDFs) into fixed-token segments, converting each chunk into high-dimensional embeddings (e.g., 3,072D for OpenAI’s `text-embedding-3-large`), and storing them in vector databases (e.g., Pinecone, FAISS).

- **Retrieval Pipeline**: User queries are embedded and matched against stored vectors using semantic similarity (e.g., cosine distance) to retrieve top-*k* relevant chunks, which are then passed to the LLM for answer generation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-25T22:55:08.034295+05:30

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
