---
title: 'Towards Deep Learning Surrogate for the Forward Problem in Electrocardiology:
  A Scalable Alternative to Physics-Based Models'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2512.13765
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524020+00:00'
tags: []
status: new
---

# Towards Deep Learning Surrogate for the Forward Problem in Electrocardiology: A Scalable Alternative to Physics-Based Models

## Summary

arXiv:2512.13765v2 Announce Type: replace-cross 
Abstract: The forward problem in electrocardiology, computing body surface potentials from cardiac electrical activity, is traditionally solved using physics-based models such as the bidomain or monodomain equations. While accurate, these approaches are computationally expensive, limiting their use in real-time and large-scale clinical applications. We propose a proof-of-concept deep learning (DL) framework as an efficient surrogate for forward solvers. The model adopts a time-dependent, attention-based sequence-to-sequence architecture to predict electrocardiogram (ECG) signals from cardiac voltage propagation maps. A hybrid loss combining Huber loss with a spectral entropy term was introduced to preserve both temporal and frequency-domain fidelity. Using 2D tissue simulations incorporating healthy, fibrotic, and gap junction-remodelled conditions, the model achieved high accuracy (mean $R^2 = 0.99 \pm 0.01$). Ablation studies confirmed the contributions of convolutional encoders, time-aware attention, and spectral entropy loss. These findings highlight DL as a scalable, cost-effective alternative to physics-based solvers, with potential for clinical and digital twin applications.

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

Original source: https://arxiv.org/abs/2512.13765
