---
title: Capacity-Constrained Online Convex Optimization with Delayed Feedback
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11711
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.796126+00:00'
tags:
- models
status: new
---

# Capacity-Constrained Online Convex Optimization with Delayed Feedback

## Summary

arXiv:2606.11711v1 Announce Type: new 
Abstract: Online learning with delayed feedback typically assumes that the learner can track all pending rounds until their feedback arrives. In practice, tracking resources are finite, and feedback from untracked rounds is permanently lost. In this paper, we study delayed online convex optimization (OCO) under a hard capacity constraint, where at most $C$ pending rounds can be tracked at any time. To model delay information, we introduce a semi-clairvoyant model that refines the clairvoyant assumption from prior work: rather than requiring delays to be known at prediction time, the learner observes delay expirations online, consistent with the classical unconstrained delayed setting. Our approach proceeds via a reduction to a novel ``delayed and weighted'' OCO problem, using a scheduler that randomizes tracking decisions and importance-weights the resulting observations. For this base problem, we propose and analyze Delayed-Weighted FTRL and its bandit analogue, establishing regret bounds that explicitly characterize the interaction between time-varying weights and delayed feedback. Combining these base learners with our schedulers yields the first regret guarantees for capacity-constrained OCO under convex and strongly convex losses, for both first-order and bandit feedback. For first-order feedback, capacity $C = \Omega(\log T)$ suffices to recover standard delayed OCO rates up to logarithmic factors. For bandit feedback, the regret rates are modulated by powers of $(1 + \sigma_{\text{max}}/C)$, where $\sigma_{\text{max}}$ is the maximum number of pending observations at any time. This allows the regret bound to degrade gracefully when $C < \sigma_{\text{max}}$, while remaining sublinear.

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

Original source: https://arxiv.org/abs/2606.11711
