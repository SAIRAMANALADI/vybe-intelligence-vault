---
title: 'Build a RAG System from Scratch: Step-by-Step with Real Output 2026 | Nerd
  Level Tech'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://nerdleveltech.com/guides/rag-hands-on-tutorial
published_at: '2026-06-28T10:22:04.258749+05:30'
collected_at: '2026-06-28T10:22:04.258762+05:30'
tags:
- agents
- benchmark
- dataset
- hackernews
- models
- openai
- paper
- rag
- reddit
- web-crawled
status: active
resource_id: blog:build-a-rag-system-from-scratch-step-by-step-with
first_seen: '2026-06-28T10:22:04.258762+05:30'
last_seen: '2026-06-28T10:22:04.258762+05:30'
last_checked: '2026-06-28T10:22:04.258762+05:30'
health_score: 100
---

# Build a RAG System from Scratch: Step-by-Step with Real Output 2026 | Nerd Level Tech

## Summary

- **Hybrid Retrieval Pipeline**: Combines BM25 keyword search (rank-bm25) with vector similarity search (OpenAI `text-embedding-3-small` in ChromaDB) to improve retrieval precision by leveraging both exact term matching and semantic relevance.

- **Cross-Encoder Reranking**: Uses a lightweight cross-encoder model (e.g., `cross-encoder/ms-marco-MiniLM-L-6-v2`) to rerank the top 20 hybrid results, boosting relevance by scoring query-document pairs with a fine-tuned transformer, eliminating the need for paid APIs.

- **Implementation**: Implements a two-stage retrieval process—BM25 retrieves 20 candidates, vector search retrieves 20, then combines and reranks the top 40 using the cross-encoder before passing to the RAG chain for grounded generation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T10:22:04.258749+05:30

## Related Tags

- agents
- benchmark
- dataset
- hackernews
- models
- openai
- paper
- rag
- reddit
- web-crawled

## Source

Original source: https://nerdleveltech.com/guides/rag-hands-on-tutorial
