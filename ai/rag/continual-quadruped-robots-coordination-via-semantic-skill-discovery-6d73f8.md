---
title: Continual Quadruped Robots Coordination via Semantic Skill Discovery
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.08102
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524466+00:00'
tags:
- agents
- rag
status: new
---

# Continual Quadruped Robots Coordination via Semantic Skill Discovery

## Summary

arXiv:2606.08102v2 Announce Type: replace-cross 
Abstract: Multi-quadruped coordination has attracted increasing attention due to its enhanced payload capacity, broader contact coverage, and improved adaptability to challenging tasks. Existing methods for multi-quadruped manipulation typically focus on predefined or closed task families, often relying on multi-agent reinforcement learning (MARL) to train task-specific coordination policies. However, such methods struggle in open-ended continual learning settings, where tasks arrive sequentially and robots are expected to acquire new coordination skills while reusing previously learned ones without catastrophic forgetting. To address this challenge, we propose Conquer, a semantic skill-library framework that formulates continual multi-quadruped coordination as a retrieve-adapt-update process. First, to accommodate varying team sizes across tasks, we design a team-structured Self-Allies-Goal (SAG) backbone that supports variable-cardinality robot teams by explicitly modeling each robot's own state, teammate context, and task goal. For each incoming task, Conquer constructs a task-level semantic descriptor from pre-execution information and retrieves a relevant skill from the library for adaptation. After successful execution, Conquer updates the skill library by extracting trajectory-level semantic descriptors and organizing them according to semantic distance, thereby enabling continual skill accumulation and cross-task knowledge transfer. Simulation experiments show that Conquer achieves a final average success rate of 95.6%, demonstrating strong forward transfer and negligible catastrophic forgetting. Real-world rollouts on Unitree Go2 teams further validate the deployment feasibility of Conquer for practical multi-quadruped coordination. Simulation and real-robot demonstration videos are available at: https://conquer-project.pages.dev/.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- agents
- rag

## Source

Original source: https://arxiv.org/abs/2606.08102
