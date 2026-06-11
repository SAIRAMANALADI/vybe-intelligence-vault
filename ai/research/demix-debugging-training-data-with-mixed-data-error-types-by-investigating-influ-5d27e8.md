---
title: 'DeMix: Debugging Training Data with Mixed Data Error Types by Investigating
  Influence Vectors'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11616
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.795987+00:00'
tags: []
status: new
---

# DeMix: Debugging Training Data with Mixed Data Error Types by Investigating Influence Vectors

## Summary

arXiv:2606.11616v1 Announce Type: new 
Abstract: High-quality training data is essential for the success of machine learning models. However, real-world datasets often contain mixed types of errors arising from systematic flaws in data preparation pipelines, including label errors, feature errors, and spurious correlations. Effective debugging of training data requires both detecting erroneous samples and identifying their specific error types to enable targeted repair, yet existing data cleaning and attribution methods fail to adequately address this dual requirement. In this paper, we propose DeMix, a novel framework that simultaneously diagnoses erroneous samples and their error types. Our key insight is that different error types produce distinct patterns on model behavior. DeMix captures such error-specific patterns by influence vectors that characterize how each training sample affects model predictions across all validation samples. We formulate training data debugging as a multi-label classification problem where a classifier is developed to predict error types directly from influence vectors. We further introduce an intervention-based learning strategy that guides the classifier to capture invariant rationales specific to each error type, ensuring the learned classifier generalizes effectively. Empirical evaluations on 11 tasks across tabular data prediction, recommendation systems, and LLM alignment demonstrate that DeMix significantly outperforms state-of-the-art approaches, achieving a 22.61% improvement in data debugging F1-score and a 9.32% gain in task model performance after data repair. Code is available at: https://github.com/SJTU-DMTai/DeMix.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- None

## Source

Original source: https://arxiv.org/abs/2606.11616
