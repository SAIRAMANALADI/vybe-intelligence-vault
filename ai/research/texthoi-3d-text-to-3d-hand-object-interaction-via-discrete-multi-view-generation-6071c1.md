---
title: 'TextHOI-3D: Text-to-3D Hand-Object Interaction via Discrete Multi-View Generation
  and Joint Mesh Optimization'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11805
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522816+00:00'
tags: []
status: new
---

# TextHOI-3D: Text-to-3D Hand-Object Interaction via Discrete Multi-View Generation and Joint Mesh Optimization

## Summary

arXiv:2606.11805v1 Announce Type: cross 
Abstract: Text-conditioned 3D generation has progressed rapidly for images and isolated objects, but producing a hand-object mesh remains challenging: the output must preserve language semantics, cross-view consistency, object geometry, articulated hand shape, and physically plausible contact. We present TextHOI-3D, a staged framework that uses generated multi-view observations as an explicit interface between text-conditioned visual generation and geometry-aware hand-object recovery. TextHOI-3D learns a compact VQ token space for fixed-camera hand-object observations, predicts multi-view visual tokens from text with a CLIP-conditioned visual autoregressive model, and recovers a unified hand-object mesh through prior initialization, multi-view joint optimization, and anti-penetration refinement. The design separates semantic generation from geometric recovery while keeping both stages connected by a discrete multi-view representation. On HO3D-derived evaluations, the multi-view setting reduces object CD from 17.26 mm to 4.92 mm and penetration volume from 5.3721 cm^3 to 0.2193 cm^3 compared with a single-view counterpart, while improving hand errors and surface F-scores. These results support multi-view visual tokens as an effective intermediate representation for text-driven 3D hand-object mesh creation.

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

Original source: https://arxiv.org/abs/2606.11805
