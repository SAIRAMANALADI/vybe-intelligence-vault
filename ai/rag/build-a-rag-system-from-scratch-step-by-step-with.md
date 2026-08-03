---
title: 'Build a RAG System from Scratch: Step-by-Step with Real Output 2026 | Nerd
  Level Tech'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://nerdleveltech.com/guides/rag-hands-on-tutorial
published_at: '2026-08-03T22:52:46.568562+05:30'
collected_at: '2026-08-03T22:52:46.568577+05:30'
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
first_seen: '2026-08-03T22:52:46.568577+05:30'
last_seen: '2026-08-03T22:52:46.568577+05:30'
last_checked: '2026-08-03T22:52:46.568577+05:30'
health_score: 100
---

# Build a RAG System from Scratch: Step-by-Step with Real Output 2026 | Nerd Level Tech

## Summary

- **Hybrid Search Implementation**: Combines BM25 (keyword-based) and vector search (semantic-based) using `langchain`'s `EnsembleRetriever` with a 0.5 weight ratio; BM25 uses `rank_bm25` with default parameters, while vector search leverages ChromaDB's `similarity_search`.

- **Cross-Encoder Reranking**: Uses `cross-encoder/ms-marco-MiniLM-L-6-v2` (free, no API key) to rerank hybrid search results; reranker scores top 10 hybrid results and selects the best 4 for the RAG pipeline.

- **Performance Metrics**: Hybrid + reranking improves retrieval precision by ~22% over pure vector search (measured via RAGAS `faithfulness` and `answer_relevancy` metrics); BM25 alone retrieves exact keyword matches but lacks semantic understanding.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T22:52:46.568562+05:30

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
