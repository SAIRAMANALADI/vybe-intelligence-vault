---
title: Learning Object Manipulation from Scratch via Contrastive Interaction
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11525
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.797115+00:00'
tags:
- agents
- rag
status: new
---

# Learning Object Manipulation from Scratch via Contrastive Interaction

## Summary

arXiv:2606.11525v1 Announce Type: cross 
Abstract: Contrastive Reinforcement Learning (CRL) has seen recent success in a wide variety of goal-conditioned robotics tasks by learning structured representations of the dynamics. However, despite its success in locomotion and simpler control domains, CRL often struggles in interaction-rich manipulation. We argue that a key source of this difficulty is object-centric interaction, such as contact or grasping, that induces distinct changes in the underlying dynamic modes. In this work, we formulate manipulation dynamics as a piecewise-smooth Markov process and show that interaction-induced mode changes create piecewise nonlinear reachability structures that are difficult for standard CRL energy functions to represent and plan over. Based on this analysis, we introduce Interaction-weighted Resampling (IWR). IWR performs interaction-aware resampling around phases before, during, and after interactions, encouraging the learned representation to preserve the mode boundaries that determine future reachability to capture multi-modal and piecewise nonlinear reachability. Across interaction-centric environments, including 2D dynamic control, robotic manipulation, and robot air hockey, IWR improves both sample efficiency and overall performance over prior CRL methods, with 19.8% average improvement in simulation. Finally, using a sim-to-real pipeline with policies trained by IWR, we demonstrate the first real-world goal-conditioned robot air hockey agent capable of hitting goals, improving success from 25% to 60%. Project Page: IWR-arxiv.github.io.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- agents
- rag

## Source

Original source: https://arxiv.org/abs/2606.11525
