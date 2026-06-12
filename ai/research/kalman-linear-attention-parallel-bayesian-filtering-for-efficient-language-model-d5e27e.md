---
title: 'Kalman Linear Attention: Parallel Bayesian Filtering For Efficient Language
  Modelling and State Tracking'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2602.10743
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.017686+00:00'
tags:
- benchmark
status: active
id: arxiv:2602.10743
first_seen: '2026-06-12T10:40:06.017686+00:00'
last_seen: '2026-06-12T10:40:06.017686+00:00'
---

# Kalman Linear Attention: Parallel Bayesian Filtering For Efficient Language Modelling and State Tracking

## Summary

arXiv:2602.10743v2 Announce Type: replace 
Abstract: State-space language models such as Mamba and gated linear attention (GLA) offer linear-complexity, parallelisable alternatives to transformers, but their linear state updates limit expressivity and robust state tracking. We close this gap from a probabilistic angle, casting sequence mixing as exact Bayesian filtering with the Kalman filter as the core primitive. Classical Kalman filters give principled state and uncertainty estimates but are viewed as inherently sequential; we show that reparameterising them in information form turns their updates into an associative scan - so the per-token recurrent update is non-linear (a M\"obius/precision recursion) yet remains temporally parallel. The resulting Kalman Linear Attention (KLA) layer is a drop-in sequence mixer that performs time-parallel probabilistic inference, carries an explicit belief-state uncertainty, and is strictly more expressive than GLA-style linear updates at the same computational cost. This expressivity translates directly into stronger state tracking: KLA solves permutation-composition ($A_5$) tasks that linear SSMs and attention cannot, while staying scan-parallel. As a drop-in primitive it also matches or improves on modern SSMs and GLAs across synthetic token-manipulation and zero-shot commonsense benchmarks, and is among the first stacked Bayesian-filtering primitives trained at the billion-token scale.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2602.10743
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
