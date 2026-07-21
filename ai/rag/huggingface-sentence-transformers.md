---
title: sentence-transformers/examples/sentence_transformer/applications/retrieve_rerank/in_document_search_crossencoder.py
  at m
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/huggingface/sentence-transformers/tree/main/examples/sentence_transformer/applications/retrieve_rerank/in_document_search_crossencoder.py
published_at: '2026-07-21T20:01:29.175000+05:30'
collected_at: '2026-07-21T20:01:29.175015+05:30'
tags:
- dataset
- models
- rag
- reddit
- web-crawled
status: active
resource_id: github:huggingface/sentence-transformers
first_seen: '2026-07-21T20:01:29.175015+05:30'
last_seen: '2026-07-21T20:01:29.175015+05:30'
last_checked: '2026-07-21T20:01:29.175015+05:30'
health_score: 100
---

# sentence-transformers/examples/sentence_transformer/applications/retrieve_rerank/in_document_search_crossencoder.py at m

## Summary

- **Cross-Encoder-based in-document search**: Splits document into passages (e.g., 3 consecutive sentences) and uses a CrossEncoder (`cross-encoder/ms-marco-TinyBERT-L2`) to score relevance of each passage for a given query, returning top-5 highest-scoring passages.

- **Efficiency trade-off**: The TinyBERT-L2 model achieves ~9,000 passages/sec on a V100 GPU but becomes inefficient for large documents due to per-query scoring of all [query, passage] pairs.

- **Preprocessing pipeline**: Uses NLTK’s `sent_tokenize()` to split document into sentences, then groups them into passages with configurable `window_size` (e.g., 3 sentences), balancing context retention and passage length.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T20:01:29.175000+05:30

## Related Tags

- dataset
- models
- rag
- reddit
- web-crawled

## Source

Original source: https://github.com/huggingface/sentence-transformers/tree/main/examples/sentence_transformer/applications/retrieve_rerank/in_document_search_crossencoder.py
