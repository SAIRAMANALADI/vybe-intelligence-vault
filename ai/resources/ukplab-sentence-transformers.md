---
title: sentence-transformers/examples/cross_encoder/training/ms_marco at main · huggingface/sentence-transformers
  · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/UKPLab/sentence-transformers/tree/master/examples/cross_encoder/training/ms_marco
published_at: '2026-08-09T03:29:05.095852+05:30'
collected_at: '2026-08-09T03:29:05.095867+05:30'
tags:
- benchmark
- dataset
- paper
- reddit
- web-crawled
status: active
resource_id: github:ukplab/sentence-transformers
first_seen: '2026-08-09T03:29:05.095867+05:30'
last_seen: '2026-08-09T03:29:05.095867+05:30'
last_checked: '2026-08-09T03:29:05.095867+05:30'
health_score: 100
---

# sentence-transformers/examples/cross_encoder/training/ms_marco at main · huggingface/sentence-transformers · GitHub

## Summary

- **Dataset & Task**: MS MARCO Passage Ranking provides ~500k Bing search queries with relevant text passages for training information retrieval models; Cross Encoders score query-passage relevance (0-1 via Sigmoid) and are used for re-ranking retrieved passages.

- **Training Methods**: Multiple loss functions available (e.g., `BinaryCrossEntropyLoss`, `LambdaLoss`, `RankNetLoss`) with preprocessed or raw MS MARCO data; `LambdaLoss` and `BinaryCrossEntropyLoss` often yield strongest models, while `ADRMSELoss` performs comparably on LLM-distilled data.

- **Inference & Models**: Pre-trained Cross Encoders (e.g., `ms-marco-MiniLM-L6-v2`) enable zero-shot relevance scoring; inference involves ranking passages by predicted scores or re-ranking retrieved candidates.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T03:29:05.095852+05:30

## Related Tags

- benchmark
- dataset
- paper
- reddit
- web-crawled

## Source

Original source: https://github.com/UKPLab/sentence-transformers/tree/master/examples/cross_encoder/training/ms_marco
