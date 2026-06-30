---
title: 'Build RAG From Scratch: A Beginner’s Step-by-Step Guide | by Vivek Malhan
  | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://medium.com/@amalhan43/build-rag-from-scratch-a-beginners-step-by-step-guide-fd3cbdc0b2fd
published_at: '2026-07-01T04:11:51.292137+05:30'
collected_at: '2026-07-01T04:11:51.292150+05:30'
tags:
- openai
- rag
- web-crawled
status: active
resource_id: blog:build-rag-from-scratch-a-beginners-step-by-step-gu
first_seen: '2026-07-01T04:11:51.292150+05:30'
last_seen: '2026-07-01T04:11:51.292150+05:30'
last_checked: '2026-07-01T04:11:51.292150+05:30'
health_score: 100
---

# Build RAG From Scratch: A Beginner’s Step-by-Step Guide | by Vivek Malhan | Medium

## Summary

- **RAG Pipeline Architecture**: Implements a two-stage process—retrieval (using FAISS for semantic search via embeddings) followed by generation (using OpenAI's LLM with a constrained prompt to prevent hallucinations).

- **Modular Implementation**: Structured into four core components: `document_loader.py` (text splitting), `vector_store.py` (FAISS-based embeddings), `rag_chain.py` (prompt engineering + LLM integration), and `main.py` (orchestration), ensuring separation of concerns and scalability.

- **Hallucination Mitigation**: Enforces answer grounding by restricting the LLM to provided context and returning "I don't know" for out-of-scope queries, achieved via a system prompt and similarity search (`k=3`) over document chunks.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T04:11:51.292137+05:30

## Related Tags

- openai
- rag
- web-crawled

## Source

Original source: https://medium.com/@amalhan43/build-rag-from-scratch-a-beginners-step-by-step-guide-fd3cbdc0b2fd
