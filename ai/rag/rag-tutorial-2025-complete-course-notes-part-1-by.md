---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-06-29T16:55:52.421854+05:30'
collected_at: '2026-06-29T16:55:52.421865+05:30'
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
first_seen: '2026-06-29T16:55:52.421865+05:30'
last_seen: '2026-06-29T16:55:52.421865+05:30'
last_checked: '2026-06-29T16:55:52.421865+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with retrieval systems to fetch external information (documents, databases) for enhanced responses while managing context window limits (e.g., GPT-4.1: 1M tokens, Claude Sonnet: 200K tokens).

- **Embedding Pipeline**: Chunks documents (e.g., 10M tokens → 10K chunks of 1K tokens each), converts text to high-dimensional vectors (e.g., OpenAI’s 3,072-dim embeddings), and stores them in vector databases (Pinecone, Weaviate, FAISS) for semantic similarity matching.

- **Retrieval Workflow**: User query is embedded, matched against stored vectors to retrieve top-*k* relevant chunks (e.g., via cosine similarity), and passed to the LLM with the original text for final answer generation, bypassing raw embeddings post-retrieval.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T16:55:52.421854+05:30

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
