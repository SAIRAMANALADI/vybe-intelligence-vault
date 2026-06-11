---
title: 'FlexiBrain: Resolution-Agnostic Voxel-Level Encoding for Native fMRI'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11500
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.797077+00:00'
tags: []
status: new
---

# FlexiBrain: Resolution-Agnostic Voxel-Level Encoding for Native fMRI

## Summary

arXiv:2606.11500v1 Announce Type: cross 
Abstract: The success of large-scale deep learning models in neuroscience is fundamentally constrained by severe data heterogeneity. Native fMRI data aggregated from diverse sources exhibit substantial variation in both spatial and temporal resolutions. Consequently, most existing frameworks rely on lengthy, rigid preprocessing pipelines that enforce uniformity across datasets. This practice introduces two critical limitations: (1) potential degradation of subject-specific anatomical information; (2) significant computational overhead, often requiring hours of processing per subject. Here, we propose FlexiBrain, a resolution-agnostic voxel-level encoding framework for native fMRI based on Mamba-JEPA. FlexiBrain defines patch sizes in real-world physical units and employs a dynamic patch resizing, thereby bypassing destructive spatial standardization while enabling direct ingestion of data in native space. We instantiate the framework using an efficient Mamba-JEPA backbone to model high-dimensional 4D fMRI signals. Across five diverse downstream neuroscience tasks, FlexiBrain consistently outperforms recent state-of-the-art methods, achieving gains of up to 12 percentage points without external data augmentation. Importantly, FlexiBrain functions as a seamless plug-in module, substantially reducing preprocessing costs and accelerating the development of robust voxel-level fMRI foundation models. Code is available at https://github.com/OneMore1/FlexiBrain.

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

Original source: https://arxiv.org/abs/2606.11500
