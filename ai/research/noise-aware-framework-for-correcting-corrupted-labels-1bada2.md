---
title: Noise-Aware Framework for Correcting Corrupted Labels
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11695
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.014000+00:00'
tags:
- dataset
status: active
id: arxiv:2606.11695
first_seen: '2026-06-12T10:40:06.014000+00:00'
last_seen: '2026-06-12T10:40:06.014000+00:00'
---

# Noise-Aware Framework for Correcting Corrupted Labels

## Summary

arXiv:2606.11695v1 Announce Type: new 
Abstract: High-quality labeled data is essential for training reliable ML/DL models. However, real-world datasets often contain a considerable proportion of corrupted labels, which can severely degrade model performance. To address this problem, we propose CANOLA, a novel framework for correcting corrupted labels through noise-aware learning and iterative label refinement. CANOLA explicitly estimates the underlying noise distribution of the dataset and incorporates this information into the training of a noise-aware Deep Neural Network. By incorporating noise characteristics during learning, CANOLA enables the model to down-weight unreliable supervision signals and focus on trustworthy patterns, thereby improving robustness and generalization. Label correction is performed via cautious, iterative soft label refinement, in which model predictions are blended with observed labels to prevent premature or erroneous updates. This progressive refinement allows the dataset to be repaired in a stable and controlled manner. We evaluate CANOLA on six widely used datasets under realistic noisy labeling scenarios. Experimental results show that CANOLA consistently outperforms SOTA label correction methods, achieving relative improvements ranging from 19% to 52% in error reduction. Moreover, models trained on datasets corrected by CANOLA obtain substantial downstream performance gains. Even simple classifiers trained on CANOLA's corrected data can outperform complex model-centric approaches by margins of up to 67%.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11695
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- dataset
