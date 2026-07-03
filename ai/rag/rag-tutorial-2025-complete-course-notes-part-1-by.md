---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-07-03T15:07:32.074374+05:30'
collected_at: '2026-07-03T15:07:32.074394+05:30'
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
first_seen: '2026-07-03T15:07:32.074394+05:30'
last_seen: '2026-07-03T15:07:32.074394+05:30'
last_checked: '2026-07-03T15:07:32.074394+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with retrieval systems to fetch relevant external data (e.g., documents, databases) for context-aware responses, avoiding context window overload by processing only necessary chunks (e.g., 1,000 tokens per chunk from a 10M-token corpus).

- **Embedding Pipeline**: Chunks are converted into high-dimensional vector embeddings (e.g., 3,072 dimensions for OpenAI’s `text-embedding-3-large`) using specialized models, enabling semantic similarity searches in vector databases (e.g., Pinecone, FAISS) to retrieve top-*k* relevant passages for LLM input.

- **Two-Phase Workflow**: Injection pipeline ingests and embeds source data (chunking → vectorization → storage), while retrieval pipeline processes user queries by embedding them, querying the vector DB for top-*k* matches, and feeding these chunks to the LLM for answer generation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T15:07:32.074374+05:30

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
