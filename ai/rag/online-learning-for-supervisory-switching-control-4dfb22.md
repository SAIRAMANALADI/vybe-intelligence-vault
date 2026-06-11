---
title: Online Learning for Supervisory Switching Control
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2603.14762
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.799516+00:00'
tags:
- rag
status: new
---

# Online Learning for Supervisory Switching Control

## Summary

arXiv:2603.14762v4 Announce Type: replace-cross 
Abstract: We study supervisory switching control for partially-observed linear dynamical systems. The objective is to identify and deploy a suitable controller for the unknown system by periodically selecting among a collection of $N$ candidate controllers, some of which may destabilize the underlying system. While classical estimator-based supervisory control guarantees asymptotic stability, it lacks quantitative finite-time performance bounds. Conversely, current non-asymptotic methods in both online learning and system identification require restrictive assumptions that are incompatible in a control setting, such as system stability, which preclude testing potentially unstable controllers. To bridge this gap, we propose a novel, non-asymptotic analysis of supervisory control that adapts multi-armed bandit algorithms to a control-theoretic setting. The proposed data-driven algorithm evaluates candidate controllers via scoring criteria that leverage system observability to isolate the effects of state history, enabling both detection of destabilizing controllers and accurate system identification. We present two algorithmic variants with dimension-free, finite-time guarantees, where each identifies the matching controller in $O(N \log^2 N)$ steps, while simultaneously achieving finite $L_2$-gain with respect to system disturbances.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- rag

## Source

Original source: https://arxiv.org/abs/2603.14762
