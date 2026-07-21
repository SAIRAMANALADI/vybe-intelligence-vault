---
title: sentence-transformers/examples/cross_encoder/training/ms_marco at main · huggingface/sentence-transformers
  · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/UKPLab/sentence-transformers/tree/master/examples/cross_encoder/training/ms_marco
published_at: '2026-07-21T20:00:01.888564+05:30'
collected_at: '2026-07-21T20:00:01.888578+05:30'
tags:
- benchmark
- dataset
- paper
- reddit
- web-crawled
status: active
resource_id: github:ukplab/sentence-transformers
first_seen: '2026-07-21T20:00:01.888578+05:30'
last_seen: '2026-07-21T20:00:01.888578+05:30'
last_checked: '2026-07-21T20:00:01.888578+05:30'
health_score: 100
---

# sentence-transformers/examples/cross_encoder/training/ms_marco at main · huggingface/sentence-transformers · GitHub

## Summary

- **MS MARCO Dataset**: Contains ~500k Bing search queries with relevant text passages for training passage ranking models; supports both training and pre-trained Cross Encoder models for query-passage relevance scoring.

- **Cross Encoder Architecture**: Processes query-passage pairs jointly, outputting a relevance score (often normalized via `Sigmoid` to [0,1]); primarily used for re-ranking retrieved passages (e.g., from BM25/Elasticsearch) to prioritize top results.

- **Training & Inference**:
  - **Training**: Multiple loss functions available (e.g., `BinaryCrossEntropyLoss`, `LambdaLoss`, `ADRMSELoss`) with scripts like `training_ms_marco_lambda_preprocessed.py` or `training_ms_marco_bce_preprocessed.py` for optimized performance.
  - **Inference**: Pre-trained models (e.g., `cross-encoder/ms-marco-MiniLM-L6-v2`) score/query-passage pairs; `model.rank()` sorts passages by relevance for a given query.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-21T20:00:01.888564+05:30

## Related Tags

- benchmark
- dataset
- paper
- reddit
- web-crawled

## Source

Original source: https://github.com/UKPLab/sentence-transformers/tree/master/examples/cross_encoder/training/ms_marco
