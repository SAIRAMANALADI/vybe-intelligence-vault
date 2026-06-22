---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-06-22T11:14:07.051515+05:30'
collected_at: '2026-06-22T11:14:07.051530+05:30'
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
first_seen: '2026-06-22T11:14:07.051530+05:30'
last_seen: '2026-06-22T11:14:07.051530+05:30'
last_checked: '2026-06-22T11:14:07.051530+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Fundamentals**: Combines LLMs with retrieval systems to fetch external context (e.g., documents) for accurate responses, bypassing context window limits (e.g., GPT-4.1 handles 1M tokens vs. enterprise data in petabytes).

- **Embedding Pipeline**: Chunks documents (e.g., 1,000 tokens) into 10K segments, converts them to high-dimensional vectors (e.g., 3,072D via OpenAI's `text-embedding-3-large`) using semantic similarity for retrieval.

- **Two-Phase Workflow**: Injection pipeline (chunking + vector DB storage) feeds the retrieval pipeline (query embedding → similarity matching → top-*k* chunks → LLM synthesis). Vector DBs (e.g., Pinecone, FAISS) store embeddings for efficient nearest-neighbor search.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T11:14:07.051515+05:30

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
