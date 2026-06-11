---
title: Point-Identification of a Robust Predictor Under Latent Shift with Imperfect
  Proxies
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2603.15158
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.798589+00:00'
tags:
- models
status: new
---

# Point-Identification of a Robust Predictor Under Latent Shift with Imperfect Proxies

## Summary

arXiv:2603.15158v2 Announce Type: replace 
Abstract: Addressing the domain adaptation problem becomes more challenging when distribution shifts across domains stem from latent confounders that affect both covariates and outcomes. Existing proxy-based approaches that address latent shift rely on a strong completeness assumption to uniquely determine (point-identify) a robust predictor. Completeness requires that proxies have sufficient information about variations in latent confounders. For imperfect proxies the mapping from confounders to the space of proxy distributions is non-injective, and multiple latent confounder values can generate the same proxy distribution. This breaks the completeness assumption and observed data are consistent with multiple potential predictors (set-identified). To address this, we introduce latent equivalent classes (LECs). LECs are defined as groups of latent confounders that induce the same conditional proxy distribution. We show that point-identification for the robust predictor remains achievable as long as multiple domains differ sufficiently in how they mix proxy-induced LECs to form the robust predictor. This domain diversity condition is formalized as a cross-domain rank condition on the mixture weights, which is substantially weaker assumption than completeness.
 We introduce the Proximal Quasi-Bayesian Active learning (PQAL) framework, which actively queries
 a small, targeted set of diverse domains that satisfy this rank condition. PQAL can recover the point-identified predictor, demonstrates robustness to varying degrees of shift and outperforms previous methods on synthetic data and semi-synthetic dSprites, IHDP, ACS Folktables datasets.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models

## Source

Original source: https://arxiv.org/abs/2603.15158
