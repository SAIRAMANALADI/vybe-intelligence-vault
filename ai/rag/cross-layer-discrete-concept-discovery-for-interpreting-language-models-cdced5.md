---
title: Cross-Layer Discrete Concept Discovery for Interpreting Language Models
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2506.20040
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.017003+00:00'
tags:
- benchmark
- models
- rag
status: active
id: arxiv:2506.20040
first_seen: '2026-06-12T10:40:06.017003+00:00'
last_seen: '2026-06-12T10:40:06.017003+00:00'
---

# Cross-Layer Discrete Concept Discovery for Interpreting Language Models

## Summary

arXiv:2506.20040v3 Announce Type: replace 
Abstract: Interpreting language models remains challenging due to the existence of residual stream, which linearly mixes and duplicates features across adjacent layers, causing single-layer analyses to miss this cross-layer structure. Cross-layer sparse autoencoders (SAEs) address layer mixing but operate in continuous space, where concepts split across many neurons without clear boundaries. We introduce Cross-Layer Vector Quantized-Variational Autoencoder (CLVQ-VAE), a novel framework which maps representations from a lower layer to a higher layer through a discrete vector-quantization bottleneck, collapsing duplicated residual-stream features into compact, interpretable concept vectors. Our approach combines top-k temperature-based sampling with exponential moving average (EMA) codebook updates, providing controlled exploration of the discrete latent space while maintaining codebook diversity. Across both encoder- and decoder-based models on ERASER-Movie, Jigsaw, and AGNews, CLVQ-VAE outperforms clustering, single-layer vector quantized-variational autoencoder (VQ-VAE), and sparse autoencoder (SAE) baselines across three evaluation axes: removing identified concepts drops model accuracy by up to 93%, LLM judges rank our concepts first in 66.7% of comparisons, and human annotators recover model predictions from our visualizations with 78% accuracy versus 54% for clustering.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2506.20040
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- models
- rag
