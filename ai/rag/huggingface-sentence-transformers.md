---
title: sentence-transformers/examples/cross_encoder/applications/README.md at main
  · huggingface/sentence-transformers · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/huggingface/sentence-transformers/blob/main/examples/cross_encoder/applications/README.md
published_at: '2026-08-09T08:09:13.440236+05:30'
collected_at: '2026-08-09T08:09:13.440249+05:30'
tags:
- dataset
- paper
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: github:huggingface/sentence-transformers
first_seen: '2026-08-09T08:09:13.440249+05:30'
last_seen: '2026-08-09T08:09:13.440249+05:30'
last_checked: '2026-08-09T08:09:13.440249+05:30'
health_score: 100
---

# sentence-transformers/examples/cross_encoder/applications/README.md at main · huggingface/sentence-transformers · GitHub

## Summary

- **Architecture & Input Handling**: Cross-Encoders process sentence pairs jointly via a Transformer, outputting a similarity score (0-1), whereas Bi-Encoders generate independent embeddings for single sentences, enabling cosine similarity comparisons.

- **Performance vs. Scalability Trade-off**: Cross-Encoders achieve higher accuracy but are computationally expensive (e.g., O(n²) comparisons), making them impractical for large-scale tasks like clustering; Bi-Encoders are preferred for efficiency (e.g., semantic search).

- **Hybrid Workflow**: Combines Bi-Encoder for fast candidate retrieval (top-*k*) and Cross-Encoder for precise re-ranking, optimizing both speed and accuracy in applications like semantic search.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T08:09:13.440236+05:30

## Related Tags

- dataset
- paper
- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://github.com/huggingface/sentence-transformers/blob/main/examples/cross_encoder/applications/README.md
