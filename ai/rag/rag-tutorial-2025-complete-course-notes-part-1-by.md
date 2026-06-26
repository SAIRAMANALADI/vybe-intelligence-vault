---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-06-26T20:18:57.863137+05:30'
collected_at: '2026-06-26T20:18:57.863153+05:30'
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
first_seen: '2026-06-26T20:18:57.863153+05:30'
last_seen: '2026-06-26T20:18:57.863153+05:30'
last_checked: '2026-06-26T20:18:57.863153+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with retrieval systems to fetch external information (documents, databases) for accurate responses without overloading LLM context windows, critical for enterprise-scale data (e.g., 1TB+ documents) where direct LLM input is infeasible.

- **Vector Embeddings & Chunking**: Documents are split into fixed-token chunks (e.g., 1,000 tokens) and converted into high-dimensional vectors (e.g., 3,072D for OpenAI’s `text-embedding-3-large`) using embedding models, enabling semantic similarity search in vector databases (e.g., Pinecone, FAISS).

- **Two-Pipeline Workflow**: Injection pipeline (chunking → embedding → vector DB storage) and retrieval pipeline (user query → embedding → similarity search → top-*k* chunks → LLM augmentation for final answer generation).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T20:18:57.863137+05:30

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
