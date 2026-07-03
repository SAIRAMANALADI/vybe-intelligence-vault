---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-07-04T01:21:34.409999+05:30'
collected_at: '2026-07-04T01:21:34.410013+05:30'
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
first_seen: '2026-07-04T01:21:34.410013+05:30'
last_seen: '2026-07-04T01:21:34.410013+05:30'
last_checked: '2026-07-04T01:21:34.410013+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with retrieval systems to fetch relevant external information (e.g., documents, databases) for enhanced responses while avoiding context window overload; splits into **Injection Pipeline** (data ingestion, chunking, embedding) and **Retrieval Pipeline** (query embedding, similarity search, LLM generation).

- **Vector Embeddings**: Mathematical representations (e.g., 3,072-dimensional vectors via OpenAI’s `text-embedding-3-large`) of text chunks/queries, enabling semantic similarity search in vector databases (e.g., Pinecone, Weaviate, FAISS) to retrieve top-*k* relevant chunks for LLM input.

- **Chunking & Embedding Workflow**: Documents are split into fixed-token chunks (e.g., 1,000 tokens), each converted to embeddings via specialized models (e.g., OpenAI, Cohere, Mistral), stored in vector DBs, and matched against query embeddings using similarity metrics (e.g., cosine distance) to supply contextually relevant text to the LLM for final answer generation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T01:21:34.409999+05:30

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
