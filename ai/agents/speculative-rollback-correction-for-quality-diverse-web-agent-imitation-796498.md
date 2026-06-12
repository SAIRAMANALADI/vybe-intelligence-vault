---
title: Speculative Rollback Correction for Quality-Diverse Web Agent Imitation
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12485
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.482536+00:00'
tags:
- agents
- models
status: new
---

# Speculative Rollback Correction for Quality-Diverse Web Agent Imitation

## Summary

arXiv:2606.12485v1 Announce Type: cross 
Abstract: Training interactive web agents through imitation learning from expert trajectories has emerged as a highly effective approach. However, determining the optimal timing for expert intervention presents a critical challenge in this context. Delayed intervention often leads to the accumulation of early-stage errors, pushing the page state into an irrecoverable regime. Conversely, premature or excessive intervention causes the agent to become overly reliant on expert policies, trapping the model in local optima characterized by a single, rigid trajectory. We propose Speculative Rollback Correction (SRC), a branch-level imitation framework for resettable agent environments. Instead of requesting teacher labels at every visited state or correcting only after a completed trajectory, SRC uses fixed-horizon branch review: the student executes a short speculative segment before teacher review, and the teacher localizes the first harmful deviation only when local progress breaks. Rollback preserves useful prefixes, while successful rollouts are filtered by a hard verifier and retained in a lightweight quality-diversity archive. The resulting data supports next-action supervised fine-tuning on both localized corrections and verifier-passing trajectories. On WebArena-Infinity, SRC collects 977 verifier-passing trajectories and 9,183 next-action examples; fixed-horizon review improves the recovery-versus-query tradeoff over step-level review while retaining verifier-passing solution variants. Code is available at https://github.com/LongkunHao/SRC_gui_agent.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12485
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- agents
- models
