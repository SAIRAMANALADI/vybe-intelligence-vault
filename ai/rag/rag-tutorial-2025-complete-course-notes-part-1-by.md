---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-06-24T20:39:21.186029+05:30'
collected_at: '2026-06-24T20:39:21.186043+05:30'
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
first_seen: '2026-06-24T20:39:21.186043+05:30'
last_seen: '2026-06-24T20:39:21.186043+05:30'
last_checked: '2026-06-24T20:39:21.186043+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with external retrieval systems to fetch relevant context (e.g., documents) dynamically, avoiding context window overload by injecting only pertinent chunks into prompts.
- **Embedding Pipeline**: Chunks source documents (e.g., PDFs) into fixed-token segments, converts them into high-dimensional vectors (e.g., 3,072D for OpenAI's `text-embedding-3-large`) using embedding models, and stores them in vector databases (e.g., Pinecone, FAISS) for semantic similarity search.
- **Retrieval Workflow**: User queries are embedded into vectors, matched against stored embeddings via similarity algorithms (e.g., cosine distance), and the top-*k* relevant chunks are passed to the LLM for answer generation, ensuring efficient and accurate responses.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T20:39:21.186029+05:30

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
