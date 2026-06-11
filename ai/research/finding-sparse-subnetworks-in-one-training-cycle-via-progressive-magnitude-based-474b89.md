---
title: Finding Sparse Subnetworks in One Training Cycle via Progressive Magnitude-Based
  Pruning
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.12278
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.797839+00:00'
tags: []
status: new
---

# Finding Sparse Subnetworks in One Training Cycle via Progressive Magnitude-Based Pruning

## Summary

arXiv:2606.12278v1 Announce Type: cross 
Abstract: Neural network pruning reduces model size by removing less important parameters while aiming to preserve predictive performance. Although the Lottery Ticket Hypothesis (LTH) shows that sparse subnetworks can match dense networks when trained from suitable initializations, its iterative pruning procedure requires multiple complete training cycles. This work evaluates progressive magnitude-based pruning as a single-cycle alternative. The method gradually increases sparsity during training using a linear schedule and updates pruning masks based on active weight magnitudes. We conduct systematic experiments on CIFAR-10 and MNIST across ResNet, VGG-style, and LeNet architectures, comparing the proposed method with representative iterative and initialization-based pruning baselines, including LTH, SNIP, and GraSP. On CIFAR-10, the method achieves 95.12\% accuracy on ResNet-18 at 72.9\% sparsity, compared with 90.5\% reported for LTH. At extreme sparsity, it achieves 93.13\% accuracy on a VGG-like architecture at 97\% sparsity, compared with approximately 92.0\% for SNIP, and 93.44\% accuracy on VGG-19 at 97.97\% sparsity, compared with 92.19\% for GraSP at 98\% sparsity. A sparsity-accuracy analysis on ResNet-18 further shows that accuracy remains within 0.1 percentage points of the dense baseline across 70--85\% sparsity. These results indicate that progressive magnitude-based pruning provides an effective single-cycle approach for neural network sparsification under the evaluated settings.

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

Original source: https://arxiv.org/abs/2606.12278
