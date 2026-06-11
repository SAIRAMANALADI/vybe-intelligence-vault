---
title: 'HAMNO: A Hierarchical Adaptive Multi-scale Neural Operator with Physics-Informed
  Learning for Dynamical Systems'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11963
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.796306+00:00'
tags: []
status: new
---

# HAMNO: A Hierarchical Adaptive Multi-scale Neural Operator with Physics-Informed Learning for Dynamical Systems

## Summary

arXiv:2606.11963v1 Announce Type: new 
Abstract: Neural operators provide a powerful framework for learning solution mappings of partial differential equations directly in function space. However, many existing architectures still struggle to represent nonlinear time-dependent systems that involve multi-scale structures, long-range interactions, and stable long-time evolution. In this work, we introduce the Hierarchical Adaptive Multi-scale Neural Operator (HAMNO), a neural-operator architecture that combines local convolutional representations, global spectral operators, and hierarchical encoder-decoder processing. The central component of HAMNO is a data-dependent gating mechanism that adaptively balances local and global information at each spatial location, allowing the model to resolve fine-scale features while preserving long-range dependencies.
 We further develop a physics-informed extension, PI-HAMNO, based on a multi-objective loss strategy that combines data fitting with strong- and weak-form physics constraints. The strong-form term penalizes the domain-integrated squared PDE residual in physical coordinates, while the weak-form term is constructed by multiplying the governing residual by finite-element test functions and evaluating the resulting element integrals using centroid-based tetrahedral quadrature. The framework is evaluated on non-periodic Allen-Cahn (AC), Cahn-Hilliard (CH), and Swift-Hohenberg (SH) equations defined on cubic domains. Across long-horizon rollout, data-limited training, out-of-distribution initial-condition shifts, and random-seed variations, HAMNO improves predictive accuracy over standard neural-operator baselines, while PI-HAMNO further enhances stability, physical consistency, and data efficiency. The implementation is publicly available at https://github.com/MBamdad/HAMNO .

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- None

## Source

Original source: https://arxiv.org/abs/2606.11963
