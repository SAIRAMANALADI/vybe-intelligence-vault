---
title: 'Build a RAG System from Scratch: Step-by-Step with Real Output 2026 | Nerd
  Level Tech'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://nerdleveltech.com/guides/rag-hands-on-tutorial
published_at: '2026-08-03T09:25:52.668218+05:30'
collected_at: '2026-08-03T09:25:52.668232+05:30'
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
first_seen: '2026-08-03T09:25:52.668232+05:30'
last_seen: '2026-08-03T09:25:52.668232+05:30'
last_checked: '2026-08-03T09:25:52.668232+05:30'
health_score: 100
---

# Build a RAG System from Scratch: Step-by-Step with Real Output 2026 | Nerd Level Tech

## Summary

- **Hybrid Retrieval Pipeline**: Combines BM25 keyword search with vector similarity (OpenAI `text-embedding-3-small`) using `langchain`'s `BM25Retriever` and `ChromaDB` retriever, followed by cross-encoder reranking (free `sentence-transformers` model) to improve precision.

- **Reranking Implementation**: Uses a lightweight cross-encoder (`cross-encoder/ms-marco-MiniLM-L-6-v2`) to re-score top-20 hybrid candidates, reducing false positives by ~30% compared to standalone BM25 or vector search.

- **Performance Metrics**: Achieves **~12% higher RAGAS (context_recall)** and **~8% higher answer_relevancy** vs. pure vector search, with minimal latency overhead (~150ms per query).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T09:25:52.668218+05:30

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
