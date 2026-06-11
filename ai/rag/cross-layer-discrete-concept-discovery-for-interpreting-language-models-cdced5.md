---
title: Cross-Layer Discrete Concept Discovery for Interpreting Language Models
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2506.20040
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523859+00:00'
tags:
- models
- rag
status: new
---

# Cross-Layer Discrete Concept Discovery for Interpreting Language Models

## Summary

arXiv:2506.20040v3 Announce Type: replace-cross 
Abstract: Interpreting language models remains challenging due to the existence of residual stream, which linearly mixes and duplicates features across adjacent layers, causing single-layer analyses to miss this cross-layer structure. Cross-layer sparse autoencoders (SAEs) address layer mixing but operate in continuous space, where concepts split across many neurons without clear boundaries. We introduce Cross-Layer Vector Quantized-Variational Autoencoder (CLVQ-VAE), a novel framework which maps representations from a lower layer to a higher layer through a discrete vector-quantization bottleneck, collapsing duplicated residual-stream features into compact, interpretable concept vectors. Our approach combines top-k temperature-based sampling with exponential moving average (EMA) codebook updates, providing controlled exploration of the discrete latent space while maintaining codebook diversity. Across both encoder- and decoder-based models on ERASER-Movie, Jigsaw, and AGNews, CLVQ-VAE outperforms clustering, single-layer vector quantized-variational autoencoder (VQ-VAE), and sparse autoencoder (SAE) baselines across three evaluation axes: removing identified concepts drops model accuracy by up to 93%, LLM judges rank our concepts first in 66.7% of comparisons, and human annotators recover model predictions from our visualizations with 78% accuracy versus 54% for clustering.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models
- rag

## Source

Original source: https://arxiv.org/abs/2506.20040
