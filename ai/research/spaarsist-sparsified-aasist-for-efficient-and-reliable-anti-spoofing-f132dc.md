---
title: 'SpAArSIST: Sparsified AASIST for Efficient and Reliable Anti-Spoofing'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11674
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.797292+00:00'
tags: []
status: new
---

# SpAArSIST: Sparsified AASIST for Efficient and Reliable Anti-Spoofing

## Summary

arXiv:2606.11674v1 Announce Type: cross 
Abstract: We present SpAArSIST, a deployment-oriented refinement of the widely used AASIST graph pooling backend for self-supervised learning (SSL) based anti-spoofing. Motivated by redundant operations in public implementations, we replace learned pooling and stack-node attention with explicit, lightweight choices: separate train and inference graph pooling ratios $(k_{\mathrm{tr}},k_{\mathrm{inf}})$, magnitude-based node scoring, and mean aggregation of graph nodes. The best overall configuration (rank 1) cuts backend compute by 20.7% (195.045M $\rightarrow$ 154.706M MACs) and model size by 4.1% (611.8k $\rightarrow$ 586.4k params), while improving out-of-domain robustness on In-the-Wild to 2.82% EER and 0.078 minDCF (from 4.64% and 0.133) and remaining competitive on ASVspoof5. We further provide a composite selection score that summarizes accuracy, calibration, and compute to support balanced deployment-oriented model choice.

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

Original source: https://arxiv.org/abs/2606.11674
