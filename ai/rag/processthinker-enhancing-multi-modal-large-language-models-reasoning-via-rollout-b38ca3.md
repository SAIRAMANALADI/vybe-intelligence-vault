---
title: 'ProcessThinker: Enhancing Multi-modal Large Language Models Reasoning via
  Rollout-based Process Reward'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11209
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.015071+00:00'
tags:
- benchmark
- models
- rag
- youtube
status: active
id: arxiv:2606.11209
first_seen: '2026-06-12T10:40:06.015071+00:00'
last_seen: '2026-06-12T10:40:06.015071+00:00'
---

# ProcessThinker: Enhancing Multi-modal Large Language Models Reasoning via Rollout-based Process Reward

## Summary

arXiv:2606.11209v1 Announce Type: cross 
Abstract: Visual question answering increasingly requires multi-step reasoning. Recent post-training with reinforcement learning under verifiable rewards (RLVR) and Group Relative Policy Optimization (GRPO) can improve multimodal reasoning, but most approaches rely on sparse outcome-only rewards. As a result, they struggle to tell whether an incorrect answer comes from a small mistake late in the reasoning or from an unhelpful trajectory from the start. A common solution is to train a process reward model (PRM) for step-level supervision, but this typically requires large-scale high-quality chain-of-thought annotations and additional training cost. We propose ProcessThinker, a practical post-training pipeline that provides step-level process rewards without training an explicit PRM. ProcessThinker first rewrites reasoning traces into a step-tagged format for cold-start supervised fine-tuning, then applies GRPO with a standard format reward and our rollout-based process reward. Concretely, for each intermediate step, we sample multiple continuations from that step and use the empirical success rate (final-answer verification) as the step reward. This gives dense credit assignment and encourages reasoning steps that more reliably support a correct conclusion, helping reduce inconsistent or self-contradictory progress across steps -- a key issue in logical reasoning. Across four challenging video benchmarks (Video-MMMU, MMVU, VideoMathQA, and LongVideoBench), ProcessThinker consistently improves over the baseline model Qwen3-VL-8B-Instruct

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11209
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- models
- rag
- youtube
