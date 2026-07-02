---
title: 'Build RAG From Scratch: A Beginner’s Step-by-Step Guide | by Vivek Malhan
  | Medium'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://medium.com/@amalhan43/build-rag-from-scratch-a-beginners-step-by-step-guide-fd3cbdc0b2fd
published_at: '2026-07-03T03:51:04.963555+05:30'
collected_at: '2026-07-03T03:51:04.963565+05:30'
tags:
- openai
- rag
- web-crawled
status: active
resource_id: blog:build-rag-from-scratch-a-beginners-step-by-step-gu
first_seen: '2026-07-03T03:51:04.963565+05:30'
last_seen: '2026-07-03T03:51:04.963565+05:30'
last_checked: '2026-07-03T03:51:04.963565+05:30'
health_score: 100
---

# Build RAG From Scratch: A Beginner’s Step-by-Step Guide | by Vivek Malhan | Medium

## Summary

- **RAG Pipeline**: Implements a retrieval-augmented generation system using a two-step process: (1) **retrieval** via semantic search (FAISS + OpenAI embeddings) on document chunks, followed by (2) **generation** using a constrained LLM prompt that restricts answers to retrieved context only.

- **Modular Architecture**: Follows a clean separation of concerns with dedicated components: `document_loader.py` (text splitting), `vector_store.py` (FAISS indexing), and `rag_chain.py` (prompt engineering + LLM interaction), enabling incremental scalability and maintainability.

- **Hallucination Mitigation**: Enforces factual grounding by (a) chunking documents (300 tokens, 50 overlap), (b) using similarity search (`k=3` chunks), and (c) embedding a system prompt that mandates `"I don't know"` responses for out-of-context queries.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T03:51:04.963555+05:30

## Related Tags

- openai
- rag
- web-crawled

## Source

Original source: https://medium.com/@amalhan43/build-rag-from-scratch-a-beginners-step-by-step-guide-fd3cbdc0b2fd
