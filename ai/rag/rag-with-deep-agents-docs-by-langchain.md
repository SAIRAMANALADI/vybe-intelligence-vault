---
title: Retrieval Augmented Generation (RAG) with Deep Agents - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/deepagents/rag
published_at: '2026-08-02T14:09:26.576940+05:30'
collected_at: '2026-08-02T14:09:26.576954+05:30'
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
first_seen: '2026-08-02T14:09:26.576954+05:30'
last_seen: '2026-08-02T14:09:26.576954+05:30'
last_checked: '2026-08-02T14:09:26.576954+05:30'
health_score: 100
---

# Retrieval Augmented Generation (RAG) with Deep Agents - Docs by LangChain

## Summary

- **RAG Patterns**: Deep Agents supports multiple RAG patterns including skills-guided retrieval, rubric-checked grounding, todo-driven investigation, and retrieve-offload-delegate workflows, enabling flexible orchestration of retrieval, analysis, and synthesis based on corpus size and latency requirements.

- **Indexing Pipeline**: The LangChain documentation indexing process involves loading documents into `Document` objects, splitting them into semantically meaningful chunks, embedding chunks using models like OpenAI's, and storing embeddings in a `VectorStore` for efficient similarity-based retrieval.

- **Retrieve-Offload-Delegate Workflow**: The tutorial implements a retrieve-offload-delegate pattern where the agent performs vector similarity search, writes retrieved chunks to a filesystem backend, and delegates analysis to subagents that process files in parallel, keeping the orchestrator context clean and enabling scalable document processing.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T14:09:26.576940+05:30

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
