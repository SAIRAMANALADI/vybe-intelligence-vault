---
title: Hybrid Iterative Neural Low-Regularity Integrator for Nonlinear Dispersive
  Equations
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2605.04853
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.798672+00:00'
tags: []
status: new
---

# Hybrid Iterative Neural Low-Regularity Integrator for Nonlinear Dispersive Equations

## Summary

arXiv:2605.04853v2 Announce Type: replace 
Abstract: We propose HIN-LRI, a hybrid framework that augments a classical numerical solver with a neural operator trained to correct the solver's structured truncation error. A base low-regularity integrator provides a consistent first-order approximation to nonlinear dispersive PDEs, while a lightweight neural network, operating on a low-dimensional latent manifold, learns the residual defect that analytical methods cannot close. An explicit time-step scaling on the neural correction ensures that its Lipschitz contribution remains $\mathcal{O}(\tau)$, yielding a Gronwall stability factor bounded uniformly in the step size and independent of the spatial resolution. The network is trained end-to-end through a solver-in-the-loop objective that unrolls the full iteration and penalises trajectory error in a Bourgain-type norm, aligning learning with multi-step solver dynamics rather than isolated one-step targets. Under stated assumptions, the global error satisfies $C(\varepsilon_{net}+\delta)\,\tau^\gamma\ln(1/\tau)$, where $\varepsilon_{net}$ measures the network approximation quality and $\delta$ the training shortfall. Experiments on three dispersive benchmarks with rough data show that HIN-LRI improves accuracy over analytical integrators, splitting methods, and neural PDE surrogates, with stable spatial refinement, effective out-of-distribution transfer, and modest online overhead.

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

Original source: https://arxiv.org/abs/2605.04853
