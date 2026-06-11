---
title: 'Conformal Bayes under Label Shift: Post-Hoc Calibration vs. In-Training Adaptation'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11865
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.797493+00:00'
tags:
- rag
status: new
---

# Conformal Bayes under Label Shift: Post-Hoc Calibration vs. In-Training Adaptation

## Summary

arXiv:2606.11865v1 Announce Type: cross 
Abstract: Conformal Bayes combines Bayesian posterior predictives with conformal calibration to produce prediction sets that are both statistically valid and geometrically efficient. We study conformal Bayes under label shift from a unified perspective, identifying two complementary approaches that restore nominal target-domain coverage through importance-weighted conformal calibration but operate through independent mechanisms. \emph{Post-hoc calibration} tilts the posterior predictive toward the target domain and corrects the conformal threshold via an importance-weighted quantile, leaving the parameter posterior unchanged. \emph{In-training adaptation} tilts the parameter posterior itself to the target domain, producing a corrected predictive whose highest predictive density region serves as the highest predictive density (HPD) based prediction set under the fitted target predictive; efficiency is model-dependent and does not imply finite-sample conditional optimality. Two controlled experiments show that in an unbiased training regime both strategies achieve valid coverage equally, while in a lead-optimization regime in-training adaptation acts as a debiasing operator, reducing interval width at unchanged coverage.

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

Original source: https://arxiv.org/abs/2606.11865
