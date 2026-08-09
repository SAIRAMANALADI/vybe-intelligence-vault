---
title: Retrieval Augmented Generation (RAG) with Deep Agents - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/deepagents/rag
published_at: '2026-08-09T21:22:47.251123+05:30'
collected_at: '2026-08-09T21:22:47.251139+05:30'
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
first_seen: '2026-08-09T21:22:47.251139+05:30'
last_seen: '2026-08-09T21:22:47.251139+05:30'
last_checked: '2026-08-09T21:22:47.251139+05:30'
health_score: 100
---

# Retrieval Augmented Generation (RAG) with Deep Agents - Docs by LangChain

## Summary

- **RAG Patterns in Deep Agents**: Supports skills-guided retrieval, rubric-checked grounding, todo-driven investigation, and retrieve-offload-delegate workflows; leverages custom retrieval tools, filesystem backends, subagents, skills, and grading rubrics for flexible RAG implementations.

- **Indexing Workflow**: Converts documentation into retrievable chunks via four steps: loading documents into `Document` objects, splitting into smaller chunks, embedding chunks using vector models (e.g., OpenAI embeddings), and storing chunks + embeddings in a `VectorStore` for efficient similarity search.

- **Retrieve-Offload-Delegate Pattern**: Retrieves relevant chunks at query time, writes them to a filesystem backend to reduce orchestrator context load, and delegates analysis to subagents that process files in parallel, enabling scalable and modular RAG for large corpora.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T21:22:47.251123+05:30

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
