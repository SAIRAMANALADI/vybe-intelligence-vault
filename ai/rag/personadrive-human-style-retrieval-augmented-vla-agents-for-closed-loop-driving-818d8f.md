---
title: 'PersonaDrive: Human-Style Retrieval-Augmented VLA Agents for Closed-Loop Driving
  Simulation'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12616
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.101500+00:00'
tags:
- agents
- dataset
- leaderboard
- models
- rag
status: active
id: arxiv:2606.12616
first_seen: '2026-06-12T10:40:03.101500+00:00'
last_seen: '2026-06-12T10:40:03.101500+00:00'
---

# PersonaDrive: Human-Style Retrieval-Augmented VLA Agents for Closed-Loop Driving Simulation

## Summary

arXiv:2606.12616v1 Announce Type: new 
Abstract: Closed-loop driving simulators typically populate their environments with non-ego traffic agents that behave largely the same way, produced either by rule-based traffic managers or by learned models trained toward a single behavioral mode. Recent work introduces style variation through post-hoc labels on observational data or LLM-inferred reward weights, but these signals act as proxies for what a style should reward rather than demonstrations of humans explicitly asked to drive in that style. We introduce PersonaDrive, a pipeline that conditions a vision-language-action (VLA) driving agent on retrieved demonstrations from a style-instructed human driving dataset, in which participants drive CARLA leaderboard routes under aggressive, neutral, and conservative instructions on a driver-in-the-loop rig. The pipeline has three stages: (i) offline triplet mining over per-style human driving data using a combined image-text similarity score; (ii) training a lightweight retrieval head that fuses frozen visual features with a small control encoder over per-style databases; and (iii) fine-tuning a single VLA backbone to treat retrieved context points as in-context behavioral demonstrations during waypoint prediction. At inference, the same backbone is conditioned on any style by swapping which per-style database the retrieval head queries, so selecting a style requires no per-style retraining while enabling human-style, style-diverse non-ego agents for closed-loop simulation. On Bench2Drive, PersonaDrive (no style) improves the driving score by 4.6% over SimLingo and 2.5% over HiP-AD, and under style conditioning attains the highest driving score in every style within a roughly 2% band (its weakest style surpassing the strongest baseline, DMW, by 5.4%), while average speed and acceleration rise by 18% and 25% from the conservative to the aggressive instruction.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12616
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- agents
- dataset
- leaderboard
- models
- rag
