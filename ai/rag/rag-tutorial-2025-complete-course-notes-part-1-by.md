---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-06-23T09:53:04.369242+05:30'
collected_at: '2026-06-23T09:53:04.369259+05:30'
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
first_seen: '2026-06-23T09:53:04.369259+05:30'
last_seen: '2026-06-23T09:53:04.369259+05:30'
last_checked: '2026-06-23T09:53:04.369259+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with external retrieval systems to enhance responses using external documents (e.g., PDFs, databases) while avoiding context window overload; splits into *Injection Pipeline* (data ingestion/chunking/embedding) and *Retrieval Pipeline* (query embedding + similarity-based retrieval).

- **Vector Embeddings**: High-dimensional numerical representations (e.g., OpenAI’s 3,072-dim vectors) of text chunks, enabling semantic similarity search; embeddings are generated via specialized models (e.g., `text-embedding-3-large`) and stored in vector databases (e.g., Pinecone, FAISS) for efficient retrieval.

- **Chunking & Retrieval Workflow**: Documents are split into fixed-token chunks (e.g., 1,000 tokens), embedded, and indexed; user queries are similarly embedded, and the retriever ranks chunks by semantic similarity (e.g., cosine distance) to return top-*k* relevant passages for LLM synthesis.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-23T09:53:04.369242+05:30

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
