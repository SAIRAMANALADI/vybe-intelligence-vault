---
title: Retrieval Augmented Generation (RAG) with Deep Agents - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/deepagents/rag
published_at: '2026-08-05T22:26:48.868437+05:30'
collected_at: '2026-08-05T22:26:48.868451+05:30'
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
resource_id: blog:retrieval-augmented-generation-rag-with-deep-agent
first_seen: '2026-08-05T22:26:48.868451+05:30'
last_seen: '2026-08-05T22:26:48.868451+05:30'
last_checked: '2026-08-05T22:26:48.868451+05:30'
health_score: 100
---

# Retrieval Augmented Generation (RAG) with Deep Agents - Docs by LangChain

## Summary

- **RAG Patterns in Deep Agents**: Supports skills-guided retrieval, rubric-checked grounding, todo-driven investigation, and retrieve-offload-delegate workflows, enabling dynamic orchestration of retrieval, analysis, and synthesis based on corpus size, latency, and grounding requirements.

- **Retrieval-Augmented Workflow**: Implements a documentation Q&A agent that indexes LangChain docs via vector search, offloads retrieved chunks to a filesystem backend, and delegates analysis to subagents to maintain clean orchestrator context and ensure answers are grounded in source material.

- **Indexing Pipeline**: Consists of four steps: loading documents into `Document` objects, splitting into chunks via text splitters, embedding chunks using models (e.g., OpenAI embeddings), and storing chunks/embeddings in a `VectorStore` for efficient similarity-based retrieval during query time.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-05T22:26:48.868437+05:30

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
