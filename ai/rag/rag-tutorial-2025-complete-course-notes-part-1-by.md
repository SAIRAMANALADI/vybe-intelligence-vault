---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-07-04T19:29:52.728861+05:30'
collected_at: '2026-07-04T19:29:52.728874+05:30'
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
first_seen: '2026-07-04T19:29:52.728874+05:30'
last_seen: '2026-07-04T19:29:52.728874+05:30'
last_checked: '2026-07-04T19:29:52.728874+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture Fundamentals**: RAG combines LLMs with external retrieval systems to enhance responses by fetching relevant information from documents/databases without overloading the LLM's context window. The system is divided into two pipelines: **Injection Pipeline** (data ingestion via chunking and embedding) and **Retrieval Pipeline** (query processing via vector similarity matching).

- **Vector Embeddings & Semantic Search**: Embeddings convert text chunks into high-dimensional vectors (e.g., OpenAI’s `text-embedding-3-large` uses 3,072 dimensions) where semantically similar content clusters closely in vector space. Retrieval involves embedding user queries and retrieving top-*k* relevant chunks from a vector database (e.g., Pinecone, FAISS) using similarity metrics (e.g., cosine distance).

- **Chunking & Practical Constraints**: Chunking splits large documents (e.g., 10M tokens → 10K chunks of 1K tokens each) to balance granularity and context. Enterprise-scale data (e.g., 1PB = 1.3 quintillion tokens) exceeds LLM context limits (e.g., GPT-4.1: 1M tokens), necessitating RAG for efficient retrieval.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T19:29:52.728861+05:30

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
