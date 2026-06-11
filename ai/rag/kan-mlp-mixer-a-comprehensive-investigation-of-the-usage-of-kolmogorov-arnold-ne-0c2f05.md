---
title: 'KAN-MLP-Mixer: A comprehensive investigation of the usage of Kolmogorov-Arnold
  Networks (KANs) for improving IMU-based Human Activity Recognition'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2605.19031
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523735+00:00'
tags:
- rag
status: new
---

# KAN-MLP-Mixer: A comprehensive investigation of the usage of Kolmogorov-Arnold Networks (KANs) for improving IMU-based Human Activity Recognition

## Summary

arXiv:2605.19031v2 Announce Type: replace 
Abstract: Kolmogorov-Arnold Networks (KANs) have demonstrated an exceptional ability to learn complex functions on clean, low-dimensional data but struggle to maintain performance on noisy and imperfect real-world datasets. In contrast, conventional multi-layer perceptrons (MLPs) are far more tolerant to noise and computationally efficient. Replacing all MLP components with KANs in HAR models often degrades accuracy and computation efficiency, highlighting an open challenge: how to combine KANs' precision with MLPs' noise robustness and efficiency. To address this, we systematically explore various placements of KAN modules within deep HAR networks and propose a hybrid architecture that strategically synergizes the strengths of both paradigms, which uses a KAN-based input embedding layer, retains MLP layers for intermediate feature mixing, and introduces a specialized LarctanKAN module for final activity classification. Across eight public HAR datasets, the hybrid KAN-MLP model achieves an average macro F1 score relative improvement of 5.33\% compared pure-MLP model, significantly outperforming standalone KAN and MLP baselines. Furthermore, integrating this hybrid strategy into other state-of-the-art HAR architectures consistently boosts their performance. Our findings demonstrate that a carefully orchestrated combination of KAN, MLP, or other conventional neural components yields more robust and accurate HAR models for real-world wearable sensing environments.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- rag

## Source

Original source: https://arxiv.org/abs/2605.19031
