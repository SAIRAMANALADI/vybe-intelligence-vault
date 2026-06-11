---
title: Structure-Preserving Neural Surrogates with Tractable Uncertainty Quantification
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11650
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.796036+00:00'
tags: []
status: new
---

# Structure-Preserving Neural Surrogates with Tractable Uncertainty Quantification

## Summary

arXiv:2606.11650v1 Announce Type: new 
Abstract: Recent advances in scientific machine learning provide a means of near-real-time solution to partial differential equations (PDEs), but lack the theoretical underpinnings of conventional simulators that support contemporary verification and validation. In this work, we construct data-driven reduced-order models that serve as structure-preserving, real-time surrogates. Remarkably, the exterior calculus that imposes physical conservation structure also exposes topological structure that we use to build a Gaussian process (GP) representation of uncertainty in state-flux relationships, ultimately yielding a Dirichlet-to-Neumann map for quantities of interest with closed-form expressions for posterior uncertainty. We specifically propose structure-preserving $H(\mathrm{div})$--$L^2$ subspaces of conventional Raviart--Thomas and $dgP_0$ elements prescribed by a lightweight transformer. Reduced-order dynamics consistent with this subspace are learned by posing a conservation law in which a GP describes the fluxes between volumes. This work hinges on a novel interface between mixed FEM spaces and GP regression; when training is posed as the optimal recovery problem (ORP), the resulting GP regression can be written as an optimization problem with equality constraints that impose a conservation structure, amenable to a fast Schur-complement training strategy. The trained model can then be solved in real time with closed-form estimators for boundary fluxes driven by prescribed Dirichlet data. The paper includes RKHS posterior error bounds for linear functionals to support uncertainty quantification, as well as numerical experiments demonstrating the accuracy of the posterior distribution as a surrogate for error estimation.

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

Original source: https://arxiv.org/abs/2606.11650
