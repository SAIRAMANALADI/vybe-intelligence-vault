---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-06-27T09:47:58.311534+05:30'
collected_at: '2026-06-27T09:47:58.311547+05:30'
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
first_seen: '2026-06-27T09:47:58.311547+05:30'
last_seen: '2026-06-27T09:47:58.311547+05:30'
last_checked: '2026-06-27T09:47:58.311547+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with retrieval systems to fetch external context (e.g., documents) for accurate responses, bypassing context window limits (e.g., 1M tokens for GPT-4.1) by injecting only relevant chunks (e.g., 1K tokens each) into prompts.

- **Embedding Pipeline**: Chunks (from raw data like PDFs) are converted into high-dimensional vectors (e.g., 3,072D for OpenAI’s `text-embedding-3-large`) via embedding models, enabling semantic similarity search in vector databases (e.g., Pinecone, FAISS).

- **Retrieval Workflow**: User queries are embedded and matched against stored vectors to retrieve top-*k* relevant chunks, which are then fed to the LLM for final answer generation, optimizing precision while minimizing computational overhead.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T09:47:58.311534+05:30

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
