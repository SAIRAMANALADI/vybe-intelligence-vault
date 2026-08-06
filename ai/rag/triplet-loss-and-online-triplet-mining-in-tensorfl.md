---
title: Triplet Loss and Online Triplet Mining in TensorFlow | Olivier Moindrot blog
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://omoindrot.github.io/triplet-loss
published_at: '2026-08-06T09:18:16.656510+05:30'
collected_at: '2026-08-06T09:18:16.656525+05:30'
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
first_seen: '2026-08-06T09:18:16.656525+05:30'
last_seen: '2026-08-06T09:18:16.656525+05:30'
last_checked: '2026-08-06T09:18:16.656525+05:30'
health_score: 100
---

# Triplet Loss and Online Triplet Mining in TensorFlow | Olivier Moindrot blog

## Summary

- **Triplet Loss Definition**: Minimizes the distance between an anchor and a positive sample while maximizing the distance to a negative sample, formalized as \(\mathcal{L} = \max(d(a, p) - d(a, n) + \text{margin}, 0)\) to enforce a margin separation in the embedding space.

- **Online Triplet Mining**: Computes triplets dynamically from each batch of embeddings (size \(B\)) to avoid offline computation, generating up to \(B^3\) potential triplets but filtering for valid ones (2 positives, 1 negative) during training.

- **Strategies for Triplet Selection**: Implements **batch-all** (averages loss over all hard/semi-hard triplets) and **batch-hard** (selects hardest positive/negative per anchor), with batch-hard empirically outperforming others for embedding quality in tasks like face recognition.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-06T09:18:16.656510+05:30

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
