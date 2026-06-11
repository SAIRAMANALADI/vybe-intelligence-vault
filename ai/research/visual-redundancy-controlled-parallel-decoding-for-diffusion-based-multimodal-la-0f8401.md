---
title: Visual-Redundancy-Controlled Parallel Decoding for Diffusion-Based Multimodal
  Large Language Models
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2605.25820
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.798734+00:00'
tags: []
status: new
---

# Visual-Redundancy-Controlled Parallel Decoding for Diffusion-Based Multimodal Large Language Models

## Summary

arXiv:2605.25820v2 Announce Type: replace 
Abstract: Diffusion-based multimodal large language models (dMLLMs) decode by iteratively predicting tokens at multiple masked positions in parallel. This turns each decoding step into a position-selection problem: the model must choose not only which predictions are reliable in isolation, but also which positions should be committed together as context for later decoding steps. Existing confidence-based decoding ranks masked positions independently and commits the top-K positions, largely ignoring whether the committed tokens provide complementary visual grounding. We identify a step-level limitation of this strategy in multimodal settings: high-confidence tokens selected in the same step can rely on overlapping visual grounding, introducing visual redundancy among the committed tokens and leaving less complementary visual grounding available for later decoding. To quantify this effect, we introduce the Visual Redundancy Index (VRI), which measures visual grounding overlap among tokens committed in parallel. To control this redundancy during decoding, we propose Visual-Redundancy-Controlled Decoding (VRCD), a training-free inference-time decoding method that uses token-to-image attention to prioritize visually complementary positions. Across diverse multimodal benchmarks, VRCD reduces visual redundancy and remaining-position entropy with modest runtime overhead. In longer decoding experiments, it also achieves relative accuracy gains of up to 18.8% on M^3CoT and 6.9% on MMBench over confidence-based decoding. Code is available at https://github.com/infiniteYuanyl/VRCD.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- None

## Source

Original source: https://arxiv.org/abs/2605.25820
