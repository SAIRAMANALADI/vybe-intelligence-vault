---
title: 'RelayFormer: A Unified Local-Global Attention Framework for Scalable Image
  and Video Manipulation Localization'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2508.09459
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523875+00:00'
tags: []
status: new
---

# RelayFormer: A Unified Local-Global Attention Framework for Scalable Image and Video Manipulation Localization

## Summary

arXiv:2508.09459v3 Announce Type: replace-cross 
Abstract: Visual manipulation localization (VML) aims to identify tampered regions in images and videos, a task that has become increasingly challenging with the rise of advanced editing tools. Existing methods face two central issues. The first is resolution diversity. Resizing or padding can distort subtle forensic cues and introduce unnecessary computational cost. The second is the difficulty of extending spatial models for images to spatio-temporal inputs in videos, which often results in maintaining separate architectures for the two data types. To address these challenges, we propose RelayFormer, a unified framework that adapts to varying resolutions and naturally handles both static and temporal visual data. RelayFormer partitions inputs into fixed-size sub-images and introduces Global Local Relay (GLR) tokens that propagate structured context through a relay-based attention mechanism. This design enables efficient exchange of global cues, such as semantic or temporal consistency, while preserving fine-grained manipulation artifacts. Unlike prior approaches that depend on uniform resizing or sparse attention, RelayFormer scales to variable resolutions and video sequences with minimal overhead. Experiments across diverse benchmarks demonstrate superior performance and strong efficiency, combining resolution adaptivity without interpolation or excessive padding, unified processing for images and videos, and a favorable balance between accuracy and computational cost. Code is available at~\href{https://github.com/WenOOI/RelayFormer}{https://github.com/WenOOI/RelayFormer}.

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

Original source: https://arxiv.org/abs/2508.09459
