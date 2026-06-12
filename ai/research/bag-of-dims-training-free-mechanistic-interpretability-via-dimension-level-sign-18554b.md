---
title: 'Bag of Dims: Training-Free Mechanistic Interpretability via Dimension-Level
  Sign Patterns'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12629
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.482721+00:00'
tags:
- mistral
- models
status: new
---

# Bag of Dims: Training-Free Mechanistic Interpretability via Dimension-Level Sign Patterns

## Summary

arXiv:2606.12629v1 Announce Type: cross 
Abstract: We show that the standard basis of transformer hidden states already provides a training-free, architecture-general feature basis. Individual dimensions encode semantic content via their signs and confidence via their magnitudes, functioning as independent binary registers. We validate this Bag of Dims framework across three model families (Qwen 3.5-4B, Gemma 3-4B, Mistral 7B) through four progressive experiments. Sign patterns alone carry predictive content: replacing all magnitudes with unity achieves 72-93% top-5 next-token accuracy through the LM head, and pure Hamming scoring without any decoder reaches 80-90% top-4096. These sign patterns organize into semantic features: using a single-token type cache (one forward pass per vocabulary token, no context), we discover 175 categories via per-dimension sign consistency (mean AUC 0.80) from 50 anchors with zero training. A trained probe adds only +0.018 AUC and converges to axis-aligned weights, confirming negligible cross-dimension structure. This structure extends to attention: all 175 categories remain discoverable in K and V projections. On the write side, static FFN weight inspection links 20% of features to individual writer neurons (>0.70 agreement; random controls: 0%), with top-200 neuron coalitions achieving >0.70 agreement on 99.9% of prototypes via majority vote. Fully unsupervised discovery (random seeds, no labels) scales to 1500 features at 100% yield and 99% sparsity across all three models, with pairwise MI of 0.0014 bits confirming low inter-dimension coupling. These results establish that the standard basis already suffices for feature reading throughout the transformer compute pathway, requiring no training, no optimization, and no GPU-days beyond a single forward pass per vocabulary token.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12629
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- mistral
- models
