---
title: On the Size Bias of Text Embeddings and Its Impact in Search
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://jina.ai/news/on-the-size-bias-of-text-embeddings-and-its-impact-in-search
published_at: '2026-06-28T10:27:22.849034+05:30'
collected_at: '2026-06-28T10:27:22.849047+05:30'
tags:
- benchmark
- dataset
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:on-the-size-bias-of-text-embeddings-and-its-impact
first_seen: '2026-06-28T10:27:22.849047+05:30'
last_seen: '2026-06-28T10:27:22.849047+05:30'
last_checked: '2026-06-28T10:27:22.849047+05:30'
health_score: 100
---

# On the Size Bias of Text Embeddings and Its Impact in Search

## Summary

- **Length-dependent cosine bias**: Longer texts produce higher cosine similarity scores regardless of semantic content, due to increased embedding vector dispersion across semantic space, making relevance assessment unreliable without normalization.

- **Empirical validation**: Experiments on the CISI dataset show average cosine similarity increases from 0.254 (sentences) to 0.343 (documents) to 0.658 (concatenated long documents), demonstrating a direct correlation between text length and similarity scores.

- **Asymmetric encoding mitigation**: While asymmetric query-document encoding (e.g., `retrieval.query`/`retrieval.passage` in `jina-embeddings-v3`) reduces but does not eliminate size bias, lowering average cosine scores (0.200 vs. 0.343) and narrowing the gap between sentence/document distributions.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T10:27:22.849034+05:30

## Related Tags

- benchmark
- dataset
- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://jina.ai/news/on-the-size-bias-of-text-embeddings-and-its-impact-in-search
