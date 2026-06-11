---
title: 'Risk Under Pressure: Compute-Aware Evaluation of Adversarial Robustness in
  Language Models'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11409
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522383+00:00'
tags:
- rag
status: new
---

# Risk Under Pressure: Compute-Aware Evaluation of Adversarial Robustness in Language Models

## Summary

arXiv:2606.11409v1 Announce Type: cross 
Abstract: Adversarial robustness evaluations of large language models (LLMs) typically report attack success rate (ASR) under fixed query budgets, implicitly treating all attacks as equally costly. In practice, the computational expense of different attack strategies can vary by orders of magnitude. Consequently, ASR at a fixed budget can obscure the true effort required to jailbreak a model, thereby making it hard to determine whether an attack's cost justifies its payoff to the attacker. We propose a compute-aware evaluation framework based on computational pressure, measured in cumulative floating-point operations (FLOPs), as a proxy for adversarial effort. We introduce risk-compute curves, which map compute budgets to attack risk, and derive two metrics that summarize the average pressure required for a given attack to succeed. Across ten models spanning three families and four different stages in language model training and alignment, evaluated with three attack strategies (gradient-based, iterative refinement, and template-based) on two jailbreak robustness benchmarks, we find: (1) alignment training has non-monotonic effects on compute-space robustness; (2) scaling model size reduces gradient-based attack effectiveness but has limited impact on cheaper template-based attacks; (3) gradient-based attacks optimized on a surrogate model can transfer to a separate target model, providing a way to reduce attacker costs; (4) compute cost varies by up to ${\approx}5{\times}$ across harm categories within a single model; and (5) safety-aligned RL increases aggregate cost while leaving some categories disproportionately accessible. We release our framework to enable compute-aware risk assessment and evaluation.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- rag

## Source

Original source: https://arxiv.org/abs/2606.11409
