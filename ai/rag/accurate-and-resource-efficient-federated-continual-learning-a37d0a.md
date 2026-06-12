---
title: Accurate and Resource-Efficient Federated Continual Learning
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11480
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.013510+00:00'
tags:
- dataset
- rag
status: active
id: arxiv:2606.11480
first_seen: '2026-06-12T10:40:06.013510+00:00'
last_seen: '2026-06-12T10:40:06.013510+00:00'
---

# Accurate and Resource-Efficient Federated Continual Learning

## Summary

arXiv:2606.11480v1 Announce Type: new 
Abstract: Federated continual learning (FCL) must learn from distributed task streams under limited resources, such as communication, computation, memory, and label availability. Existing FCL methods often rely on repeated local optimization, replay, and full supervision. Analytic alternatives avoid iterative training and replay, but using high-dimensional random features to improve accuracy requires a second-order feature statistic, the Gram matrix, which has a quadratic communication cost in the random feature size $M$. We propose FedRAN, a resource-aware analytic FCL framework that replaces gradient-based updates with compact random feature statistics. Each client transmits a truncated-SVD summary of its Gram matrix, reducing the dominant second-order upload from quadratic to linear in $M$ for fixed rank. The server performs a two-level QR-SVD subspace merge, spatially across clients and temporally across tasks, and solves a ridge classifier in closed form. FedRAN further supports label scarcity through prototype-based pseudo-labeling. Across CIFAR-100, ImageNet-R, and VTAB datasets, FedRAN improves average accuracy by up to 4.8 percentage points over the strongest baseline, uses 30.6-121.8$\times$ less per-client communication than optimization-based FCL, and is 190.3$\times$ faster on average than gradient-based baselines; with only 20% labels, pseudo-labeling improves average accuracy by up to 6.61 points. These results show that FedRAN enables accurate and resource-efficient FCL under communication, computation, and label constraints. The source code is available at https://github.com/JebacyrilArockiaraj/Fed-RAN-SSL.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11480
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- dataset
- rag
