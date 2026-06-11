---
title: A theory of learning data statistics in diffusion models, from easy to hard
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2603.12901
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.799502+00:00'
tags: []
status: new
---

# A theory of learning data statistics in diffusion models, from easy to hard

## Summary

arXiv:2603.12901v2 Announce Type: replace-cross 
Abstract: While diffusion models have emerged as a powerful class of generative models, their learning dynamics remain poorly understood. We address this issue first by empirically showing that standard diffusion models trained on natural images exhibit a distributional simplicity bias, learning simple, pair-wise input statistics before specializing to higher-order correlations. We reproduce this behaviour in simple denoisers trained on a minimal data model, the mixed cumulant model, where we precisely control both pair-wise and higher-order correlations of the inputs. We identify a scalar invariant of the model that governs the sample complexity of learning pair-wise and higher-order correlations that we call the diffusion information exponent, in analogy to related invariants in different learning paradigms. Using this invariant, we prove that the denoiser learns simple, pair-wise statistics of the inputs at linear sample complexity, while more complex higher-order statistics, such as the fourth cumulant, require at least cubic sample complexity. We also prove that the sample complexity of learning the fourth cumulant is linear if pair-wise and higher-order statistics share a correlated latent structure. Our work describes a key mechanism for how diffusion models can learn distributions of increasing complexity.

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

Original source: https://arxiv.org/abs/2603.12901
