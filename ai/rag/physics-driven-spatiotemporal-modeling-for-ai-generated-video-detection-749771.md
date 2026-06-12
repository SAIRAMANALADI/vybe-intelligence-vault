---
title: Physics-Driven Spatiotemporal Modeling for AI-Generated Video Detection
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2510.08073
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.018875+00:00'
tags:
- paper
- rag
- youtube
status: active
id: arxiv:2510.08073
first_seen: '2026-06-12T10:40:06.018875+00:00'
last_seen: '2026-06-12T10:40:06.018875+00:00'
---

# Physics-Driven Spatiotemporal Modeling for AI-Generated Video Detection

## Summary

arXiv:2510.08073v2 Announce Type: replace-cross 
Abstract: AI-generated videos have achieved near-perfect visual realism (e.g., Sora), urgently necessitating reliable detection mechanisms. However, detecting such videos faces significant challenges in modeling high-dimensional spatiotemporal dynamics and identifying subtle anomalies that violate physical laws. In this paper, we propose the first physics-driven AI-generated video detection paradigm based on probability flow conservation principles. Specifically, we propose a statistic called Normalized Spatiotemporal Gradient (NSG), which quantifies the ratio of spatial probability gradients to temporal density changes, explicitly capturing deviations from natural video dynamics. Leveraging pre-trained diffusion models, we develop an NSG estimator through spatial gradients approximation and motion-aware temporal modeling without complex motion decomposition while preserving physical constraints. Building on this, we propose an NSG-based video detection method (NSG-VD) that computes the Maximum Mean Discrepancy (MMD) between NSG features of the test and real videos as a detection metric. Last, we derive an upper bound of NSG feature distances between real and generated videos, proving that generated videos exhibit amplified discrepancies due to distributional shifts. Extensive experiments confirm that NSG-VD outperforms state-of-the-art baselines by 16.00% in Recall and 10.75% in F1-Score, validating the superior performance of NSG-VD. The source code is available at https://github.com/ZSHsh98/NSG-VD.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2510.08073
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- paper
- rag
- youtube
