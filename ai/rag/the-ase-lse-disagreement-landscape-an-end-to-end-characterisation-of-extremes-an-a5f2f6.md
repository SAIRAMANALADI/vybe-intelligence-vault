---
title: 'The ASE-LSE Disagreement Landscape: An End-to-End Characterisation of Extremes
  and Structural Drivers'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2605.22346
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.799604+00:00'
tags:
- rag
status: new
---

# The ASE-LSE Disagreement Landscape: An End-to-End Characterisation of Extremes and Structural Drivers

## Summary

arXiv:2605.22346v3 Announce Type: replace-cross 
Abstract: Two of the most widely used methods for analysing graph data, Adjacency Spectral Embedding and Laplacian Spectral Embedding, often produce different results when applied to the same graph. Yet the structural reasons behind this disagreement remain incompletely understood. This paper provides an end-to-end account of ASE-LSE latent subspace disagreement. We first prove that the two methods produce identical latent subspaces for every embedding dimension whenever the Laplacian is a scalar multiple of the adjacency matrix, and show that this scalar relationship holds if and only if the graph is either regular or bipartite biregular. This anchor result identifies a sufficient condition for perfect agreement that pins down the floor of the disagreement spectrum and supplies the baseline for the perturbation analysis. We then prove that no maximal-disagreement graph or family of graphs exists: the disagreement is always strictly below its theoretical ceiling, and we exhibit a witness family demonstrating that no finite maximum is attainable, so the disagreement landscape has no maximiser. With both endpoints established, we derive a Regularity Departure Bound whose two terms isolate degree heterogeneity and eigengap as the primary structural factors influencing disagreement in the middle regime. Empirical validation across thousands of simulated graphs confirms the mechanisms predicted by the bound: heterogeneity pushes disagreement up, eigengap suppresses it, and their joint ratio emerges as a unified predictor of ASE-LSE disagreement, suggesting when the two embeddings can be treated as interchangeable and when they cannot.

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

Original source: https://arxiv.org/abs/2605.22346
