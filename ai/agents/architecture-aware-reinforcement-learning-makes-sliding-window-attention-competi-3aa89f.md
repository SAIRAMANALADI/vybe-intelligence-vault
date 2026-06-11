---
title: Architecture-Aware Reinforcement Learning Makes Sliding-Window Attention Competitive
  in Math Reasoning
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11634
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.521790+00:00'
tags:
- agents
- models
status: new
---

# Architecture-Aware Reinforcement Learning Makes Sliding-Window Attention Competitive in Math Reasoning

## Summary

arXiv:2606.11634v1 Announce Type: new 
Abstract: The rapid progress of reasoning and agentic large language models (LLMs) has increased the demand for long-context inference, but self-attention (SA) scales quadratically with context length.
 To address this, we study SWARR (Sliding-Window Attention with Reinforced Adaptation for Math Reasoning), a practical recipe for adapting SWA models to mathematical reasoning. SWARR has two stages: (1) efficient conversion from a pretrained SA model to SWA with supervised fine-tuning (SFT), which avoids pretraining a new base model, and (2) policy adaptation with reinforcement learning (RL).
 We find that SWA still underperforms SA after SFT, and we hypothesize that this gap is caused in part by a data-architecture mismatch: most SFT data are prepared for SA models and may contain long-range dependencies that are difficult for SWA to model. Because on-policy RL optimizes self-generated trajectories under the SWA constraint, it can adapt trajectories to better match SWA.
 Experiments on mathematical reasoning benchmarks show that this recipe substantially narrows the gap between SWA and SA, recovering much of the accuracy lost during SWA conversion while preserving the efficiency benefits of linear-complexity attention. Our central contribution is the empirical finding that RL changes the conclusion one would draw from conversion and SFT alone about SWA's viability for math reasoning.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/agents
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- agents
- models

## Source

Original source: https://arxiv.org/abs/2606.11634
