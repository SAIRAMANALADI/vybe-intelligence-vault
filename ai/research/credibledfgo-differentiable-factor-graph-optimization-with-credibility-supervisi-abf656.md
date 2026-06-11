---
title: 'CredibleDFGO: Differentiable Factor Graph Optimization with Credibility Supervision'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2605.06100
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524275+00:00'
tags:
- models
status: new
---

# CredibleDFGO: Differentiable Factor Graph Optimization with Credibility Supervision

## Summary

arXiv:2605.06100v2 Announce Type: replace-cross 
Abstract: Global navigation satellite system (GNSS) positioning is widely used for urban navigation, but the covariance reported by the GNSS solver is often unreliable in urban canyons. Existing differentiable factor graph optimization (DFGO) methods learn measurement weighting through the solver, but they still use position-only objectives. As a result, the position estimate may improve while the reported covariance remains too small, too large, or incorrectly oriented. We propose CredibleDFGO (CDFGO), a differentiable GNSS factor graph framework that makes covariance credibility an explicit training target. A Weighting Generation Network (WGN) predicts per-satellite reliability weights, and a differentiable Gauss-Newton solver maps these weights to a position estimate and a Hessian-derived posterior covariance. We use proper scoring rules to supervise the East-North predictive distribution end to end. We study negative log-likelihood (NLL), the energy score (ES), and their combination. Results on three UrbanNav test scenes show consistent gains in covariance credibility. Positioning accuracy also improves on the medium-urban and harsh-urban scenes; on the deep-urban scene, both the mean horizontal error and the 95th-percentile error improve. On the harsh-urban Mong Kok (MK) scene, CDFGO-Combined reduces the mean horizontal error from 13.77 m to 11.68 m, reduces NLL from 40.63 to 6.59, and reduces ES from 12.31 to 9.05 relative to DFGO (MAE). Case studies link the MK improvement to better axis-wise consistency, more credible local covariance ellipses, and satellite-level reweighting.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models

## Source

Original source: https://arxiv.org/abs/2605.06100
