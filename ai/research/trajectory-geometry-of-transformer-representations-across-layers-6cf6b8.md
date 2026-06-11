---
title: Trajectory Geometry of Transformer Representations Across Layers
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.09287
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.798899+00:00'
tags:
- models
status: new
---

# Trajectory Geometry of Transformer Representations Across Layers

## Summary

arXiv:2606.09287v2 Announce Type: replace 
Abstract: Understanding how transformer representations evolve across layers, not merely what they encode, remains an open problem in mechanistic interpretability. We recast the transformer forward pass as a discrete population trajectory through a high-dimensional representation manifold, drawing on geometric tools from computational neuroscience. Rather than probing for pre-specified features, we characterize trajectory geometry using five metrics computed directly in the ambient space: trajectory length, curvature, a semantic convergence index, layerwise cosine similarity, and representational stability. Across three model families (GPT-2, TinyLlama, Qwen2.5) and five controlled prompt families, we report four findings. First, semantically related prompts converge significantly in middle-to-late layers (peak CI 0.41--0.58, p<0.001, Mann-Whitney U), consistent with attractor-like dynamics. Second, reasoning tasks produce trajectories of greater curvature than lexical variations (0.71--0.83 rad vs. 0.27--0.31 rad), suggesting curvature encodes computational complexity. Third, ambiguous tokens exhibit trajectory bifurcation with up to 5.6x representational separation by the final layer, absent in unambiguous controls. Fourth, layerwise cosine similarity reveals a universal three-phase structure: encoding, elaboration, and output preparation, consistent across all three architectures. All four effects vanish under shuffled-layer and random-embedding controls. We release a fully open-source, model-agnostic pipeline and argue that trajectory geometry constitutes a principled, probe-free lens for mechanistic interpretability.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models

## Source

Original source: https://arxiv.org/abs/2606.09287
