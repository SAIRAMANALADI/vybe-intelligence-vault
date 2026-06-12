---
title: 'Steering the Noise: Turning Random Perturbations into Effective Descent for
  Memory-Efficient LLM Fine-Tuning'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2601.04710
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.019094+00:00'
tags:
- benchmark
- models
- paper
status: active
id: arxiv:2601.04710
first_seen: '2026-06-12T10:40:06.019094+00:00'
last_seen: '2026-06-12T10:40:06.019094+00:00'
---

# Steering the Noise: Turning Random Perturbations into Effective Descent for Memory-Efficient LLM Fine-Tuning

## Summary

arXiv:2601.04710v2 Announce Type: replace-cross 
Abstract: Fine-tuning large language models (LLMs) achieves strong performance but is often limited by the memory overhead of backpropagation. Zeroth-order (ZO) optimization avoids this overhead by estimating gradients through forward passes alone, yet it typically converges slowly because random Gaussian perturbations yield high-variance gradient estimates in high-dimensional parameter spaces. In this paper, we propose a plug-and-play framework that turns random perturbations into more effective descent directions. The key idea is to draw a small pool of candidate perturbations, evaluate their loss values, and then select or combine those that are best aligned with the optimization objective. We develop two instantiations of this idea: MeZO-GV, which forms a guiding vector from the contrast between low-loss and high-loss perturbation groups, and MeZO-Greedy, which keeps the single best perturbation within a fixed evaluation budget. We theoretically show that both strategies yield a larger per-step reduction in the objective than standard ZO estimation, leading to improved convergence rates. Experiments on LLMs of different scales and architectures confirm that the proposed methods integrate naturally with existing ZO optimizers and consistently improve convergence speed and task accuracy. On OPT-13B, our approach outperforms all ZO baselines across 11 benchmarks and exceeds gradient-based methods on 9 of them, while retaining the memory efficiency of forward-only optimization.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2601.04710
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- models
- paper
