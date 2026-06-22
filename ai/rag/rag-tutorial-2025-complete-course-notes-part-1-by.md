---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-06-23T01:04:54.256563+05:30'
collected_at: '2026-06-23T01:04:54.256576+05:30'
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
first_seen: '2026-06-23T01:04:54.256576+05:30'
last_seen: '2026-06-23T01:04:54.256576+05:30'
last_checked: '2026-06-23T01:04:54.256576+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with retrieval systems to fetch relevant external data (documents, databases) dynamically, addressing context window limitations (e.g., GPT-4.1: 1M tokens) by injecting only pertinent chunks (1K–3K tokens) into prompts, avoiding full-document overload.

- **Embedding Pipeline**: Chunks (10K from 10M tokens) are converted to high-dimensional vectors (e.g., OpenAI’s 3,072-D embeddings) via embedding models (e.g., `text-embedding-3-large`), enabling semantic similarity search in vector databases (Pinecone, Weaviate, FAISS).

- **Retrieval Workflow**: User queries are embedded and matched against vector DBs using similarity algorithms (e.g., cosine distance), retrieving top-*k* relevant chunks (e.g., 5–10) for LLM synthesis into final answers, decoupling retrieval (vector search) from generation (LLM inference).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-23T01:04:54.256563+05:30

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
