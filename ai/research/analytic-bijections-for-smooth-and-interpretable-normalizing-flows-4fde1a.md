---
title: Analytic Bijections for Smooth and Interpretable Normalizing Flows
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2601.10774
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.798318+00:00'
tags: []
status: new
---

# Analytic Bijections for Smooth and Interpretable Normalizing Flows

## Summary

arXiv:2601.10774v2 Announce Type: replace 
Abstract: A key challenge in normalizing flows is finding expressive invertible scalar bijections. Existing approaches face trade-offs: affine transformations are smooth and analytically invertible but lack expressivity; monotonic splines offer local control but are only piecewise smooth and act on bounded domains; residual flows achieve smoothness but need numerical inversion. We introduce three families of analytic bijections that are globally smooth ($C^\infty$), defined on all of $\mathbb{R}$, and analytically invertible in closed form, combining the favorable properties of prior approaches. Beyond serving as drop-in replacements in coupling flows, where they match or exceed spline performance, we develop radial flows: a novel architecture using direct parametrization that transforms the radial coordinate while preserving angular direction. Radial flows exhibit exceptional training stability, produce geometrically interpretable transformations, and on targets with radial structure can achieve comparable quality to coupling flows with $1000\times$ fewer parameters. We provide comprehensive evaluation on 1D and 2D benchmarks, and demonstrate applicability to higher-dimensional physics problems through experiments on $\phi^4$ lattice field theory, where our bijections outperform affine baselines and enable problem-specific designs that address mode collapse.

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

Original source: https://arxiv.org/abs/2601.10774
