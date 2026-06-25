---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-06-26T04:17:10.279393+05:30'
collected_at: '2026-06-26T04:17:10.279403+05:30'
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
first_seen: '2026-06-26T04:17:10.279403+05:30'
last_seen: '2026-06-26T04:17:10.279403+05:30'
last_checked: '2026-06-26T04:17:10.279403+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with external retrieval systems to fetch relevant information from large document sets (e.g., PDFs, databases) without overloading the LLM’s context window, enabling accurate responses by injecting only pertinent chunks into the prompt.

- **Embedding Pipeline**: Documents are split into fixed-size chunks (e.g., 1,000 tokens), converted into high-dimensional vector embeddings (e.g., 3,072D for OpenAI’s `text-embedding-3-large`), and stored in a vector database (e.g., Pinecone, FAISS) for semantic similarity matching.

- **Retrieval Workflow**: User queries are embedded into vectors, compared against stored embeddings via similarity algorithms (e.g., cosine distance), and the top-*k* relevant chunks are passed to the LLM for final answer generation, ensuring efficient and context-aware responses.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T04:17:10.279393+05:30

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
