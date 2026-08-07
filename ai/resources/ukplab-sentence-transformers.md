---
title: sentence-transformers/examples/cross_encoder/training/ms_marco at main · huggingface/sentence-transformers
  · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/UKPLab/sentence-transformers/tree/master/examples/cross_encoder/training/ms_marco
published_at: '2026-08-01T21:52:11.698692+05:30'
collected_at: '2026-08-01T21:52:11.698707+05:30'
tags:
- benchmark
- dataset
- models
- paper
- reddit
- web-crawled
status: active
resource_id: github:ukplab/sentence-transformers
first_seen: '2026-08-01T21:52:11.698707+05:30'
last_seen: '2026-08-01T21:52:11.698707+05:30'
last_checked: '2026-08-01T21:52:11.698707+05:30'
health_score: 100
---

# sentence-transformers/examples/cross_encoder/training/ms_marco at main · huggingface/sentence-transformers · GitHub

## Summary

- **MS MARCO Dataset**: Contains ~500k real Bing search queries with relevant passages for training information retrieval models, including pre-trained cross-encoder models for direct use without training.

- **Cross-Encoder Architecture**: Jointly processes query-passage pairs to output relevance scores (0-1 via Sigmoid), typically used for re-ranking retrieved passages (e.g., from BM25/Elasticsearch) to prioritize top results.

- **Training & Loss Functions**: Multiple scripts support diverse loss functions (e.g., `BinaryCrossEntropyLoss`, `LambdaLoss`, `RankNetLoss`) for fine-tuning; `LambdaLoss` and `ADRMSELoss` (LLM-distilled) are noted for strong performance, with inference examples provided for ranking passages.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-01T21:52:11.698692+05:30

## Related Tags

- benchmark
- dataset
- models
- paper
- reddit
- web-crawled

## Source

Original source: https://github.com/UKPLab/sentence-transformers/tree/master/examples/cross_encoder/training/ms_marco
