---
title: Agentic AI – Personal RAG System - Hugo Atlantic
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://subhashydv.github.io/blog/2025/09/agentic-ai-personal-rag-system/
published_at: '2026-09-03T10:13:53.072317+05:30'
collected_at: '2026-09-03T10:13:53.072331+05:30'
tags:
- agents
- meta-ai
- models
- openai
- rag
- web-crawled
status: active
resource_id: blog:agentic-ai-personal-rag-system-hugo-atlantic
first_seen: '2026-09-03T10:13:53.072331+05:30'
last_seen: '2026-09-03T10:13:53.072331+05:30'
last_checked: '2026-09-03T10:13:53.072331+05:30'
health_score: 100
---

# Agentic AI – Personal RAG System - Hugo Atlantic

## Summary

- **RAG Architecture**: A personal RAG system ingests PDF/TXT files via REST API, preprocesses and chunks text (e.g., using LangChain’s `RecursiveCharacterTextSplitter`), and generates embeddings (e.g., via `@xenova/transformers`) stored in a vector database (e.g., Chroma) for semantic retrieval.

- **Query Processing**: User queries are embedded and matched against vectorized chunks; retrieved context + query are passed to an LLM (e.g., GPT-4) with a system prompt to constrain responses to the provided context.

- **MCP Integration**: The system exposes an MCP server to standardize AI agent interactions (e.g., GitHub Copilot) with the `/ask` endpoint, enabling plug-and-play functionality via a protocol analogous to USB-C.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-03T10:13:53.072317+05:30

## Related Tags

- agents
- meta-ai
- models
- openai
- rag
- web-crawled

## Source

Original source: https://subhashydv.github.io/blog/2025/09/agentic-ai-personal-rag-system/
