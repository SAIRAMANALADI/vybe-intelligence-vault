---
title: 'PCS-UQ: Uncertainty Quantification via the Predictability-Computability-Stability
  Framework'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2505.08784
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.799143+00:00'
tags:
- rag
status: new
---

# PCS-UQ: Uncertainty Quantification via the Predictability-Computability-Stability Framework

## Summary

arXiv:2505.08784v2 Announce Type: replace-cross 
Abstract: As machine learning (ML) enters high-stakes domains, trustworthy uncertainty quantification (UQ) is essential for safety. In this paper we introduce PCS-UQ, a framework based on the Predictability, Computability, and Stability (PCS) principles for veridical data science. Starting with a candidate set of models or algorithms, PCS-UQ integrates a rigorous prediction-check to screen out unsuitable models in the set and utilizes bootstrap samples, in order to capture both inter-sample variability and algorithmic instability for the prediction-checked algorithms. We then introduce a novel multiplicative calibration scheme to enhance local adaptivity, which basically corresponds to a new score in conformal prediction. Moreover, we produce a compilation of 17 real-world regression datasets with manually-constructed subgroups. On this benchmark, PCS-UQ maintains the target coverage while outperforming or matching conformal methods equipped with oracle-selected algorithms in interval width. PCS-UQ achieves consistent subgroup coverage, outperforming these oracle-selected conformal methods. Notably, PCS-UQ stands out in achieving both competitive interval widths and consistent subgroup coverage.Across 6 classification datasets, PCS-UQ reduces prediction set sizes by 20\%. To scale the framework for deep learning, we propose computationally efficient variants that bypass expensive retraining. On three computer vision benchmarks, these variants reduce prediction set sizes by 20\% over conformal baselines. Finally, we provide theoretical proof that a modified PCS-UQ algorithm preserves valid coverage under exchangeability as a form of split conformal inference.

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

Original source: https://arxiv.org/abs/2505.08784
