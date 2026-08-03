---
title: Triplet Loss and Online Triplet Mining in TensorFlow | Olivier Moindrot blog
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://omoindrot.github.io/triplet-loss
published_at: '2026-08-03T09:35:27.669131+05:30'
collected_at: '2026-08-03T09:35:27.669143+05:30'
tags:
- benchmark
- dataset
- hackernews
- models
- paper
- producthunt
- rag
- reddit
- scripts
- web-crawled
- youtube
status: active
resource_id: blog:triplet-loss-and-online-triplet-mining-in-tensorfl
first_seen: '2026-08-03T09:35:27.669143+05:30'
last_seen: '2026-08-03T09:35:27.669143+05:30'
last_checked: '2026-08-03T09:35:27.669143+05:30'
health_score: 100
---

# Triplet Loss and Online Triplet Mining in TensorFlow | Olivier Moindrot blog

## Summary

- **Triplet Loss Definition**: Minimizes the distance between an anchor and a positive sample while maximizing the distance between the anchor and a negative sample, enforcing a margin constraint: \(\mathcal{L} = \max(d(a, p) - d(a, n) + \text{margin}, 0)\).

- **Online Triplet Mining**: Computes triplets dynamically from each batch of embeddings (size \(B\)) to avoid offline pre-processing, enabling efficient gradient updates by selecting hard/semi-hard triplets (e.g., Batch Hard: hardest positive/negative per anchor).

- **Distance Matrix Computation**: Uses matrix operations to compute pairwise Euclidean distances efficiently in TensorFlow, handling numerical stability (e.g., masking zero distances to avoid NaN gradients during backpropagation).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T09:35:27.669131+05:30

## Related Tags

- benchmark
- dataset
- hackernews
- models
- paper
- producthunt
- rag
- reddit
- scripts
- web-crawled
- youtube

## Source

Original source: https://omoindrot.github.io/triplet-loss
