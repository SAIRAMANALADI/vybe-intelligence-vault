---
title: Offline Diffusion Policy for Multi-User Delay-Constrained Scheduling
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2501.12942
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523462+00:00'
tags: []
status: new
---

# Offline Diffusion Policy for Multi-User Delay-Constrained Scheduling

## Summary

arXiv:2501.12942v2 Announce Type: replace 
Abstract: Effective multi-user delay-constrained scheduling is crucial in various real-world applications, including embodied AI, instant messaging, live streaming, and data center management, where efficient resource allocation is required among users with diverse delay sensitivities. In these scenarios, schedulers must make real-time decisions to satisfy both delay and resource constraints without prior knowledge of system dynamics, which are often time-varying and challenging to estimate. {Current learning-based methods typically require online interactions with actual systems during the training stage. Therefore, these approaches are often difficult or impractical, as they can significantly degrade system performance and incur substantial service costs.} To address these challenges, we propose a novel offline reinforcement learning-based algorithm, named \underline{S}cheduling By \underline{O}ffline Learning with \underline{C}ritic Guidance and \underline{D}iffusion Model (SOCD), to learn efficient scheduling policies purely from pre-collected \emph{offline data}. SOCD innovatively employs a diffusion policy, complemented by a sampling-free critic network for policy guidance. By integrating the Lagrangian multiplier optimization into the offline reinforcement learning, SOCD efficiently trains high-quality constraint-aware policies exclusively from available datasets, eliminating the need for online interactions with the system. Experimental results demonstrate that SOCD is resilient to various system dynamics, including partially observable and large-scale environments, and delivers superior performance compared to existing methods.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- None

## Source

Original source: https://arxiv.org/abs/2501.12942
