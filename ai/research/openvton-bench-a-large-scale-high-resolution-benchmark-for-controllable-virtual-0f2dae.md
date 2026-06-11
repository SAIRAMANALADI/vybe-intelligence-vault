---
title: 'OpenVTON-Bench: A Large-Scale High-Resolution Benchmark for Controllable Virtual
  Try-On Evaluation'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2601.22725
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524104+00:00'
tags: []
status: new
---

# OpenVTON-Bench: A Large-Scale High-Resolution Benchmark for Controllable Virtual Try-On Evaluation

## Summary

arXiv:2601.22725v4 Announce Type: replace-cross 
Abstract: Recent advances in diffusion models have significantly elevated the visual fidelity of Virtual Try-On (VTON) systems, yet reliable evaluation remains a persistent bottleneck. Traditional metrics struggle to quantify fine-grained texture details and semantic consistency, while existing datasets fail to meet commercial standards in scale and diversity. We present OpenVTON-Bench, a large-scale benchmark comprising approximately 100K high-resolution image pairs (up to $1536 \times 1536$). The dataset is constructed using DINOv3-based hierarchical clustering for semantically balanced sampling and Gemini-powered dense captioning, ensuring a uniform distribution across 20 fine-grained garment categories. To support reliable evaluation, we propose a multi-modal protocol that measures VTON quality along five interpretable dimensions: background consistency, identity fidelity, texture fidelity, shape plausibility, and overall realism. The protocol integrates VLM-based semantic reasoning with a novel Multi-Scale Representation Metric based on SAM3 segmentation and morphological erosion, enabling the separation of boundary alignment errors from internal texture artifacts. Experimental results show strong agreement with human judgments (Kendall's $\tau$ of 0.833 vs. 0.611 for SSIM), establishing a robust benchmark for VTON evaluation.

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

Original source: https://arxiv.org/abs/2601.22725
