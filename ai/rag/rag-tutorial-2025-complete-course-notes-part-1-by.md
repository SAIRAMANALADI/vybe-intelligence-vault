---
title: 'RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-06-27T21:51:04.189131+05:30'
collected_at: '2026-06-27T21:51:04.189144+05:30'
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
first_seen: '2026-06-27T21:51:04.189144+05:30'
last_seen: '2026-06-27T21:51:04.189144+05:30'
last_checked: '2026-06-27T21:51:04.189144+05:30'
health_score: 100
---

# RAG Tutorial 2025: Complete Course Notes — Part 1 | by Pragati Mehra | Medium

## Summary

- **RAG Architecture**: Combines LLMs with retrieval systems to fetch external information (e.g., documents, databases) for accurate responses, avoiding context window overload. Divided into **injection pipeline** (data ingestion: chunking → embeddings → vector DB storage) and **retrieval pipeline** (query → embedding → similarity matching → top-*k* chunks → LLM generation).

- **Vector Embeddings**: Mathematical representations (e.g., 3,072-dimensional vectors for OpenAI’s `text-embedding-3-large`) of text chunks/queries, enabling semantic similarity search. Higher dimensions capture nuanced semantics but increase storage/compute costs. Popular models include OpenAI, Cohere (`voyage-3-large`), Mistral, and FAISS (Meta).

- **Vector Databases**: Specialized systems (e.g., Pinecone, Weaviate, ChromaDB, FAISS, PostgreSQL) for storing/retrieving embeddings via similarity search (e.g., cosine distance). Retrieval pipeline uses query embeddings to fetch top-*k* relevant chunks from the DB, which are then passed to the LLM for answer generation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T21:51:04.189131+05:30

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
