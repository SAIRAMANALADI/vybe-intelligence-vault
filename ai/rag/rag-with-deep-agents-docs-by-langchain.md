---
title: RAG with Deep Agents - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/deepagents/rag
published_at: '2026-07-21T19:52:43.625529+05:30'
collected_at: '2026-07-21T19:52:43.625540+05:30'
tags:
- agents
- anthropic
- dataset
- hackernews
- meta-ai
- mistral
- models
- openai
- producthunt
- rag
- web-crawled
- workflows
status: active
resource_id: blog:rag-with-deep-agents-docs-by-langchain
first_seen: '2026-07-21T19:52:43.625540+05:30'
last_seen: '2026-07-21T19:52:43.625540+05:30'
last_checked: '2026-07-21T19:52:43.625540+05:30'
health_score: 100
---

# RAG with Deep Agents - Docs by LangChain

## Summary

- **RAG Patterns in Deep Agents**: Supports skills-guided retrieval, rubric-checked grounding, todo-driven investigation, and retrieve/offload/delegate workflows using custom retrieval tools, subagents, skills, and grading rubrics for corpus-specific Q&A augmentation.

- **Indexing Pipeline**: Loads documents into `Document` objects, splits them into chunks (e.g., via `langchain-text-splitters`), embeds chunks using models (e.g., OpenAI embeddings), and stores them in a `VectorStore` for semantic similarity-based retrieval.

- **Agent Architecture**: Orchestrates retrieval (vector search), offloads chunks to filesystem backend, delegates analysis to subagents for parallel processing, and synthesizes final answer with citations, while LangSmith logs traces for observability.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T19:52:43.625529+05:30

## Related Tags

- agents
- anthropic
- dataset
- hackernews
- meta-ai
- mistral
- models
- openai
- producthunt
- rag
- web-crawled
- workflows

## Source

Original source: https://docs.langchain.com/oss/python/deepagents/rag
