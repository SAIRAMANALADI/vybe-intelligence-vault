---
title: 'Mirror Descent Beyond Euclidean Stability: An Exponential Separation in Initialization
  Sensitivity'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11431
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.795864+00:00'
tags: []
status: new
---

# Mirror Descent Beyond Euclidean Stability: An Exponential Separation in Initialization Sensitivity

## Summary

arXiv:2606.11431v1 Announce Type: new 
Abstract: Mirror Descent (MD) extends Gradient Descent (GD) beyond Euclidean geometry and has recently reappeared as a lens for KL-regularized policy optimization in reinforcement learning and LLM post-training. This raises a basic robustness question, crucial to reproducibility and reliability: how sensitive are MD dynamics to their inputs? We focus on initialization, often itself a pretrained or previously aligned model. Quadratic-regularized MD, including GD and Mahalanobis geometries, is well-known to be stable for convex smooth objectives. We show a sharp contrast: once the regularizer is non-quadratic, MD can be exponentially more sensitive to initialization than GD, even with a well-conditioned regularizer in Euclidean norm. We give a three-dimensional construction with a convex, smooth objective and a strongly convex, smooth, well-conditioned regularizer where an initial $\varepsilon$ perturbation is quickly amplified to $\min\{\text{polylog}^{-1}(1/\varepsilon), \varepsilon e^{\Omega(\eta T)}\}$ after $T$ iterations of MD with step size $\eta$. For canonical KL-regularized MD on the simplex, we show that even linear objectives can amplify an initial $\varepsilon$ perturbation exponentially fast in high-dimensional or near-boundary regimes. Finally, we show that adding a Bregman regularization term toward an anchor point can stabilize the dynamics while largely preserving the optimization guarantees, and that the choice of anchor is crucial: anchoring at the initialization only partially mitigates the instability, whereas anchoring at a fixed point yields a more stable mechanism.

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

Original source: https://arxiv.org/abs/2606.11431
