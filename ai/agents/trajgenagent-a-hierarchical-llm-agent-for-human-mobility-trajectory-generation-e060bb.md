---
title: 'TrajGenAgent: A Hierarchical LLM Agent for Human Mobility Trajectory Generation'
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12657
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.101538+00:00'
tags:
- agents
- benchmark
- dataset
- models
- workflows
status: active
id: arxiv:2606.12657
first_seen: '2026-06-12T10:40:03.101538+00:00'
last_seen: '2026-06-12T10:40:03.101538+00:00'
---

# TrajGenAgent: A Hierarchical LLM Agent for Human Mobility Trajectory Generation

## Summary

arXiv:2606.12657v1 Announce Type: new 
Abstract: Human mobility data is important for transportation, urban planning, and epidemic control, but large-scale trajectory collection is often costly and privacy-constrained, motivating realistic synthetic trajectory generation. Existing LLM-based generators typically rely on either prompt engineering, which preserves zero-shot reasoning but lacks fine-grained spatiotemporal grounding, or trajectory-level fine-tuning, which improves statistical precision but incurs substantial computational cost and may weaken general reasoning. We propose TrajGenAgent, a semantic-aware hierarchical LLM-agent framework for human mobility trajectory generation without model fine-tuning. TrajGenAgent uses a two-stage orchestrator-worker design: an LLM first synthesizes an individual- and weekday-conditioned activity chain from historical evidence via in-context learning, and a deterministic workflow then grounds each activity into a complete visit using personalized POI retrieval, distance-aware location selection, kinematics-aware travel-time propagation, and LLM-based duration estimation. To evaluate realism beyond aggregate spatiotemporal statistics, we introduce an anomaly-detection-based evaluation framework using two complementary detectors to assess behavioral and semantic plausibility. Experiments on benchmark and large-scale simulation datasets show that TrajGenAgent improves spatiotemporal fidelity, semantic coherence, and individual-specific behavioral realism over representative neural and LLM-based baselines, while avoiding parameter updates.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12657
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- agents
- benchmark
- dataset
- models
- workflows
