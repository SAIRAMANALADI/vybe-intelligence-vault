---
title: sentence-transformers/docs/quickstart.rst at main · huggingface/sentence-transformers
  · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/huggingface/sentence-transformers/blob/main/docs/quickstart.rst
published_at: '2026-08-03T09:35:34.596644+05:30'
collected_at: '2026-08-03T09:35:34.596656+05:30'
tags:
- dataset
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: github:huggingface/sentence-transformers
first_seen: '2026-08-03T09:35:34.596656+05:30'
last_seen: '2026-08-03T09:35:34.596656+05:30'
last_checked: '2026-08-03T09:35:34.596656+05:30'
health_score: 100
---

# sentence-transformers/docs/quickstart.rst at main · huggingface/sentence-transformers · GitHub

## Summary

- **Sentence Transformers (Bi-Encoders)**:
  - Generate **fixed-size dense embeddings** for text, images, audio, or video via efficient encoding.
  - Enable **fast similarity computation** (e.g., cosine similarity) for tasks like semantic search, clustering, and classification.
  - Often used as a **first-stage retriever** in two-step pipelines, followed by a Cross-Encoder for reranking.

- **Cross-Encoders (Rerankers)**:
  - Compute **pairwise similarity scores** directly between inputs (e.g., text pairs), offering **higher accuracy** than bi-encoders.
  - **Computationally expensive** due to per-pair processing, making them suitable only for re-ranking top-*k* candidates from bi-encoders.
  - Support **multimodal inputs** (e.g., text+image) for fine-grained relevance scoring.

- **Sparse Encoders**:
  - Produce **high-dimensional sparse vectors** (e.g., SPLADE) with most dimensions zero, optimizing storage and retrieval efficiency.
  - Enable **interpretable embeddings** where non-zero dimensions map to specific tokens, aiding explainability.
  - Used in **hybrid retrieval systems** (dense + sparse) to balance performance and interpretability.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T09:35:34.596644+05:30

## Related Tags

- dataset
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://github.com/huggingface/sentence-transformers/blob/main/docs/quickstart.rst
