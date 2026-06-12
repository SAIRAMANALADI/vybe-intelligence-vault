---
title: 'ARROW: Augmented Replay for RObust World models'
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2603.11395
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.107289+00:00'
tags:
- agents
status: active
id: arxiv:2603.11395
first_seen: '2026-06-12T10:40:03.107289+00:00'
last_seen: '2026-06-12T10:40:03.107289+00:00'
---

# ARROW: Augmented Replay for RObust World models

## Summary

arXiv:2603.11395v3 Announce Type: replace-cross 
Abstract: Continual reinforcement learning challenges agents to acquire new skills while retaining previously learned ones with the goal of improving performance in both past and future tasks. Most existing approaches rely on model-free methods with replay buffers to mitigate catastrophic forgetting; however, these solutions often face significant scalability challenges due to large memory demands. Drawing inspiration from neuroscience, where the brain replays experiences to a predictive World Model rather than directly to the policy, we present ARROW (Augmented Replay for RObust World models), a model-based continual RL algorithm that extends DreamerV3 with a memory-efficient, distribution-matching replay buffer. Unlike standard fixed-size FIFO buffers, ARROW maintains two complementary buffers: a short-term buffer for recent experiences and a long-term buffer that preserves task diversity through intelligent sampling. We evaluate ARROW on two challenging continual RL settings: Tasks without shared structure (Atari), and tasks with shared structure, where knowledge transfer is possible (Procgen CoinRun variants). Compared to model-free and model-based baselines with replay buffers of the same-size, ARROW demonstrates substantially less forgetting on tasks without shared structure, while maintaining comparable forward transfer. Our findings highlight the potential of model-based RL and bio-inspired approaches for continual reinforcement learning, warranting further research.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2603.11395
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- agents
