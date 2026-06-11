---
title: A2SG:Adaptive and Asymmetric Surrogate Gradients for Training Deep Spiking
  Neural Networks
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11236
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.796778+00:00'
tags: []
status: new
---

# A2SG:Adaptive and Asymmetric Surrogate Gradients for Training Deep Spiking Neural Networks

## Summary

arXiv:2606.11236v1 Announce Type: cross 
Abstract: Training deep spiking neural networks (SNNs) remains challenging due to sharp loss landscapes and temporal inconsistency caused by surrogate gradients. To address these challenges, we propose a unified framework: adaptive and asymmetric surrogate gradients A2SG. The adaptive gradients adjust an effective window for spatio-temporal adaptation, reducing spatial gradient variation and maintaining directional consistency of gradients over time. The asymmetric gradients reflect neuronal dynamics by assigning larger gradients to neurons with higher membrane potentials, and we prove that they yield lower variation than symmetric surrogates. Our analysis further establishes a direct connection between local gradient variation and the curvature of the loss landscape, providing a principled explanation for how A2SG promotes convergence to flatter minima and improves generalization. We conduct extensive experiments on diverse models, including CNN-based and Transformer-based SNNs, across various tasks such as image classification using both static and neuromorphic datasets, as well as segmentation. The results demonstrate that A2SG consistently improves accuracy and energy efficiency, establishing it as a general and reliable solution for training deep SNNs. Our code is available at https://github.com/KIST-NCL/A2SG.git.

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

Original source: https://arxiv.org/abs/2606.11236
