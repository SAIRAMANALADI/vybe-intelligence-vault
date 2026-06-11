---
title: Triangular-Reference Schr\"odinger Bridges for Time Series Generation
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2605.27478
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.799631+00:00'
tags: []
status: new
---

# Triangular-Reference Schr\"odinger Bridges for Time Series Generation

## Summary

arXiv:2605.27478v3 Announce Type: replace-cross 
Abstract: Schr\"odinger bridges for time series (SBTS) generate synthetic paths by projecting, in relative entropy, a Brownian reference onto the path laws that match the joint distribution of the data on the observation grid. The Brownian reference, however, fixes the quadratic variation of the generated paths, which is restrictive when stochastic volatility, correlated noise, or rank-deficient covariance structures must be reproduced. We introduce "Triangular-Reference Schr\"odinger Bridges for Time Series" (TR-SBTS), which keeps the entropy-projection backbone of SBTS but replaces the Brownian reference by a triangular, volatility-informed, intervalwise frozen reference on a state augmented with latent covariance descriptors. The construction remains a single entropy projection on the augmented state: the minimiser is the \(h\)-transform of the reference, and on each frozen interval the optimal drift has the logarithmic-gradient form \(b^\star(t,x)=A\,\nabla\log H(t,x)\), intrinsic to the active covariance directions when the frozen covariance \(A\) is degenerate. We prove stability of the frozen approximation and consistency of the associated regularised kernel estimators, describe a reference-aware Nadaraya--Watson implementation of the conditional next-increment law, and evaluate the construction on numerical experiments.

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

Original source: https://arxiv.org/abs/2605.27478
