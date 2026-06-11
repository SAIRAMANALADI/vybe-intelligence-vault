---
title: Simplicity Suffices for Parameter Noise Injection in Stochastic Gradient Descent
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.12054
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.796396+00:00'
tags:
- rag
status: new
---

# Simplicity Suffices for Parameter Noise Injection in Stochastic Gradient Descent

## Summary

arXiv:2606.12054v1 Announce Type: new 
Abstract: Injecting noise into the optimization process is a well-established technique for improving the training and generalization of deep neural networks. Yet, despite the breadth of existing approaches, it remains unclear which design choices truly matter in practice. In this work, we investigate parameter noise injection for stochastic gradient descent, focusing on two key questions: how to efficiently pair each training example with its own perturbation in mini-batch training, and whether sophisticated noise parameterizations or multi-sample gradient averaging yield meaningful gains over simpler alternatives. To address the first question, we leverage a distributional identity for linear layers that allows per-example noise injection without breaking batched computation. To address the second, we systematically compare several diagonal Gaussian parameterizations against an isotropic baseline across varying noise levels on CIFAR100. Our results consistently show that simple, lightweight strategies, isotropic noise with a single perturbed forward pass per update step, recover most of the benefit of more complex schemes. These findings suggest that simplicity suffices for parameter noise injection, and that practitioners need not resort to elaborate perturbation designs to reap the optimization and generalization benefits of noisy SGD.

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

Original source: https://arxiv.org/abs/2606.12054
