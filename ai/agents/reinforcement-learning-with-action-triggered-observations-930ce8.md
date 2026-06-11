---
title: Reinforcement Learning with Action-Triggered Observations
category: ai/agents
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2510.02149
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.798185+00:00'
tags:
- agents
status: new
---

# Reinforcement Learning with Action-Triggered Observations

## Summary

arXiv:2510.02149v2 Announce Type: replace 
Abstract: We introduce Action-Triggered Sporadically Traceable Markov Decision Processes (ATST-MDPs), a reinforcement learning framework for partial observability in which full state observations occur stochastically at each step, with probability determined by the chosen action. We derive Bellman equations tailored to this setting and establish the existence of an optimal policy. Exploiting the fact that sporadic observations reveal the full state, we provide an equivalent formulation in which agents commit to action-sequences between consecutive observations. Under the linear MDP assumption, we show that the value function over such action-sequences admits a linear representation in a finite-dimensional feature map, enabling standard regression-based methods. As an application, we derive ATST-LSVI-UCB, an optimistic algorithm achieving regret $\widetilde{O}(\sqrt{Kd^3(1-\gamma)^{-3}})$ for episodic learning with geometrically distributed horizons, where $K$ is the number of episodes, $d$ the feature dimension, and $\gamma$ the discount factor (episode continuation probability), matching the known rate for linear MDPs with full observability.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/agents
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- agents

## Source

Original source: https://arxiv.org/abs/2510.02149
