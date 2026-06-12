---
title: 'HAMNO: A Hierarchical Adaptive Multi-scale Neural Operator with Physics-Informed
  Learning for Dynamical Systems'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11963
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.014329+00:00'
tags:
- hackernews
status: active
id: arxiv:2606.11963
first_seen: '2026-06-12T10:40:06.014329+00:00'
last_seen: '2026-06-12T10:40:06.014329+00:00'
---

# HAMNO: A Hierarchical Adaptive Multi-scale Neural Operator with Physics-Informed Learning for Dynamical Systems

## Summary

arXiv:2606.11963v1 Announce Type: new 
Abstract: Neural operators provide a powerful framework for learning solution mappings of partial differential equations directly in function space. However, many existing architectures still struggle to represent nonlinear time-dependent systems that involve multi-scale structures, long-range interactions, and stable long-time evolution. In this work, we introduce the Hierarchical Adaptive Multi-scale Neural Operator (HAMNO), a neural-operator architecture that combines local convolutional representations, global spectral operators, and hierarchical encoder-decoder processing. The central component of HAMNO is a data-dependent gating mechanism that adaptively balances local and global information at each spatial location, allowing the model to resolve fine-scale features while preserving long-range dependencies.
 We further develop a physics-informed extension, PI-HAMNO, based on a multi-objective loss strategy that combines data fitting with strong- and weak-form physics constraints. The strong-form term penalizes the domain-integrated squared PDE residual in physical coordinates, while the weak-form term is constructed by multiplying the governing residual by finite-element test functions and evaluating the resulting element integrals using centroid-based tetrahedral quadrature. The framework is evaluated on non-periodic Allen-Cahn (AC), Cahn-Hilliard (CH), and Swift-Hohenberg (SH) equations defined on cubic domains. Across long-horizon rollout, data-limited training, out-of-distribution initial-condition shifts, and random-seed variations, HAMNO improves predictive accuracy over standard neural-operator baselines, while PI-HAMNO further enhances stability, physical consistency, and data efficiency. The implementation is publicly available at https://github.com/MBamdad/HAMNO .

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11963
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- hackernews
