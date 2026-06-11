---
title: 'Beyond Continuity: Simulation-free Reconstruction of Discrete Branching Dynamics
  from Single-cell Snapshots'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2605.00545
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524250+00:00'
tags: []
status: new
---

# Beyond Continuity: Simulation-free Reconstruction of Discrete Branching Dynamics from Single-cell Snapshots

## Summary

arXiv:2605.00545v2 Announce Type: replace-cross 
Abstract: Inferring cellular trajectories from destructive snapshots is complicated by the challenges of stochasticity and non-conservative mass dynamics such as cell proliferation and apoptosis. Existing unbalanced Optimal Transport (OT) methods treat mass as a continuous fluid, performing inference at the population level. However, this macroscopic view often fails to capture the discrete, jump-like nature of birth-death events at single-cell resolution, which is essential for understanding lineage branching and fate decisions. We present Unbalanced Schr\"odinger Bridge (USB), a simulation-free framework for learning underlying dynamics that effectively integrates both stochastic and unbalanced effects which also models the discrete, jump-like birth-death dynamics at single-cell resolution. Theoretically, USB provides a tractable solution to the Branching Schr\"odinger Bridge (BSB) problem, offering a rigorous microscopic interpretation where individual cells undergo both Brownian motion and discrete birth-death jumps. Technically, the method implements an efficient solver by introducing a simulation-free training objective that effectively scales to high-dimensional omics data. Empirically, we demonstrate on both simulated and real-world datasets that USB not only achieves trajectory reconstruction performance better than or comparable to deterministic baselines but also uniquely enables realistic discrete simulation of birth-death dynamics at single-cell resolution.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- None

## Source

Original source: https://arxiv.org/abs/2605.00545
