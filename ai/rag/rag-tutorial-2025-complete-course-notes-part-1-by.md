---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-07-10T13:18:53.654211+05:30'
collected_at: '2026-07-10T13:18:53.654228+05:30'
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
first_seen: '2026-07-10T13:18:53.654228+05:30'
last_seen: '2026-07-10T13:18:53.654228+05:30'
last_checked: '2026-07-10T13:18:53.654228+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Core Architecture**: Combines LLMs with external retrieval systems to fetch relevant context (e.g., documents) dynamically, bypassing context window limits (e.g., GPT-4.1: 1M tokens) by injecting only pertinent chunks (~1K tokens each) into prompts.

- **Embedding Pipeline**: Chunks source data (e.g., 10M tokens → 10K chunks) via embedding models (e.g., OpenAI’s `text-embedding-3-large` with 3,072 dimensions) to generate vector representations, stored in vector databases (e.g., Pinecone, FAISS) for semantic similarity search.

- **Retrieval & Generation**: User queries are embedded and matched against vector DB to retrieve top-*k* relevant chunks (e.g., via cosine similarity), which are then passed to the LLM for answer synthesis, optimizing for precision while minimizing token overhead.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-10T13:18:53.654211+05:30

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
