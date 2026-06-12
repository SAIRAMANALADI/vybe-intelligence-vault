---
title: 'ReCal: Reward Calibration for RL-based LLM Routing'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12479
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.103478+00:00'
tags:
- dataset
- rag
- reddit
status: active
id: arxiv:2606.12479
first_seen: '2026-06-12T10:40:03.103478+00:00'
last_seen: '2026-06-12T10:40:03.103478+00:00'
---

# ReCal: Reward Calibration for RL-based LLM Routing

## Summary

arXiv:2606.12479v1 Announce Type: cross 
Abstract: Large language model (LLM) routing has emerged as an effective paradigm for leveraging the complementary strengths of multiple LLMs through dynamic model and reasoning-strategy selection. Recent reinforcement learning (RL)-based routing methods further improve routing quality by optimizing routing policies from interaction feedback. However, they still struggle to provide informative and comparable learning signals under heterogeneous tasks with varying difficulty. In practice, multiple objectives (e.g., correctness, format behavior) are aggregated into a single scalar reward, leading to ambiguous credit assignment and conflicting optimization signals. Moreover, reward signals exhibit significant variability across instances, where some instances produce higher or more variable rewards, introducing optimization bias that favors trivial samples over informative ones. To address these issues, we propose \textbf{ReCal}, a \textbf{\underline{Re}}ward \textbf{\underline{Cal}}ibration framework for RL-based LLM routing. We first introduce a hierarchical reward decomposition mechanism with component-wise advantage estimation. We further propose a distribution-aware optimization strategy that calibrates optimization variability through variance-aware reweighting and per-dataset normalization. Experiments on seven datasets demonstrate that ReCal consistently improves routing performance, and training stability over baselines. Code is available at https://anonymous.4open.science/r/ReCal.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12479
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- dataset
- rag
- reddit
