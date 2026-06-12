---
title: 'From Imitation to Alignment: Human-Preference Flow Policies for Long-Horizon
  Sidewalk Navigation'
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12603
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.482687+00:00'
tags:
- agents
status: new
---

# From Imitation to Alignment: Human-Preference Flow Policies for Long-Horizon Sidewalk Navigation

## Summary

arXiv:2606.12603v1 Announce Type: cross 
Abstract: Autonomous long-horizon sidewalk navigation is essential for micro-mobility applications such as robotic food delivery and assistive electronic wheelchairs. Unlike autonomous driving on the road, long-horizon sidewalk navigation requires precise maneuvering through unpredictable sidewalk terrains and pedestrians, with a lightweight perception stack as minimal as a single monocular RGB camera. While imitation learning (IL) from demonstrations offers a practical solution, the resulting autopilot policy often suffers from compounding errors, a lack of social compliance on sidewalks, and deficiencies in counterfactual reasoning to handle complex situations. To address these challenges, we introduce FlowPilot, a mapless navigation policy that achieves robust and efficient long-horizon navigation performance using only a monocular RGB camera. We first propose to use anchored flow matching as an action representation for policy pre-training on large-scale robot fleet data and to capture the diverse, complex, multimodal distribution of sidewalk navigation behaviors. To bridge the gap between imitation and alignment, we further design a human-in-the-loop preference learning scheme to tune the policy on a small amount of human intervention data. It strengthens the model's counterfactual reasoning and social compliance on sidewalks. We evaluate FlowPilot through extensive simulation and real-world experiments in diverse sidewalk environments. FlowPilot achieves 42% success rate and 66% route completion in simulation, while FlowPilot-HP further improves real-world robustness and social compliance, reducing IR by 40.0% and NIR by 52.1% relative to the base model.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12603
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- agents
