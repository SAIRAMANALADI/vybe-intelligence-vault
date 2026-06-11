---
title: 'RCAP: Robust, Class-Aware, Probabilistic Dynamic Dataset Pruning'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11761
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.796145+00:00'
tags:
- models
- rag
status: new
---

# RCAP: Robust, Class-Aware, Probabilistic Dynamic Dataset Pruning

## Summary

arXiv:2606.11761v1 Announce Type: new 
Abstract: Dynamic data pruning techniques aim to reduce computational cost while minimizing information loss by periodically selecting representative subsets of input data during model training. However, existing methods often struggle to maintain strong worst-group accuracy, particularly at high pruning rates, across balanced and imbalanced datasets. To address this challenge, we propose RCAP, a Robust, Class-Aware, Probabilistic dynamic dataset pruning algorithm for classification tasks. RCAP applies a closed-form solution to estimate the fraction of samples to be included in the training subset for each individual class. This fraction is adaptively adjusted in every epoch using class-wise aggregated loss. Thereafter, it employs an adaptive sampling strategy that prioritizes samples having high loss for populating the class-wise subsets. We evaluate RCAP on six diverse datasets ranging from class-balanced to highly imbalanced using five distinct models across three training paradigms: training from scratch, transfer learning, and fine-tuning. Our approach consistently outperforms state-of-the-art dataset pruning methods, achieving superior worst-group accuracy at all pruning rates. Remarkably, with only $10\%$ data, RCAP delivers $>1\%$ improvement in performance on class-imbalanced datasets compared to full data training while providing an average $8.69\times$ speedup. The code can be accessed at https://github.com/atif-hassan/RCAP-dynamic-dataset-pruning

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models
- rag

## Source

Original source: https://arxiv.org/abs/2606.11761
