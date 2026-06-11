---
title: Continual Learning with Support Boundary Experience Blending
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2507.23534
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.798099+00:00'
tags:
- rag
status: new
---

# Continual Learning with Support Boundary Experience Blending

## Summary

arXiv:2507.23534v3 Announce Type: replace 
Abstract: Continual learning (CL) seeks to mitigate catastrophic forgetting when models are trained with sequential tasks. A common approach, experience replay (ER), stores past exemplars but only sparsely approximates the data distribution, yielding fragile and oversimplified decision boundaries. We address this limitation by introducing Support Boundary Data (SBD), generated via differential-privacy-inspired noise into latent features to create boundary-adjacent representations that implicitly regularize decision boundaries. Building on this idea, we propose Experience Blending (EB), a framework that jointly trains on exemplars and SBD through a dual-model aggregation strategy. EB has two components: (1) latent-space noise injection to generate support boundary data, and (2) end-to-end training that jointly leverages exemplars and SBD. Unlike standard experience replay, SBD enriches the feature space near decision boundaries, leading to more stable and robust continual learning. Extensive experiments on CIFAR-10, CIFAR-100, Tiny ImageNet, and ImageNet1K demonstrate consistent accuracy improvements of 10%, 6%, 13%, 2%, respectively.

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

Original source: https://arxiv.org/abs/2507.23534
