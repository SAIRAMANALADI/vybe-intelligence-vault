---
title: 'Kalman Linear Attention: Parallel Bayesian Filtering For Efficient Language
  Modelling and State Tracking'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2602.10743
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.798472+00:00'
tags: []
status: new
---

# Kalman Linear Attention: Parallel Bayesian Filtering For Efficient Language Modelling and State Tracking

## Summary

arXiv:2602.10743v2 Announce Type: replace 
Abstract: State-space language models such as Mamba and gated linear attention (GLA) offer linear-complexity, parallelisable alternatives to transformers, but their linear state updates limit expressivity and robust state tracking. We close this gap from a probabilistic angle, casting sequence mixing as exact Bayesian filtering with the Kalman filter as the core primitive. Classical Kalman filters give principled state and uncertainty estimates but are viewed as inherently sequential; we show that reparameterising them in information form turns their updates into an associative scan - so the per-token recurrent update is non-linear (a M\"obius/precision recursion) yet remains temporally parallel. The resulting Kalman Linear Attention (KLA) layer is a drop-in sequence mixer that performs time-parallel probabilistic inference, carries an explicit belief-state uncertainty, and is strictly more expressive than GLA-style linear updates at the same computational cost. This expressivity translates directly into stronger state tracking: KLA solves permutation-composition ($A_5$) tasks that linear SSMs and attention cannot, while staying scan-parallel. As a drop-in primitive it also matches or improves on modern SSMs and GLAs across synthetic token-manipulation and zero-shot commonsense benchmarks, and is among the first stacked Bayesian-filtering primitives trained at the billion-token scale.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- None

## Source

Original source: https://arxiv.org/abs/2602.10743
