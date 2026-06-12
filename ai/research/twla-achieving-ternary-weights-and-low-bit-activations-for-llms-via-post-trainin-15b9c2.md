---
title: 'TWLA: Achieving Ternary Weights and Low-Bit Activations for LLMs via Post-Training
  Quantization'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.13054
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.104735+00:00'
tags:
- hackernews
- models
status: active
id: arxiv:2606.13054
first_seen: '2026-06-12T10:40:03.104735+00:00'
last_seen: '2026-06-12T10:40:03.104735+00:00'
---

# TWLA: Achieving Ternary Weights and Low-Bit Activations for LLMs via Post-Training Quantization

## Summary

arXiv:2606.13054v1 Announce Type: cross 
Abstract: Large language models (LLMs) exhibit exceptional general language processing capabilities, but their memory and compute costs hinder deployment. Ternarization has emerged as a promising compression technique, offering significant reductions in model size and inference complexity. However, existing methods struggle with heavy-tailed activation distributions and therefore keep activations in high precision, fundamentally limiting end-to-end inference acceleration. To overcome this limitation, we propose TWLA, a post-training quantization (PTQ) framework that achieves 1.58-bit weight compression and 4-bit activation quantization while maintaining high accuracy. TWLA comprises three components: (1) Euclidean-to-Manifold Asymmetric Ternary Quantizer (E2M-ATQ) minimizes layer-output error under weight ternarization via a two-stage optimization from Euclidean initialization to manifold relocation; (2) Kronecker Orthogonal Tri-Modal Shaping (KOTMS) applies a Kronecker-structured orthogonal rotation to reshape weights into ternary-friendly tri-modal distributions, while the shared rotation statistically suppresses activation outliers; and (3) Inter-Layer Aware Activation Mixed Precision (ILA-AMP) explicitly introduces adjacent-layer second-order interaction costs in bit allocation and jointly optimizes for the layer-wise disparity of activation quantization gains induced by the shared orthogonal transform, preventing cascades triggered by a few weak layers. Extensive experiments demonstrate that TWLA maintains high accuracy under W1.58A4, while delivering significant inference acceleration. The code is available at .

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.13054
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- hackernews
- models
