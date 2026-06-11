---
title: 'CRUMB: Efficient Prior Fitted Network Inference via Distributionally Matched
  Context Batching'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11473
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522451+00:00'
tags: []
status: new
---

# CRUMB: Efficient Prior Fitted Network Inference via Distributionally Matched Context Batching

## Summary

arXiv:2606.11473v1 Announce Type: cross 
Abstract: Prior-fitted networks (PFNs) are a promising class of tabular foundation models that perform in-context learning, whereby the entire labelled training set is supplied as context, and predictions for test queries are produced in a single forward pass. However, the quadratically scaling self-attention mechanism in many PFN architectures makes inference prohibitive for very large training datasets. We propose CRUMB (Clustered Retrieval Using Minimised-MMD Batching), a three-stage inference wrapper that (i) clusters the test queries, (ii) selects a small, distributionally matched training subset for each cluster by greedily minimising the maximum mean discrepancy (MMD), and (iii) runs exact PFN inference on each reduced-context batch. CRUMB is architecture-agnostic and requires no retraining. On the 51-dataset TabArena benchmark, evaluated across three PFN architectures (TabPFNv2, TabICLv1, TabICLv2), we show that CRUMB outperforms similar state-of-the-art context selection strategies. We also show that CRUMB is resilient to covariate drift, as the MMD-minimisation step naturally helps align the training context distribution to match the current test batch distributions.

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

Original source: https://arxiv.org/abs/2606.11473
