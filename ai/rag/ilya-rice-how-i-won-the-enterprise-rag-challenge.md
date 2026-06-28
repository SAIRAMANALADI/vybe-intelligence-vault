---
title: 'Ilya Rice: How I Won the Enterprise RAG Challenge'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://abdullin.com/ilya/how-to-build-best-rag/
published_at: '2026-06-28T10:25:20.618329+05:30'
collected_at: '2026-06-28T10:25:20.618342+05:30'
tags:
- benchmark
- hackernews
- leaderboard
- meta-ai
- models
- openai
- paper
- producthunt
- rag
- reddit
- web-crawled
status: active
resource_id: blog:ilya-rice-how-i-won-the-enterprise-rag-challenge
first_seen: '2026-06-28T10:25:20.618342+05:30'
last_seen: '2026-06-28T10:25:20.618342+05:30'
last_checked: '2026-06-28T10:25:20.618342+05:30'
health_score: 100
---

# Ilya Rice: How I Won the Enterprise RAG Challenge

## Summary

- **Parser Optimization & GPU Acceleration**: Utilized Docling (IBM-developed parser) with custom modifications for improved PDF-to-MD/HTML conversion, including table serialization. Achieved 40-minute parsing of 100 reports (~15k pages) via GPU-accelerated VM (NVIDIA 4090) on Runpod, addressing parsing challenges like rotated tables, OCR for corrupted fonts, and metadata preservation.

- **Chunking & Vectorization Strategy**: Implemented recursive chunking (300 tokens, 50-token overlap) per page to optimize semantic relevance. Created 100 separate FAISS vector databases (IndexFlatIP) per document to isolate company-specific data, using `text-embedding-3-large` for embeddings. Avoided compression/quantization to prioritize retrieval precision over speed.

- **Multi-Stage Retrieval Pipeline**: Deployed a two-router system (query classification + relevance routing) followed by LLM-based reranking of top-*n* chunks. Rejected hybrid search (BM25 + vector) due to marginal gains, focusing instead on query refinement and reranking to mitigate "junk in → junk out" failures.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T10:25:20.618329+05:30

## Related Tags

- benchmark
- hackernews
- leaderboard
- meta-ai
- models
- openai
- paper
- producthunt
- rag
- reddit
- web-crawled

## Source

Original source: https://abdullin.com/ilya/how-to-build-best-rag/
