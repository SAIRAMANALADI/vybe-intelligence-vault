---
title: 'SwiftCTS: Fast Cross-Design Prediction and Pareto Optimization of Clock Tree
  Metrics via Few-Shot Calibration'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11348
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.795827+00:00'
tags:
- models
status: new
---

# SwiftCTS: Fast Cross-Design Prediction and Pareto Optimization of Clock Tree Metrics via Few-Shot Calibration

## Summary

arXiv:2606.11348v1 Announce Type: new 
Abstract: Clock Tree Synthesis (CTS) is a computationally expensive stage in the physical design flow, requiring iterative EDA tool invocations to navigate a vast configuration space for optimal power, wirelength, and timing skew. Existing machine learning approaches require computationally expensive retraining or fine-tuning cycles to adapt to unseen macro architectures and are architecturally mismatched to the millions of evaluations demanded by exhaustive combinatorial search. We present SwiftCTS, a physics-informed surrogate framework that addresses both limitations simultaneously. By coupling lightweight, physics-grounded statistical features with gradient-boosted ensembles, SwiftCTS trains in under five seconds on a CPU and delivers sub-millisecond inference without GPU support. To handle out-of-distribution (OOD) designs without retraining or fine-tuning, we introduce a K-shot multiplicative calibration mechanism that anchors predictions to just one or two physical reference runs, reducing power prediction error from 24.5\% to 3.3\% and wirelength error from 56.6\% to under 1\% on unseen macros. Integrating this engine with an evolutionary optimizer, SwiftCTS evaluates 100,000 CTS configurations in under ten seconds, yielding Pareto-optimal frontiers that are physically validated within the OpenROAD flow. Closed-loop validation confirms prediction errors below 0.5\% for power and wirelength, and timing skew predictions within five picoseconds on an OOD benchmark, consistently outperforming default tool heuristics across all target metrics. Code publicly available at: \href{https://anonymous.4open.science/r/SwiftCTS-7E6E}{https://github.com/BarsatKhadka/SwiftCTS}

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models

## Source

Original source: https://arxiv.org/abs/2606.11348
