---
title: 'CoVar: Confidence-Variance-Guided Pseudo-Label Selection for Semi-Supervised
  Learning'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2601.11670
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524067+00:00'
tags:
- models
status: new
---

# CoVar: Confidence-Variance-Guided Pseudo-Label Selection for Semi-Supervised Learning

## Summary

arXiv:2601.11670v3 Announce Type: replace-cross 
Abstract: Pseudo-label selection in semi-supervised learning is commonly driven by maximum-confidence thresholds, yet confidence alone can be unreliable under model overconfidence and class imbalance. We propose CoVar, a confidence--variance framework that assesses pseudo-label reliability by jointly modeling Maximum Confidence (MC) and Residual-Class Variance (RCV). Starting from entropy minimization, we derive a second-order cross-entropy approximation showing that low-loss pseudo-labels are favored when MC is high and RCV is low, with a confidence-dependent penalty that becomes stronger for near-certain predictions. Based on this criterion, CoVar embeds predictions into a two-dimensional confidence--variance space and uses SVD-based spectral relaxation to separate reliable and unreliable predictions without hand-tuned confidence thresholds. Cluster-wise Gaussian weighting then converts this separation into per-sample training weights. The resulting weights can be integrated into existing semi-supervised segmentation and classification pipelines during training and introduce no inference-time overhead. Experiments on PASCAL VOC 2012, Cityscapes, CIFAR-10, CIFAR-100, SVHN, and STL-10 show clear gains on VOC and Cityscapes under matched backbones, as well as competitive or improved error rates on standard classification benchmarks. These results indicate that residual-class dispersion provides a useful signal complementary to confidence for robust pseudo-label selection.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models

## Source

Original source: https://arxiv.org/abs/2601.11670
