---
title: Physically Constrained Ensemble Gaussian Process Modelling for Expensive Quantum
  Systems with Heteroskedastic Noise
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11240
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.796790+00:00'
tags:
- models
- rag
status: new
---

# Physically Constrained Ensemble Gaussian Process Modelling for Expensive Quantum Systems with Heteroskedastic Noise

## Summary

arXiv:2606.11240v1 Announce Type: cross 
Abstract: Accurate modeling of quantum many-body systems often requires computationally expensive simulations such as Density Matrix Renormalization Group (DMRG) or Quantum Monte Carlo (QMC) calculations. These methods, while precise, impose significant time and resource constraints, limiting their use in exhaustive parameter exploration. Moreover, these expensive simulations can contain variable errors over the large unknown parameter space, which needs to be quantified and propagated. Thus, predictive modelling is required to estimate the functional space accurately over scarcely sampled data with heteroskedastic noise, while preserving the physical relevance of the estimation. Therefore, we present a Physically Constrained Ensemble Gaussian Process (pc-EGP) framework designed to efficiently model complex and noisy quantum systems under physical consistency constraints. The proposed method first enforces physical constraints as a user controlled weighted penalty to the data-driven loss function of the Gaussian Process (GP) surrogates. Then an ensemble of such GP models is trained with variable noisy simulations via numerical quadrature method where these multiple GP(s) at different nodes is integrated as a quadrature weighted average. We first demonstrate the framework on synthetically generated data before applying to quantum systems. In the first case study, we leverage DMRG simulations of the Bose-Hubbard Model to predict the critical interaction parameter Uc governing the superfluid-to-Mott-insulator transition. In the second case study, we demonstrate our method on QMC simulations, of a quantum liquid confined inside a nanoporous silicate with the goal of optimizing a chemical environment to realize a one-dimensional superfluid. Compared to conventional GP, pc-EGP achieves a better balance of accuracy and physically meaningful predictions.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models
- rag

## Source

Original source: https://arxiv.org/abs/2606.11240
