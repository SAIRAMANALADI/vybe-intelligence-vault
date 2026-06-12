---
title: Trajectory Geometry of Transformer Representations Across Layers
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.09287
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.018376+00:00'
tags:
- meta-ai
- models
status: active
id: arxiv:2606.09287
first_seen: '2026-06-12T10:40:06.018376+00:00'
last_seen: '2026-06-12T10:40:06.018376+00:00'
---

# Trajectory Geometry of Transformer Representations Across Layers

## Summary

arXiv:2606.09287v2 Announce Type: replace 
Abstract: Understanding how transformer representations evolve across layers, not merely what they encode, remains an open problem in mechanistic interpretability. We recast the transformer forward pass as a discrete population trajectory through a high-dimensional representation manifold, drawing on geometric tools from computational neuroscience. Rather than probing for pre-specified features, we characterize trajectory geometry using five metrics computed directly in the ambient space: trajectory length, curvature, a semantic convergence index, layerwise cosine similarity, and representational stability. Across three model families (GPT-2, TinyLlama, Qwen2.5) and five controlled prompt families, we report four findings. First, semantically related prompts converge significantly in middle-to-late layers (peak CI 0.41--0.58, p<0.001, Mann-Whitney U), consistent with attractor-like dynamics. Second, reasoning tasks produce trajectories of greater curvature than lexical variations (0.71--0.83 rad vs. 0.27--0.31 rad), suggesting curvature encodes computational complexity. Third, ambiguous tokens exhibit trajectory bifurcation with up to 5.6x representational separation by the final layer, absent in unambiguous controls. Fourth, layerwise cosine similarity reveals a universal three-phase structure: encoding, elaboration, and output preparation, consistent across all three architectures. All four effects vanish under shuffled-layer and random-embedding controls. We release a fully open-source, model-agnostic pipeline and argue that trajectory geometry constitutes a principled, probe-free lens for mechanistic interpretability.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.09287
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- meta-ai
- models
