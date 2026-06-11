---
title: Accurate and Resource-Efficient Federated Continual Learning
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11480
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.795892+00:00'
tags:
- rag
status: new
---

# Accurate and Resource-Efficient Federated Continual Learning

## Summary

arXiv:2606.11480v1 Announce Type: new 
Abstract: Federated continual learning (FCL) must learn from distributed task streams under limited resources, such as communication, computation, memory, and label availability. Existing FCL methods often rely on repeated local optimization, replay, and full supervision. Analytic alternatives avoid iterative training and replay, but using high-dimensional random features to improve accuracy requires a second-order feature statistic, the Gram matrix, which has a quadratic communication cost in the random feature size $M$. We propose FedRAN, a resource-aware analytic FCL framework that replaces gradient-based updates with compact random feature statistics. Each client transmits a truncated-SVD summary of its Gram matrix, reducing the dominant second-order upload from quadratic to linear in $M$ for fixed rank. The server performs a two-level QR-SVD subspace merge, spatially across clients and temporally across tasks, and solves a ridge classifier in closed form. FedRAN further supports label scarcity through prototype-based pseudo-labeling. Across CIFAR-100, ImageNet-R, and VTAB datasets, FedRAN improves average accuracy by up to 4.8 percentage points over the strongest baseline, uses 30.6-121.8$\times$ less per-client communication than optimization-based FCL, and is 190.3$\times$ faster on average than gradient-based baselines; with only 20% labels, pseudo-labeling improves average accuracy by up to 6.61 points. These results show that FedRAN enables accurate and resource-efficient FCL under communication, computation, and label constraints. The source code is available at https://github.com/JebacyrilArockiaraj/Fed-RAN-SSL.

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

Original source: https://arxiv.org/abs/2606.11480
