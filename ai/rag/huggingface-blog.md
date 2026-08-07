---
title: blog/train-sentence-transformers.md at main · huggingface/blog · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/huggingface/blog/blob/main/train-sentence-transformers.md
published_at: '2026-08-03T09:33:33.140531+05:30'
collected_at: '2026-08-03T09:33:33.140541+05:30'
tags:
- benchmark
- dataset
- hackernews
- models
- producthunt
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: github:huggingface/blog
first_seen: '2026-08-03T09:33:33.140541+05:30'
last_seen: '2026-08-03T09:33:33.140541+05:30'
last_checked: '2026-08-03T09:33:33.140541+05:30'
health_score: 100
---

# blog/train-sentence-transformers.md at main · huggingface/blog · GitHub

## Summary

- **Sentence Transformers Library**: Python framework for training/fine-tuning embedding models (e.g., for retrieval, semantic search, or STS) using components like datasets, loss functions, and evaluators.

- **Training Components**: Requires properly formatted datasets (e.g., pairs/triplets with labels/scores), a loss function (e.g., `CoSENTLoss`, `TripletLoss`), and optional evaluators (e.g., `EmbeddingSimilarityEvaluator`) to guide optimization.

- **Multi-Format Data Support**: Supports datasets from Hugging Face Hub (e.g., `all-nli`) or local files (CSV/JSON/Parquet/SQL), with strict column ordering matching the chosen loss function’s input requirements.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T09:33:33.140531+05:30

## Related Tags

- benchmark
- dataset
- hackernews
- models
- producthunt
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://github.com/huggingface/blog/blob/main/train-sentence-transformers.md
