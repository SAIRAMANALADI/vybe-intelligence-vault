---
title: Noise-Aware Framework for Correcting Corrupted Labels
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11695
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522683+00:00'
tags: []
status: new
---

# Noise-Aware Framework for Correcting Corrupted Labels

## Summary

arXiv:2606.11695v1 Announce Type: cross 
Abstract: High-quality labeled data is essential for training reliable ML/DL models. However, real-world datasets often contain a considerable proportion of corrupted labels, which can severely degrade model performance. To address this problem, we propose CANOLA, a novel framework for correcting corrupted labels through noise-aware learning and iterative label refinement. CANOLA explicitly estimates the underlying noise distribution of the dataset and incorporates this information into the training of a noise-aware Deep Neural Network. By incorporating noise characteristics during learning, CANOLA enables the model to down-weight unreliable supervision signals and focus on trustworthy patterns, thereby improving robustness and generalization. Label correction is performed via cautious, iterative soft label refinement, in which model predictions are blended with observed labels to prevent premature or erroneous updates. This progressive refinement allows the dataset to be repaired in a stable and controlled manner. We evaluate CANOLA on six widely used datasets under realistic noisy labeling scenarios. Experimental results show that CANOLA consistently outperforms SOTA label correction methods, achieving relative improvements ranging from 19% to 52% in error reduction. Moreover, models trained on datasets corrected by CANOLA obtain substantial downstream performance gains. Even simple classifiers trained on CANOLA's corrected data can outperform complex model-centric approaches by margins of up to 67%.

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

Original source: https://arxiv.org/abs/2606.11695
