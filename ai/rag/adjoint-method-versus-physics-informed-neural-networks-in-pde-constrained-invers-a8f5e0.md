---
title: Adjoint Method versus Physics-Informed Neural Networks in PDE-Constrained Inverse
  Problems
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.12337
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.797912+00:00'
tags:
- rag
status: new
---

# Adjoint Method versus Physics-Informed Neural Networks in PDE-Constrained Inverse Problems

## Summary

arXiv:2606.12337v1 Announce Type: cross 
Abstract: Inverse problems governed by partial differential equations (PDEs) are central to computational mechanics and are commonly solved by adjoint-based optimization, while physics-informed neural networks (PINNs) have emerged as a flexible alternative. Their relative performance remains difficult to assess because the two approaches are often compared under different formulations, parameterizations, optimizers, and regularization choices. We present a fair comparison of adjoint optimization and PINNs for PDE-constrained inverse problems. From a common abstract formulation, we instantiate both methods on identical domains, governing equations, observation models, and regularization terms, while matching the optimizer, unknown parameterization, and arithmetic precision wherever applicable. The benchmarks include unsteady Burgers, noisy Darcy permeability inversion, three-dimensional Allen--Cahn reaction identification, and unsteady Navier--Stokes viscosity identification. The results show that the representation of the unknown largely determines the preferred method: grid-based fields favor the discrete adjoint, whereas neural representations are native to PINNs and relevant for closure and constitutive modeling. For time-dependent problems, adjoint inversion can be dominated by trajectory storage and differentiation, while PINNs provide satisfactory reconstructions at lower cost. A PINN-warm-started adjoint strategy then recovers adjoint-level accuracy at substantially reduced cost.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- rag

## Source

Original source: https://arxiv.org/abs/2606.12337
