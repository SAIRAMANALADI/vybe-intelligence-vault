---
title: Spatially Masked Regression Reveals Local and Distributed Predictability in
  Electrophysiological Recordings
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11415
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.015433+00:00'
tags:
- rag
- youtube
status: active
id: arxiv:2606.11415
first_seen: '2026-06-12T10:40:06.015433+00:00'
last_seen: '2026-06-12T10:40:06.015433+00:00'
---

# Spatially Masked Regression Reveals Local and Distributed Predictability in Electrophysiological Recordings

## Summary

arXiv:2606.11415v1 Announce Type: cross 
Abstract: Neural recordings are often interpreted as local measurements, yet the signal at any one sensor can also reflect structured activity distributed across the broader network. This raises a basic question: to what extent does an electrode's signal reflect local versus distributed information in the underlying system? More specifically, how much of an electrode's activity is carried by its immediate neighborhood, and how much is embedded more broadly across the array? We address this with a Spatially Masked Regression (SMR) framework that reconstructs each electrode's timeseries from the remaining electrodes while excluding a configurable neighborhood around the target. By progressively increasing this mask, spatial locality becomes an experimental control for quantifying how much predictive information survives after nearby channels are withheld. We apply SMR to intracranial EEG with heterogeneous electrode coverage and to scalp EEG with standardized montages over sensorimotor cortex. Using distance correlation between original and reconstructed signals, we find strong within-subject reconstruction in both modalities, substantial residual predictability even when local neighbors are excluded, and markedly stronger cross-subject transfer in EEG than in iEEG. Masking shows that nearby electrodes contribute strongly to reconstruction but do not account for all of it, indicating that individual channels reflect both local redundancy and broader distributed structure. Surrogates that preserve selected marginal or spectral properties while disrupting phase structure or temporal ordering substantially reduce performance, supporting the conclusion that SMR depends on structured temporal and cross-channel organization rather than on marginal statistics alone. These results position SMR as an interpretable framework for quantifying the balance between local and distributed information in recordings.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11415
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- rag
- youtube
