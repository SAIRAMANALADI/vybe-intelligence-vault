---
title: Lightweight and Interpretable Transformer via Mixed Graph Algorithm Unrolling
  for Traffic Forecast
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2505.13102
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.106420+00:00'
tags:
- hackernews
status: active
id: arxiv:2505.13102
first_seen: '2026-06-12T10:40:03.106420+00:00'
last_seen: '2026-06-12T10:40:03.106420+00:00'
---

# Lightweight and Interpretable Transformer via Mixed Graph Algorithm Unrolling for Traffic Forecast

## Summary

arXiv:2505.13102v4 Announce Type: replace-cross 
Abstract: Unlike conventional "black-box" transformers with classical self-attention mechanism, we build a lightweight and interpretable transformer-like neural net by unrolling a mixed-graph-based optimization algorithm to forecast traffic with spatial and temporal dimensions. We construct two graphs: an undirected graph $\mathcal{G}^u$ capturing spatial correlations across geography, and a directed graph $\mathcal{G}^d$ capturing sequential relationships over time. We predict future samples of signal $\mathbf{x}$, assuming it is "smooth" with respect to both $\mathcal{G}^u$ and $\mathcal{G}^d$, where we design new $\ell_2$ and $\ell_1$-norm variational terms to quantify and promote signal smoothness (low-frequency reconstruction) on a directed graph. We design an iterative algorithm based on alternating direction method of multipliers (ADMM), and unroll it into a feed-forward network for data-driven parameter learning. We periodically insert graph learning modules for $\mathcal{G}^u$ and $\mathcal{G}^d$ that play the role of self-attention. Experiments show that our unrolled networks achieve competitive traffic forecast performance as state-of-the-art prediction schemes, while reducing parameter counts drastically.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2505.13102
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- hackernews
