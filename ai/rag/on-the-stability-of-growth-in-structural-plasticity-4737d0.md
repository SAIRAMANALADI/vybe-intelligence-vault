---
title: On the Stability of Growth in Structural Plasticity
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2605.15435
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.798720+00:00'
tags:
- rag
status: new
---

# On the Stability of Growth in Structural Plasticity

## Summary

arXiv:2605.15435v2 Announce Type: replace 
Abstract: Standard deep-learning pipelines usually choose the network architecture before training and keep it fixed throughout optimization. In contrast, a model can also be adapted by editing its structure during training, for example by pruning existing hidden-neuron units or growing new ones. Although growth is appealing for adaptive and continual systems, we show that it is not simply the inverse of pruning. Pruning selects among units that have participated in training from the start, whereas growth inserts new units into an already specialized optimization trajectory. We isolate this insertion problem and show that newborn units are often forward-active but backward-starved: they participate in the forward computation, yet receive much weaker gradient signal than incumbent units. This disadvantage is minor in small MLP benchmarks, but becomes clear in harder image-classification settings with a convolutional trunk. In these settings, \textsc{Grow} can achieve high final accuracy during the structural-editing procedure, while \textsc{Prune} is stronger when performance is averaged over the training trajectory or when the final sparse network is retrained from scratch. Interventions targeting optimizer state, insertion, selection, and trainability show that improving the integration of newborn units can improve adaptive performance, but does not automatically produce better final subnetworks. In continual-learning benchmarks stressing plasticity loss, \textsc{Grow} becomes competitive mainly when new units have enough time to integrate. Together, these results suggest that \textsc{Grow} should be evaluated not only as an architecture-search operator, but as a time-sensitive optimization process whose success depends on insertion stability.

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

Original source: https://arxiv.org/abs/2605.15435
