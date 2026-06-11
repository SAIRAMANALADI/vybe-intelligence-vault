---
title: Deep Learning of Solver-Aware Turbulence Closures from Nudged LES Dynamics
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2604.23874
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.799543+00:00'
tags:
- rag
status: new
---

# Deep Learning of Solver-Aware Turbulence Closures from Nudged LES Dynamics

## Summary

arXiv:2604.23874v3 Announce Type: replace-cross 
Abstract: The differentiable physics paradigm may be leveraged as an a-posteriori approach for discovering turbulence closure models by embedding a neural network parameterization directly inside the solver and optimizing it given potentially sparse target data. This addresses a key limitation of a-priori learning where direct numerical simulation (DNS) data is used to approximate the subgrid stress with the assumption of a low-pass filter. Closures trained in this a-priori manner frequently lead to unstable deployments due to the mismatch between the assumed filter and the effect of numerical discretizations and coarse-graining. In comparison, while typically stable during deployment, a-posteriori learning incurs high computational costs due to the need to backpropagate through a large eddy simulation (LES) solver. Furthermore, a-posteriori methods are challenging to apply broadly since they require significant modification of existing solvers. Finally, both approaches are limited when generalization is desired across different numerical schemes with their implicit filtering characteristics. In this work, we present a deep-learning approach for turbulence closure modeling built on the continuous data assimilation framework. Our approach enables the a-priori training of closures using sparsely observed DNS data without modifying or differentiating through the LES solver, while preserving stability during deployment for the recovery of invariant statistics. We focus on the model's ability to adapt to different discretizations by explicitly conditioning it on the numerical scheme. We use two- and three-dimensional canonical cases to test our framework and show that the learned correction systematically tracks the discretization error of the coarse solver.

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

Original source: https://arxiv.org/abs/2604.23874
