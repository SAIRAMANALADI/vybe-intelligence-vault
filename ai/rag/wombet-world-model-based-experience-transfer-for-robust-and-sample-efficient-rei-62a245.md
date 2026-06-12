---
title: 'WOMBET: World Model-Based Experience Transfer for Robust and Sample-efficient
  Reinforcement Learning'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2604.08958
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.485945+00:00'
tags:
- benchmark
- dataset
- models
- rag
status: new
---

# WOMBET: World Model-Based Experience Transfer for Robust and Sample-efficient Reinforcement Learning

## Summary

arXiv:2604.08958v3 Announce Type: replace-cross 
Abstract: Reinforcement learning (RL) in robotics is often limited by the cost and risk of data collection, motivating experience transfer from a source task to a target task. Offline-to-online RL leverages prior data but typically assumes a given fixed dataset and does not address how to generate reliable data for transfer. We propose World Model-Based Experience Transfer (WOMBET), a framework that jointly generates and utilizes prior data. WOMBET learns a world model in the source task and generates offline data via uncertainty-penalized planning, followed by filtering trajectories with high return and low epistemic uncertainty. It then performs online fine-tuning in the target task using adaptive sampling between offline and online data, enabling a stable transition from prior-driven initialization to task-specific adaptation. We show that the uncertainty-penalized objective provides a lower bound on the true return and derive a finite-sample error decomposition capturing distribution mismatch and approximation error. Empirically, WOMBET improves sample efficiency and final performance over strong baselines on continuous control benchmarks, demonstrating the benefit of jointly optimizing data generation and transfer.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2604.08958
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- dataset
- models
- rag
