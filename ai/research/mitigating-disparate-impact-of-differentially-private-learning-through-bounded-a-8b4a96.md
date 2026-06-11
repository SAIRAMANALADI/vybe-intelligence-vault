---
title: Mitigating Disparate Impact of Differentially Private Learning through Bounded
  Adaptive Clipping
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2506.01396
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.798023+00:00'
tags: []
status: new
---

# Mitigating Disparate Impact of Differentially Private Learning through Bounded Adaptive Clipping

## Summary

arXiv:2506.01396v2 Announce Type: replace 
Abstract: Differential privacy (DP) has become an essential framework for privacy-preserving machine learning. Existing DP learning methods, however, often have disparate impacts on model predictions, e.g., for minority groups. Gradient clipping, which is often used in DP learning, can suppress larger gradients from challenging samples. We show that this problem is amplified by adaptive clipping, which will often shrink the clipping bound to tiny values to match a well-fitting majority, while significantly reducing the accuracy for others. We propose bounded adaptive clipping, which introduces a tunable lower bound to prevent excessive gradient suppression. Our method improves worst-class accuracy by over 10 percentage points on Skewed and Fashion MNIST compared to unbounded adaptive clipping, 7 points compared to Automatic clipping, and 5 points compared to constant clipping. The code is available at https://github.com/TrustworthyMLHelsinki/adaptive-clipping-fairness.

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

Original source: https://arxiv.org/abs/2506.01396
