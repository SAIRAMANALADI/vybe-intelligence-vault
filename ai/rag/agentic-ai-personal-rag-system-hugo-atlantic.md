---
title: Agentic AI – Personal RAG System - Hugo Atlantic
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://subhashydv.github.io/blog/2025/09/agentic-ai-personal-rag-system/
published_at: '2026-09-02T10:17:25.420127+05:30'
collected_at: '2026-09-02T10:17:25.420139+05:30'
tags:
- agents
- meta-ai
- models
- openai
- rag
- web-crawled
status: active
resource_id: blog:agentic-ai-personal-rag-system-hugo-atlantic
first_seen: '2026-09-02T10:17:25.420139+05:30'
last_seen: '2026-09-02T10:17:25.420139+05:30'
last_checked: '2026-09-02T10:17:25.420139+05:30'
health_score: 100
---

# Agentic AI – Personal RAG System - Hugo Atlantic

## Summary

- **RAG Architecture**: Implements a Retrieval-Augmented Generation (RAG) system with modular components: file upload (PDF/TXT), text preprocessing, chunking (e.g., LangChain’s `RecursiveCharacterTextSplitter`), embedding generation (e.g., `@xenova/transformers`), and vector storage (e.g., Chroma/Faiss).

- **Query Processing Pipeline**: Orchestrator generates query embeddings, retrieves top-k relevant chunks from the vector store, and passes them with a custom prompt to an LLM (e.g., GPT-4) for context-aware response synthesis.

- **MCP Integration**: Exposes functionality via an MCP server to standardize AI agent interactions (e.g., GitHub Copilot) with the RAG system’s `/ask` endpoint, enabling seamless integration through a protocol similar to HTTP.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-02T10:17:25.420127+05:30

## Related Tags

- agents
- meta-ai
- models
- openai
- rag
- web-crawled

## Source

Original source: https://subhashydv.github.io/blog/2025/09/agentic-ai-personal-rag-system/
