---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-06-25T16:36:52.928186+05:30'
collected_at: '2026-06-25T16:36:52.928198+05:30'
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
first_seen: '2026-06-25T16:36:52.928198+05:30'
last_seen: '2026-06-25T16:36:52.928198+05:30'
last_checked: '2026-06-25T16:36:52.928198+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Fundamentals**: RAG combines LLMs with retrieval systems to enhance responses by fetching relevant external data (documents, databases) without overloading the LLM's context window, addressing limitations of direct document ingestion (e.g., 10M+ tokens in enterprise data).

- **Vector Embeddings & Pipeline**: Documents are chunked (e.g., 1,000 tokens), converted into high-dimensional vectors (e.g., 3,072D via OpenAI's `text-embedding-3-large`), and stored in vector databases (e.g., Pinecone, FAISS). User queries are similarly embedded, and semantic similarity matching retrieves top-*k* relevant chunks for LLM input.

- **Architecture Workflow**: Injection pipeline (chunking → embedding → storage) precedes retrieval pipeline (query embedding → similarity search → top-*k* chunk retrieval → LLM generation). Vector embeddings are solely for similarity matching; raw text chunks are used for final LLM prompting.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-25T16:36:52.928186+05:30

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
