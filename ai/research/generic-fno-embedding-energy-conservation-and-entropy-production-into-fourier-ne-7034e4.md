---
title: 'GENERIC-FNO: Embedding Energy Conservation and Entropy Production into Fourier
  Neural Operators'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.08343
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.798873+00:00'
tags: []
status: new
---

# GENERIC-FNO: Embedding Energy Conservation and Entropy Production into Fourier Neural Operators

## Summary

arXiv:2606.08343v2 Announce Type: replace 
Abstract: We introduce GENERIC-FNO, the first neural operator to embed the full GENERIC (metriplectic) structure of nonequilibrium thermodynamics -- reversible, energy-conserving dynamics and irreversible, entropy-producing dynamics coupled through the degeneracy conditions -- directly in function space. Existing structure-preserving neural operators enforce at most a single conservation law or reversible (Hamiltonian) structure, while thermodynamically consistent learning has been confined to finite-dimensional, graph, or particle systems. GENERIC-FNO closes this gap: it learns the energy and entropy functionals as neural operators and parameterizes the Poisson and friction operators as diagonal Fourier multipliers sandwiched between rank-one projections that enforce the degeneracy conditions exactly, by construction, with no penalty term, update projection, or residual. The degeneracy identities hold to machine precision (residuals ~10^-13) for any initialization, dimension, or resolution, so the continuous-time dynamics conserve the learned energy and produce entropy exactly; the explicit time stepping adds only a small O(dt^2) drift (per-step residual ~10^-6). We further note that the (E,S,L,M) decomposition of a given flow is not unique, and introduce a gauge-invariant dissipation diagnostic separating reversible from dissipative dynamics independently of the learned functionals. Across three operator backbones (1D/2D FNOs and DeepONet) and four PDEs spanning reversible, dissipative, and mixed regimes, GENERIC-FNO preserves its exact structural guarantees zero-shot across a 4x super-resolution range (64 to 256), recovers the ground-truth ordering of physical dissipation, and is competitive with strong unconstrained and energy-penalized baselines, outperforming them on several dissipative and mixed problems at comparable or fewer parameters.

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

Original source: https://arxiv.org/abs/2606.08343
