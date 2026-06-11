---
title: OCSVM-Guided Representation Learning for Unsupervised Anomaly Detection
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2507.21164
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523866+00:00'
tags: []
status: new
---

# OCSVM-Guided Representation Learning for Unsupervised Anomaly Detection

## Summary

arXiv:2507.21164v2 Announce Type: replace-cross 
Abstract: Unsupervised anomaly detection (UAD) aims to detect anomalies without labeled data, a necessity in many machine learning applications where anomalous samples are rare or not available. Most state-of-the-art methods fall into two categories: reconstruction-based approaches, which often reconstruct anomalies too well, and decoupled representation learning with density estimators, which can suffer from suboptimal feature spaces. While some recent methods attempt to couple feature learning and anomaly detection, they often rely on surrogate objectives, restrict kernel choices, or introduce approximations that limit their expressiveness and robustness. To address this challenge, we propose a novel method that couples representation learning with an analytically solvable One-Class SVM (OCSVM), through a custom loss formulation that directly aligns latent features with the OCSVM decision boundary. The model is evaluated on two tasks: a \deleted{new} benchmark based on MNIST-C, and a challenging brain MRI \deleted{subtle} lesion detection task. Unlike most methods that focus on large, hyperintense lesions at the image level, our approach succeeds to target small, non-hyperintense lesions, while we evaluate voxel-wise metrics, addressing a more clinically relevant scenario. Both experiments evaluate a form of robustness to domain shifts, including corruption types in MNIST-C and texture or population age variations in MRI. Results demonstrate performance and robustness of our proposed model, highlighting its potential for general UAD and real-world medical imaging applications. The source code is available at https://github.com/Nicolas-Pinon/uad_ocsvm_guided_repr_learning.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- None

## Source

Original source: https://arxiv.org/abs/2507.21164
