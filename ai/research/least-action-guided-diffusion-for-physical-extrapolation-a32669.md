---
title: Least-Action-Guided Diffusion for Physical Extrapolation
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11277
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.795791+00:00'
tags: []
status: new
---

# Least-Action-Guided Diffusion for Physical Extrapolation

## Summary

arXiv:2606.11277v1 Announce Type: new 
Abstract: Reliable extrapolation remains a central challenge for generative models in computational physics, because models trained over finite ranges of time, parameters, or geometries may produce physically inconsistent predictions outside the training distribution. We introduce a least-action-principle-guided diffusion, LAPG, a framework that promotes physical consistency during inference rather than relying solely on constraints imposed during training. The method combines a conditional score-based diffusion model with an action-derived physical guidance score. In the first stage, the learned score model generates an in-distribution proposal; in the second, an action-based variational prior refines this proposal toward the target out-of-distribution condition. This formulation turns the principle of least action into a differentiable inference-time correction mechanism and provides an alternative to pointwise residual penalties that often require empirical loss balancing.
 We evaluate LAPG on representative ordinary- and partial-differential-equation systems, including free fall, conservative and dissipative spring-mass dynamics, interacting point vortices, and potential flow over parameterized airfoils. In temporal, parameter, and geometric extrapolation tests, LAPG reduces phase drift, preserves dissipative decay, captures vortex motion, and improves the lift response of airfoil flows compared with training-time physics-informed baselines.

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

Original source: https://arxiv.org/abs/2606.11277
