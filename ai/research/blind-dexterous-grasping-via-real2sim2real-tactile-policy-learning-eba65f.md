---
title: Blind Dexterous Grasping via Real2Sim2Real Tactile Policy Learning
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11767
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522777+00:00'
tags: []
status: new
---

# Blind Dexterous Grasping via Real2Sim2Real Tactile Policy Learning

## Summary

arXiv:2606.11767v1 Announce Type: cross 
Abstract: Blind grasping with a dexterous hand is a crucial manipulation capability. Nevertheless, learning such tactile-only policies for real robots remains challenging due to the tactile sim-to-real gap and the limited expressiveness of sparse tactile signals. To bridge this gap, we propose a framework for tactile-only blind grasping that is deployable on a physical multi-fingered robotic hand. Our approach combines three key components. First, we introduce a Real2Sim tactile calibration pipeline that constructs a contact-calibrated digital-twin simulator capable of reproducing real tactile signals. Second, we improve the expressiveness of sparse tactile observations using a layout-aware tactile encoder, which incorporates sensor-geometry priors through self-supervised pretraining. Third, to improve generalization to unseen objects, we train object-specific reinforcement-learning experts in the calibrated simulator and aggregate their successful grasp trajectories into a tactile-conditioned Diffusion Policy. We evaluate our method on a physical LEAP Hand equipped with distributed tactile sensing across 10 seen and 10 unseen objects. The deployed policy achieves a 27\% real-world grasp success rate across all 20 objects, without real-world grasping demonstrations or visual input. Simulation ablations show that layout-aware tactile pretraining improves grasping performance, while sensing-level evaluations confirm that Real2Sim calibration increases the consistency of tactile contact events between simulation and hardware. Together, these results suggest that contact-event calibration, geometry-aware tactile representation learning, and diffusion-based policy aggregation provide an effective path toward tactile-only blind grasping on real dexterous robotic hands. Project page:Dex-Blind-Grasp.github.io.

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

Original source: https://arxiv.org/abs/2606.11767
