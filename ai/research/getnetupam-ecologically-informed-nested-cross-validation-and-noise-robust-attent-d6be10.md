---
title: 'GetNetUPAM: Ecologically Informed Nested Cross-Validation and Noise-Robust
  Attention for Marine Bioacoustic Monitoring'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2509.04682
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.485300+00:00'
tags:
- benchmark
status: new
---

# GetNetUPAM: Ecologically Informed Nested Cross-Validation and Noise-Robust Attention for Marine Bioacoustic Monitoring

## Summary

arXiv:2509.04682v2 Announce Type: replace-cross 
Abstract: Deploying reliable bioacoustic monitoring systems requires models that generalize under high-noise, low-SNR conditions and evaluation protocols that expose deployment-relevant failure modes, gaps largely unaddressed in current UPAM practice. Intrinsic noise, variable propagation, and mixed biological and anthropogenic sources induce distribution shifts that conventional models and single-split evaluations obscure, inflating performance and masking instability. We introduce GetNetUPAM, a hierarchical nested cross-validation framework that uses the nested stage to quantify model stability rather than tune for inflated hold-out scores. By partitioning data into site-year blocks, GetNetUPAM preserves ecological heterogeneity and forces each outer fold to represent a distinct environmental regime, preventing overfitting to localized noise or sensor artifacts. Inner stratified folds measure generalization across the full UPAM signal distribution, enforcing strict separation between model development and the outer held-out deployment condition. Using GetNetUPAM, we evaluate the Adaptive Resolution Pooling and Attention Network (ARPA-N), a CNN architecture for irregular spectrogram dimensions. ARPA-N integrates CBAM spatial attention as a learned noise suppressor, producing attention maps that localize true call structure and avoid the global, non-biological cues exploited by standard CNNs on long-window data. Under GetNetUPAM, ARPA-N generalizes robustly across diverse environmental regimes. In the zero-training support Balleny Islands region, it reduces false positives per hour by over an order of magnitude (approximately 10x) at fixed 90 percent recall, yielding consistently improved metrics across folds. These advances provide a reproducible benchmark and move UPAM toward scalable, deployment-reliable ecological monitoring.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2509.04682
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
