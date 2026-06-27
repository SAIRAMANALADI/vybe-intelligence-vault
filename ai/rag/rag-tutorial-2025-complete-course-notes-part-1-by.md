---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-06-27T19:37:54.827782+05:30'
collected_at: '2026-06-27T19:37:54.827795+05:30'
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
first_seen: '2026-06-27T19:37:54.827795+05:30'
last_seen: '2026-06-27T19:37:54.827795+05:30'
last_checked: '2026-06-27T19:37:54.827795+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: RAG combines LLMs with retrieval systems to fetch external context (e.g., documents, databases) dynamically, bypassing context window limits (e.g., GPT-4.1: 1M tokens) by injecting only relevant chunks (e.g., 1,000-token segments) into prompts, avoiding full-document overload.

- **Embedding Pipeline**: Text chunks are converted into high-dimensional vector embeddings (e.g., OpenAI’s `text-embedding-3-large` uses 3,072 dimensions) via embedding models, capturing semantic relationships (e.g., "cat" and "kitten" vectors are closer than "elephant"). These embeddings are stored in vector databases (e.g., Pinecone, FAISS) for similarity-based retrieval.

- **Retrieval Workflow**: User queries are embedded and matched against stored vectors using similarity algorithms (e.g., cosine distance) to retrieve top-*k* relevant chunks, which are then passed to the LLM for answer synthesis. Chunking strategies (e.g., fixed-token segmentation) and embedding dimensionality (trade-off between semantic richness and cost) critically impact retrieval accuracy.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T19:37:54.827782+05:30

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
