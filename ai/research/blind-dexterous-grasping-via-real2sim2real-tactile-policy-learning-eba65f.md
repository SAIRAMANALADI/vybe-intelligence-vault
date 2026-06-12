---
title: Blind Dexterous Grasping via Real2Sim2Real Tactile Policy Learning
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11767
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.107840+00:00'
tags:
- benchmark
status: active
id: arxiv:2606.11767
first_seen: '2026-06-12T10:40:03.107840+00:00'
last_seen: '2026-06-12T10:40:03.107840+00:00'
---

# Blind Dexterous Grasping via Real2Sim2Real Tactile Policy Learning

## Summary

arXiv:2606.11767v2 Announce Type: replace-cross 
Abstract: Blind grasping with a dexterous hand is a crucial manipulation capability. Nevertheless, learning such tactile-only policies for real robots remains challenging due to the tactile sim-to-real gap and the limited expressiveness of sparse tactile signals. To bridge this gap, we propose a framework for tactile-only blind grasping that is deployable on a physical multi-fingered robotic hand. Our approach combines three key components. First, we introduce a Real2Sim tactile calibration pipeline that constructs a contact-calibrated digital-twin simulator capable of reproducing real tactile signals. Second, we improve the expressiveness of sparse tactile observations using a layout-aware tactile encoder, which incorporates sensor-geometry priors through self-supervised pretraining. Third, to improve generalization to unseen objects, we train object-specific reinforcement-learning experts in the calibrated simulator and aggregate their successful grasp trajectories into a tactile-conditioned Diffusion Policy. We evaluate our method on a physical LEAP Hand equipped with distributed tactile sensing across 10 seen and 10 unseen objects. The deployed policy achieves a 27\% real-world grasp success rate across all 20 objects, without real-world grasping demonstrations or visual input. Simulation ablations show that layout-aware tactile pretraining improves grasping performance, while sensing-level evaluations confirm that Real2Sim calibration increases the consistency of tactile contact events between simulation and hardware. Together, these results suggest that contact-event calibration, geometry-aware tactile representation learning, and diffusion-based policy aggregation provide an effective path toward tactile-only blind grasping on real dexterous robotic hands. Project page:Dex-Blind-Grasp.github.io.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11767
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
