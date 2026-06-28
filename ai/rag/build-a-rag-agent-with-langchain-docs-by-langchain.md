---
title: Build a RAG agent with LangChain - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/langchain/rag
published_at: '2026-06-28T10:22:05.068006+05:30'
collected_at: '2026-06-28T10:22:05.068022+05:30'
tags:
- agents
- anthropic
- dataset
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
first_seen: '2026-06-28T10:22:05.068022+05:30'
last_seen: '2026-06-28T10:22:05.068022+05:30'
last_checked: '2026-06-28T10:22:05.068022+05:30'
health_score: 100
---

# Build a RAG agent with LangChain - Docs by LangChain

## Summary

- **Indexing Pipeline**: Converts raw text into retrievable vector embeddings via four steps: loading documents into `Document` objects, splitting into chunks (e.g., `RecursiveCharacterTextSplitter`), embedding chunks using models like `OpenAIEmbeddings` or `HuggingFaceEmbeddings`, and storing in a `VectorStore` for similarity search.

- **RAG Implementations**: Two architectures are supported—**RAG agent** (general-purpose, multi-step retrieval/generation) and **RAG chain** (single LLM call per query, optimized for simplicity and speed).

- **Security & Observability**: Requires LangSmith for tracing retrieval/generation steps; production setups should integrate LangSmith Engine for monitoring and issue detection.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T10:22:05.068006+05:30

## Related Tags

- agents
- anthropic
- dataset
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
