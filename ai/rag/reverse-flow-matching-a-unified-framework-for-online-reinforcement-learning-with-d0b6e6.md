---
title: 'Reverse Flow Matching: A Unified Framework for Online Reinforcement Learning
  with Diffusion and Flow Policies'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2601.08136
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.798305+00:00'
tags:
- rag
status: new
---

# Reverse Flow Matching: A Unified Framework for Online Reinforcement Learning with Diffusion and Flow Policies

## Summary

arXiv:2601.08136v2 Announce Type: replace 
Abstract: Diffusion and flow policies are gaining prominence in online reinforcement learning (RL) due to their expressive power, yet training them efficiently remains a critical challenge. A fundamental difficulty that distinguishes online RL from standard generative modeling is the lack of direct samples from the target Boltzmann distribution defined by the Q-function. To address this, two seemingly distinct families of methods have been proposed for diffusion policies: a noise-expectation family, which uses a weighted average of noise as the training target, and a gradient-expectation family, which employs a weighted average of Q-function gradients. However, it remains unclear how these objectives are formally related, or whether they can be synthesized into a more general formulation. In this paper, we propose a unified framework, reverse flow matching (RFM), which rigorously addresses the problem of training diffusion and flow models without direct target samples. By adopting a reverse inferential perspective, we formulate the training target as a posterior mean estimation problem given an intermediate noisy sample. Crucially, we introduce Langevin Stein operators to construct zero-mean control variates, deriving a general class of estimators that share the same expectation. We show that existing noise-expectation and gradient-expectation methods are simply two specific instances within this broader class. This unified view yields two key advancements: it extends the capability of targeting Boltzmann distributions from diffusion to flow policies, and it enables the principled combination of Q-value and Q-gradient information to form an effective estimator, thereby improving training efficiency and stability. We instantiate RFM to train a flow policy in online RL and demonstrate improved performance on continuous-control benchmarks compared to diffusion policy baselines.

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

Original source: https://arxiv.org/abs/2601.08136
