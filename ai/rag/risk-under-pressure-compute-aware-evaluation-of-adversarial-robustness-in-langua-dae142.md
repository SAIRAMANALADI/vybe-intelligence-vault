---
title: 'Risk Under Pressure: Compute-Aware Evaluation of Adversarial Robustness in
  Language Models'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11409
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.013403+00:00'
tags:
- benchmark
- rag
status: active
id: arxiv:2606.11409
first_seen: '2026-06-12T10:40:06.013403+00:00'
last_seen: '2026-06-12T10:40:06.013403+00:00'
---

# Risk Under Pressure: Compute-Aware Evaluation of Adversarial Robustness in Language Models

## Summary

arXiv:2606.11409v1 Announce Type: new 
Abstract: Adversarial robustness evaluations of large language models (LLMs) typically report attack success rate (ASR) under fixed query budgets, implicitly treating all attacks as equally costly. In practice, the computational expense of different attack strategies can vary by orders of magnitude. Consequently, ASR at a fixed budget can obscure the true effort required to jailbreak a model, thereby making it hard to determine whether an attack's cost justifies its payoff to the attacker. We propose a compute-aware evaluation framework based on computational pressure, measured in cumulative floating-point operations (FLOPs), as a proxy for adversarial effort. We introduce risk-compute curves, which map compute budgets to attack risk, and derive two metrics that summarize the average pressure required for a given attack to succeed. Across ten models spanning three families and four different stages in language model training and alignment, evaluated with three attack strategies (gradient-based, iterative refinement, and template-based) on two jailbreak robustness benchmarks, we find: (1) alignment training has non-monotonic effects on compute-space robustness; (2) scaling model size reduces gradient-based attack effectiveness but has limited impact on cheaper template-based attacks; (3) gradient-based attacks optimized on a surrogate model can transfer to a separate target model, providing a way to reduce attacker costs; (4) compute cost varies by up to ${\approx}5{\times}$ across harm categories within a single model; and (5) safety-aligned RL increases aggregate cost while leaving some categories disproportionately accessible. We release our framework to enable compute-aware risk assessment and evaluation.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11409
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- rag
