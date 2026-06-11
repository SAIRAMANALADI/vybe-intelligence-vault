---
title: When Does Deep RL Beat Calibrated Baselines? A Benchmark Study on Adaptive
  Resource Control
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2605.26418
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524348+00:00'
tags:
- agents
status: new
---

# When Does Deep RL Beat Calibrated Baselines? A Benchmark Study on Adaptive Resource Control

## Summary

arXiv:2605.26418v2 Announce Type: replace-cross 
Abstract: A properly calibrated rule-based autoscaler can beat every one of six mainstream deep reinforcement learning (DRL) algorithms on cost across every workload we test - so when, if ever, does DRL actually help? We study this in RLScale-Bench, a reproducible benchmark and evaluation protocol for DRL on adaptive resource control, where an agent allocates compute to a dynamic workload under cost and service-level constraints. We evaluate PPO, DQN, A2C, SAC, TD3, and DDPG under matched architectures, training budgets, and reward functions against a calibrated rule-based baseline across six workload patterns and five seeds (240 runs), instantiate the benchmark on Kubernetes Horizontal Pod Autoscaling, and probe distribution-shift generalization. Three findings challenge common assumptions: (i) the calibrated controller achieves the lowest cost on all six workloads, though it trails the best RL agents on bursty and flash traffic; (ii) discrete-action algorithms outperform continuous-action ones by one to two orders of magnitude in constraint violations due to action-space mismatch; and (iii) no single algorithm dominates across workloads, with rankings shifting by up to four positions. The bottleneck in RL-based resource control is not algorithm selection but baseline calibration, reward engineering, and realistic evaluation protocols.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/agents
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- agents

## Source

Original source: https://arxiv.org/abs/2605.26418
