---
title: 'ARGUS: Stacked Multi-View Identity Mosaic Injection for Subject-Preserving
  Video Generation'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11670
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522636+00:00'
tags: []
status: new
---

# ARGUS: Stacked Multi-View Identity Mosaic Injection for Subject-Preserving Video Generation

## Summary

arXiv:2606.11670v1 Announce Type: cross 
Abstract: Subject-preserving video generation is not solved by frontal-face similarity alone: a generated person must remain recognizable across motion, large viewpoint changes, expression shifts, occlusion, scale variation, and conflicts among text, first-frame, and identity references. We argue that the central bottleneck is the point-reference paradigm, which collapses identity into a single static observation entangled with pose, accessories, lighting, background, and camera statistics. We introduce Argus, a Wan-based framework centered on Stacked Multi-View Identity Mosaic Injection (SMII). SMII converts MLLM-selected image/video identity evidence into a 3*3 stacked mosaic, synchronizes the mosaic with the current diffusion time, and injects it as negative-time read-only memory in Wan's native token space. This turns identity from an external clean adapter or a single reference image into a compact dynamic distribution. Around SMII, an MLLM Identity Director selects informative identity moments and resolves condition conflicts, while no-cross-pair counterfactual training, Temporal Identity Annealing, and Adaptive Self-Likeness Guidance improve robustness without paired subject-video supervision. We further release HardID-Celeb, a public-figure identity-stress benchmark, and introduce YawScore and OccScore to probe large-yaw and first-frame-occlusion robustness. Argus achieves state-of-the-art results on OpenS2V-Eval Human-Domain, reaching 64.38 Total Score, 71.86 FaceSim, 51.62 NexusScore, and 79.14 NaturalScore. On HardID-Celeb, Argus obtains 76.80 FaceSim and improves YawScore and OccScore by 12.60 and 15.10 points over the strongest baselines, demonstrating that dynamic identity memory and large-scale counterfactual self-supervision are highly effective for subject-preserving video generation.

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

Original source: https://arxiv.org/abs/2606.11670
