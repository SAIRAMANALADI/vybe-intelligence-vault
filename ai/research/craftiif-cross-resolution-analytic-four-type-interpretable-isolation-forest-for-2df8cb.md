---
title: 'CRAFTIIF: Cross-Resolution Analytic Four-Type Interpretable Isolation Forest
  for Multivariate Time Series Anomaly Detection'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.13486
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.484282+00:00'
tags:
- benchmark
- dataset
status: new
---

# CRAFTIIF: Cross-Resolution Analytic Four-Type Interpretable Isolation Forest for Multivariate Time Series Anomaly Detection

## Summary

arXiv:2606.13486v1 Announce Type: cross 
Abstract: Anomaly detection in multivariate time series is challenged by four structurally distinct anomaly types -- point (isolated spikes), distributional (level shifts), temporal (rhythm changes), and collective (inter-sensor correlation breakdowns) -- each requiring different feature representations. Most unsupervised methods target only one or two types and provide limited interpretability. We present CRAFTIIF (Cross-Resolution Analytic Four-Type Interpretable Isolation Forest), a fully unsupervised framework targeting all four types without dataset-specific tuning. CRAFTIIF generates K=500 random analytic wavelet feature draws across four families (Morlet, DOG, Haar, Coiflet), each targeting a specific anomaly type, feeding five structured Isolation Forests -- one per type plus a meta-IF for compound anomalies. An adaptive Otsu/MAD threshold calibrates detection automatically across anomaly rates from 0.1% to 69.2%. Because each IF is trained exclusively on type-specific features, branch firing provides direct anomaly-type attribution by construction, without post-hoc explanation. Evaluated on all 19 datasets of the mTSBench benchmark (Zhou et al., TMLR 2026), CRAFTIIF achieves mean F1=0.228 (all 19 datasets) and F1=0.322 (13 detectable datasets), ranking first among all 25 evaluated methods on VUS-PR (0.463 vs. previous best 0.329, +40.7%). A diagnostic framework -- oracle F1, detectability limits, and branch separation ratios -- identifies 6 of 19 datasets as fundamentally undetectable by any unsupervised method. Ablation over 11 conditions confirms adaptive thresholding (+38% F1), four-branch structure (+20%), and meta-IF (+23%) are each essential. Code: https://github.com/smitswil/craftiif

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.13486
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- dataset
