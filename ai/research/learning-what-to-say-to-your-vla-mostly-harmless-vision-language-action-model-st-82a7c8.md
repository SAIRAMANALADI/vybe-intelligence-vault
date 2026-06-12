---
title: 'Learning What to Say to Your VLA: Mostly Harmless Vision Language Action Model
  Steering'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.12299
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.016756+00:00'
tags:
- models
status: active
id: arxiv:2606.12299
first_seen: '2026-06-12T10:40:06.016756+00:00'
last_seen: '2026-06-12T10:40:06.016756+00:00'
---

# Learning What to Say to Your VLA: Mostly Harmless Vision Language Action Model Steering

## Summary

arXiv:2606.12299v1 Announce Type: cross 
Abstract: Vision-Language-Action (VLA) models provide a natural language interface to robot control, but the mapping from language to behavior is often brittle and unintuitive: semantically similar instructions can induce drastically different behaviors, while some capabilities may not be elicitable through prompting alone. As a result, both human instructions and zero-shot language models can fail to reliably steer VLAs toward successful task execution. In this work, we propose a framework that interactively searches for language sequences that improve closed-loop VLA task performance, distills these sequences into a test-time language feedback policy (LFP), and learns an improvement head that predicts when language steering will improve performance. We conformalize this improvement head to prevent harmful steering interventions, where the LFP decreases task performance relative to the original instruction on out-of-distribution scenarios. Crucially, our approach operates on arbitrary frozen pre-trained VLAs, requiring neither access to the original training distribution nor fine-tuning of the underlying model. On seen environments, our conformalized LFP improves base VLA performance by 24.7% in simulation and 65.0% in hardware. On visual and semantic perturbations, our conformalized LFP has strong harmlessness guarantees, and produces recovery behaviors not observed with open-loop prompting.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12299
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- models
