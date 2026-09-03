---
title: Agentic AI – Personal RAG System - Hugo Atlantic
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://subhashydv.github.io/blog/2025/09/agentic-ai-personal-rag-system/
published_at: '2026-09-04T04:11:23.605545+05:30'
collected_at: '2026-09-04T04:11:23.605556+05:30'
tags:
- agents
- meta-ai
- models
- openai
- rag
- web-crawled
status: active
resource_id: blog:agentic-ai-personal-rag-system-hugo-atlantic
first_seen: '2026-09-04T04:11:23.605556+05:30'
last_seen: '2026-09-04T04:11:23.605556+05:30'
last_checked: '2026-09-04T04:11:23.605556+05:30'
health_score: 100
---

# Agentic AI – Personal RAG System - Hugo Atlantic

## Summary

- **RAG Architecture**: Implements a Retrieval-Augmented Generation (RAG) system with modular components: file upload (PDF/TXT), preprocessing (e.g., `pdf-reader`), chunking (e.g., LangChain’s `RecursiveCharacterTextSplitter`), embedding generation (e.g., `@xenova/transformers` or OpenAI embeddings), and vector storage (e.g., Chroma/Faiss) for semantic search.

- **Orchestration & LLM Integration**: The `/ask` endpoint generates query embeddings, retrieves top-k relevant chunks from the vector store, and passes them with a custom prompt to an LLM (e.g., GPT-4) for context-aware response generation, enforcing strict adherence to provided context.

- **MCP Server Integration**: Exposes the RAG system via an MCP server (Model Context Protocol) to enable standardized AI agent interactions (e.g., GitHub Copilot) with the `/ask` REST endpoint, acting as a "USB-C port" for AI tool connectivity.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-04T04:11:23.605545+05:30

## Related Tags

- agents
- meta-ai
- models
- openai
- rag
- web-crawled

## Source

Original source: https://subhashydv.github.io/blog/2025/09/agentic-ai-personal-rag-system/
