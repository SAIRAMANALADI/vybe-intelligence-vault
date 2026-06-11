---
title: 'Ouroboros-Spatial: Closing the Data-Model Loop for Spatial Reasoning'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11719
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522716+00:00'
tags: []
status: new
---

# Ouroboros-Spatial: Closing the Data-Model Loop for Spatial Reasoning

## Summary

arXiv:2606.11719v1 Announce Type: cross 
Abstract: Spatial reasoning remains a persistent challenge for multimodal large language models (MLLMs). Existing approaches largely rely on large-scale, statically curated datasets, where all training samples are treated uniformly regardless of the model's evolving capabilities. This static paradigm is inherently data-inefficient: training capacity is often spent on samples that are either trivial or overly difficult for the model at its current stage. To address this limitation, we propose Ouroboros-Spatial, a self-evolving training framework in which the model plays dual roles as a proposer and a solver. In each iteration, a frozen proposer generates spatial question-answer (QA) pairs from 3D scene metadata and raw video frames, together with executable code for deriving reliable ground truth. A learnable solver is then fine-tuned on the accepted samples, and its per-sample prediction confidence is used as a difficulty signal. This signal is fed back to the proposer in the next iteration, guiding it to generate questions better matched to the solver's current capabilities. Through this closed-loop design, the training distribution co-evolves with model ability, reducing redundant trivial examples while filtering out ambiguous or uninformative samples with limited learning value. Across six spatial reasoning benchmarks, Ouroboros-Spatial substantially improves Qwen3-VL-4B and Qwen3-VL-8B while using an order of magnitude fewer training examples than recent large-scale curated datasets. On VSI-Bench, it yields absolute gains of 9.9 and 6.8 points for the 4B and 8B models, respectively, enabling both to outperform a wide range of strong open-source and proprietary baselines.

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

Original source: https://arxiv.org/abs/2606.11719
