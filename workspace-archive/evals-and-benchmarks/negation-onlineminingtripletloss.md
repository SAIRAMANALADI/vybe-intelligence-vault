---
title: OnlineMiningTripletLoss/online_triplet_loss/losses.py at master · NegatioN/OnlineMiningTripletLoss
  · GitHub
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://github.com/NegatioN/OnlineMiningTripletLoss/blob/master/online_triplet_loss/losses.py
resource_id: github:negation/onlineminingtripletloss
local_vault_path: ai/rag/negation-onlineminingtripletloss.md
quality_score: 70
archive_score: 77
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- agents
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Active open-source repository
---

# OnlineMiningTripletLoss/online_triplet_loss/losses.py at master · NegatioN/OnlineMiningTripletLoss · GitHub

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 77 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Active open-source repository

## Summary

- Implements **online triplet loss** variants (`batch_hard_triplet_loss` and `batch_all_triplet_loss`) in PyTorch, computing pairwise distances via squared Euclidean or standard Euclidean metrics.

- `batch_hard_triplet_loss` selects hardest positive/negative triplets per anchor using masking (`_get_anchor_positive_triplet_mask`, `_get_anchor_negative_triplet_mask`), optimizing with margin-based triplet loss.

- `batch_all_triplet_loss` evaluates all valid triplets (via `_get_triplet_mask`), app

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://github.com/NegatioN/OnlineMiningTripletLoss/blob/master/online_triplet_loss/losses.py

## Local Vault File

Path: [negation-onlineminingtripletloss.md](../../ai/rag/negation-onlineminingtripletloss.md)
