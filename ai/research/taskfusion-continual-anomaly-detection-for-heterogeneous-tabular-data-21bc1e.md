---
title: 'TaskFusion: Continual Anomaly Detection for Heterogeneous Tabular Data'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11844
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-11T04:00:00+00:00'
collected_at: '2026-06-11T18:20:38.802690+00:00'
tags:
- dataset
- models
status: new
---

# TaskFusion: Continual Anomaly Detection for Heterogeneous Tabular Data

## Summary

arXiv:2606.11844v1 Announce Type: new 
Abstract: Continual anomaly detection in tabular data is challenging and remains largely underexplored, particularly in settings with heterogeneous feature schemas, distribution shifts, and severe class imbalance. In many real-world applications, data arrive sequentially from diverse domains, rendering conventional continual learning methods ineffective due to their reliance on a fixed input space. We propose a continual learning (CL) method, which can overcome these challenges and continually learn from different tasks. Our method consists of three main parts: our AGF model, Taskfusion augmentation, and outlier exposure. The AGF-model maps task-specific features into a shared space, then aligns distributions to reduce representation drift, and learns anomaly decision boundaries in the aligned space. To improve stability, we introduce Taskfusion augmentation, combining boundary-aware interpolation within tasks to refine the model anomaly boundaries and cross-task mixing to transfer anomaly structure across datasets. To handle class imbalance and memory constraints, we employ tabular dataset distillation to store compact synthetic replay samples, which are jointly used with augmented data in an outlier exposure objective for robust anomaly detection. We evaluate the approach on 21 heterogeneous datasets across multiple domains. Results show that our approach substantially improves continual anomaly detection performance over sequential fine-tuning and other CL baselines while reducing catastrophic forgetting and maintaining stable detection across heterogeneous datasets.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11844
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- dataset
- models
