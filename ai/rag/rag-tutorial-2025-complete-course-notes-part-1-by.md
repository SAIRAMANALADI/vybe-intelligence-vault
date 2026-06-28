---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-06-29T03:46:07.865996+05:30'
collected_at: '2026-06-29T03:46:07.866010+05:30'
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
first_seen: '2026-06-29T03:46:07.866010+05:30'
last_seen: '2026-06-29T03:46:07.866010+05:30'
last_checked: '2026-06-29T03:46:07.866010+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: RAG combines LLMs with external retrieval systems to fetch relevant context from vast document repositories (e.g., PDFs, databases) without overloading the LLM's context window. The system is divided into two pipelines: **Injection** (data ingestion, chunking, embedding) and **Retrieval** (query embedding, similarity search, LLM augmentation).

- **Vector Embeddings & Semantic Search**: Embeddings convert text chunks/documents into high-dimensional vectors (e.g., OpenAI's `text-embedding-3-large` uses 3,072 dimensions) where semantic similarity is measured via vector proximity. Vector databases (e.g., Pinecone, Weaviate) store these embeddings for efficient retrieval, enabling the system to match user queries to the most relevant chunks.

- **Chunking & Retrieval Workflow**: Documents are split into fixed-size chunks (e.g., 1,000 tokens) before embedding. During retrieval, the user query is embedded and compared against stored vectors using similarity metrics (e.g., cosine distance). The top-*k* relevant chunks are then passed to the LLM for answer generation, ensuring contextually accurate responses without exceeding token limits.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T03:46:07.865996+05:30

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
