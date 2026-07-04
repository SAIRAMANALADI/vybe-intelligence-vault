---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-07-04T16:32:47.670628+05:30'
collected_at: '2026-07-04T16:32:47.670642+05:30'
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
first_seen: '2026-07-04T16:32:47.670642+05:30'
last_seen: '2026-07-04T16:32:47.670642+05:30'
last_checked: '2026-07-04T16:32:47.670642+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Divided into **Injection Pipeline** (data ingestion: chunking + embedding) and **Retrieval Pipeline** (query embedding + similarity search in vector DB), enabling efficient handling of large-scale enterprise documents (e.g., 10M tokens) by leveraging vector embeddings (e.g., OpenAI’s 3,072-dim models) and semantic similarity for retrieval.

- **Embedding Fundamentals**: Vector embeddings (e.g., `[34, 8, 7.5]` for "cat") convert text into high-dimensional vectors (up to 3,072D) capturing semantic meaning; similarity in vector space (e.g., Euclidean/Cosine) determines relevance, enabling retrieval of top-*k* chunks for LLM augmentation.

- **Vector Databases & Workflow**: Embeddings are stored in vector DBs (e.g., Pinecone, FAISS) for fast similarity search; user queries undergo identical embedding, and the retriever fetches top-*k* relevant chunks (e.g., 5–10) to provide context to the LLM for generating final answers.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T16:32:47.670628+05:30

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
