---
title: Multi-Rate Mixture of Experts for Accelerating Liquid Neural Network Training
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12240
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523244+00:00'
tags: []
status: new
---

# Multi-Rate Mixture of Experts for Accelerating Liquid Neural Network Training

## Summary

arXiv:2606.12240v1 Announce Type: cross 
Abstract: Multivariate time-series data often exhibit complex temporal dependencies, irregular sampling, and heterogeneous dynamics across multiple time scales, making accurate sequence modeling particularly challenging. Traditional recurrent neural networks (RNNs), such as Long Short-Term Memory (LSTM) networks, operate in discrete time and may struggle to effectively capture continuous and irregular temporal behaviors. Liquid Neural Networks (LNNs) address some of these limitations through continuous-time dynamics, but standard LNN architectures typically rely on a single dynamical system, limiting their ability to model heterogeneous temporal patterns. To address these challenges, we propose a Multi-Rate Mixture-of-Experts (MR-MoE) framework built on top of Liquid Neural Networks. In the proposed architecture, multiple LNN-based experts operate at distinct time scales, enabling the model to explicitly separate fast-changing dynamics from slow-evolving temporal trends. A gating network further enables adaptive expert specialization based on input conditions. In addition, we incorporate both feature-level and temporal attention mechanisms to improve robustness, interpretability, and long-range dependency modeling. Feature-level attention suppresses noisy or irrelevant variables, while temporal attention selectively focuses on informative historical states. We evaluate the proposed framework on a complex multivariate time-series prediction task and compare it against strong baselines, including LSTM, monolithic LNN, and standard MoE models. Experimental results demonstrate that the proposed MR-MoE framework consistently achieves improved AUROC and AUPRC performance while maintaining favorable computational efficiency. These results highlight the effectiveness of combining continuous-time dynamics, multi-scale expert decomposition, and adaptive attention mechanisms for time-series modeling.

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

Original source: https://arxiv.org/abs/2606.12240
