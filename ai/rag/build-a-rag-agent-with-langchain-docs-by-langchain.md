---
title: Build a RAG agent with LangChain - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/langchain/rag
published_at: '2026-06-26T04:17:24.162997+05:30'
collected_at: '2026-06-26T04:17:24.163006+05:30'
tags:
- agents
- anthropic
- hackernews
- meta-ai
- mistral
- models
- openai
- rag
- reddit
- web-crawled
status: active
resource_id: blog:build-a-rag-agent-with-langchain-docs-by-langchain
first_seen: '2026-06-26T04:17:24.163006+05:30'
last_seen: '2026-06-26T04:17:24.163006+05:30'
last_checked: '2026-06-26T04:17:24.163006+05:30'
health_score: 100
---

# Build a RAG agent with LangChain - Docs by LangChain

## Summary

- **RAG Pipeline**: LangChain implements Retrieval-Augmented Generation (RAG) via a two-phase process: **indexing** (loading, splitting, and storing documents in a vector store) and **retrieval-and-generation** (query-time retrieval of relevant context followed by LLM-based response synthesis).

- **Agent/Chain Architectures**: Supports two query execution modes: (1) **RAG agents** (multi-step tool-based orchestration for complex queries) and (2) **RAG chains** (single LLM call per query for efficiency).

- **Modular Components**: Requires three core integrations: (1) **chat model** (e.g., OpenAI, Anthropic), (2) **embeddings model** (e.g., `text-embedding-3-large`), and (3) **vector store** (e.g., Chroma, InMemoryVectorStore) for semantic search.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T04:17:24.162997+05:30

## Related Tags

- agents
- anthropic
- hackernews
- meta-ai
- mistral
- models
- openai
- rag
- reddit
- web-crawled

## Source

Original source: https://docs.langchain.com/oss/python/langchain/rag
