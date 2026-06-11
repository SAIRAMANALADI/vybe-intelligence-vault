---
title: 'From Persistence to Survival: Hypothesis Testing, Effect Sizes and Vectorisation
  for Topological Features'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11911
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.797669+00:00'
tags: []
status: new
---

# From Persistence to Survival: Hypothesis Testing, Effect Sizes and Vectorisation for Topological Features

## Summary

arXiv:2606.11911v1 Announce Type: cross 
Abstract: Persistence diagrams are common representations in topological data analysis, but they do not naturally live in a vector space, and the statistical tools developed for comparing them have largely evolved separately from those used for downstream prediction. We introduce STRAND (Survival Topological Representation ANalysis of Diagrams), which treats (collections of) PDs as survival data: each topological feature with persistence value $p = d - b$ is a fully observed time-to-event, and the persistence survival function $S(t) = \mathbb{P}(p > t)$ is the central object for comparing diagrams. From this single representation we derive (i) a non-parametric two-sample test with calibrated Type I error and high power from a small number of diagrams; (ii) interpretable effect sizes; and (iii) a 1-Wasserstein-stable feature vector for downstream machine learning. We validate calibration and power on synthetic manifolds with controlled topology, demonstrate competitive vectorisation across 14 graph and 3D point cloud benchmarks, and apply the method to study functional brain connectivity in fMRI/neuroscience data. To our knowledge, STRAND is the first method to provide hypothesis testing and vectorisation for persistence diagrams from a single coherent and interpretable representation.

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

Original source: https://arxiv.org/abs/2606.11911
