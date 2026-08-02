---
title: sentence-transformers/examples/cross_encoder/applications/README.md at main
  · huggingface/sentence-transformers · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/huggingface/sentence-transformers/blob/main/examples/cross_encoder/applications/README.md
published_at: '2026-08-02T19:31:17.467885+05:30'
collected_at: '2026-08-02T19:31:17.467897+05:30'
tags:
- dataset
- paper
- rag
- reddit
- web-crawled
status: active
resource_id: github:huggingface/sentence-transformers
first_seen: '2026-08-02T19:31:17.467897+05:30'
last_seen: '2026-08-02T19:31:17.467897+05:30'
last_checked: '2026-08-02T19:31:17.467897+05:30'
health_score: 100
---

# sentence-transformers/examples/cross_encoder/applications/README.md at main · huggingface/sentence-transformers · GitHub

## Summary

- **Cross-Encoders** process sentence pairs jointly via a Transformer, outputting a similarity score (0-1) without generating individual sentence embeddings, unlike **Bi-Encoders** which encode sentences independently for later comparison (e.g., cosine similarity).
- **Performance vs. Scalability Trade-off**: Cross-Encoders achieve higher accuracy than Bi-Encoders but are computationally expensive; they are ideal for scoring predefined pairs (e.g., 100 pairs) but impractical for large-scale tasks (e.g., clustering 10K sentences would require ~50M comparisons).
- **Hybrid Approach**: Combine Bi-Encoders for efficient initial retrieval (e.g., top-100 candidates) and Cross-Encoders for re-ranking to balance performance and scalability in applications like semantic search.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T19:31:17.467885+05:30

## Related Tags

- dataset
- paper
- rag
- reddit
- web-crawled

## Source

Original source: https://github.com/huggingface/sentence-transformers/blob/main/examples/cross_encoder/applications/README.md
