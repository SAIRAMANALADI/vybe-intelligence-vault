---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-07-02T09:53:52.416764+05:30'
collected_at: '2026-07-02T09:53:52.416778+05:30'
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
first_seen: '2026-07-02T09:53:52.416778+05:30'
last_seen: '2026-07-02T09:53:52.416778+05:30'
last_checked: '2026-07-02T09:53:52.416778+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: RAG combines LLMs with retrieval systems to fetch relevant external information (documents, databases) dynamically, avoiding context window overflow by injecting only pertinent chunks into the LLM prompt.

- **Vector Embeddings & Semantic Search**: Text is converted into high-dimensional vectors (e.g., 3,072D for OpenAI’s `text-embedding-3-large`) where semantic similarity is computed via distance metrics (e.g., cosine similarity), enabling retrieval of contextually relevant chunks from vector databases (Pinecone, Weaviate, FAISS).

- **Pipeline Workflow**: The system consists of (1) **Injection Pipeline** (chunking → embedding → storage in vector DB) and (2) **Retrieval Pipeline** (query embedding → similarity search → top-*k* chunk retrieval → LLM augmentation for answer generation).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T09:53:52.416764+05:30

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
