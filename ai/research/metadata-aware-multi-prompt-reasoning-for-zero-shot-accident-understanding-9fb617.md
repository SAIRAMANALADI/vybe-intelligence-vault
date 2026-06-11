---
title: Metadata-Aware Multi-Prompt Reasoning for Zero-Shot Accident Understanding
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12047
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523104+00:00'
tags: []
status: new
---

# Metadata-Aware Multi-Prompt Reasoning for Zero-Shot Accident Understanding

## Summary

arXiv:2606.12047v1 Announce Type: cross 
Abstract: In this paper, we address the problem of zero-shot understanding of accidents from surveillance videos by identifying when an impact event occurs, what type of impact it is, and where in the frame it occurs using natural language. We propose a three-stage pipeline that decomposes the accident understanding into when, what, and where. The first stage extracts a short temporal window around the impact using vision-language similarity. In the second stage, we perform metadata-driven multi-prompt reasoning with five complementary views (baseline, motion, geometry, contrast, and tiebreaker) and resolve disagreement via an entropy-gated pairwise adjudicator. Finally, we localize the impact of an open-vocabulary detector queried on the predicted accident type and scene layout, and aggregate detections across keyframes using a score-weighted centroid. Our pipeline achieves a substantial improvement in the harmonic-mean score over a centre-of-frame baseline on the zero-shot ACCIDENT @ CVPR benchmark. We show that decomposing zero-shot video understanding into temporal localization, semantic classification, and spatial grounding enable more reliable reasoning with vision-language models than direct prompting alone.

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

Original source: https://arxiv.org/abs/2606.12047
