---
title: 'Energy-Conserved Neural Pipelines: Attenuating Error Propagation in Modular
  Neural Networks via Physical Conservation Constraints'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11341
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.795820+00:00'
tags:
- rag
status: new
---

# Energy-Conserved Neural Pipelines: Attenuating Error Propagation in Modular Neural Networks via Physical Conservation Constraints

## Summary

arXiv:2606.11341v1 Announce Type: new 
Abstract: Modular neural network pipelines suffer from error compounding: noise at any module boundary propagates and potentially amplifies through subsequent modules. We introduce energy conservation as a hard physical constraint on inter-module information flow. Activation energy (the squared L2 norm of feature vectors) is enforced to be exactly preserved at every module boundary. Unlike soft energy penalties, conservation is an inviolable law: the network may redistribute energy across neurons but cannot create or destroy it. Four experiments on CIFAR-10 demonstrate: (1) conservation retains 77.4% of clean accuracy at noise sigma=0.2, versus 35.1% for baselines and 30.9% for energy-penalized models (p<0.001, 5 seeds); (2) pipelines become depth-invariant, retaining 93.3% at depths 2 through 5 with noise at every boundary; (3) the advantage generalizes to systematic bias (+45.1%), Gaussian (+40.4%), and adversarial noise (+4.8%), with a principled non-effect on dropout (-0.3%); (4) on ResNet-18, the conservation advantage scales inversely with intrinsic normalization: +0.3 pp with BatchNorm, +26.2 pp without at sigma=0.2, reaching +58.0 pp at sigma=0.5. Experiment 5 validates the operator on a real modular robotic pipeline (MuJoCo physics, Franka Panda). Across three independent runs on separate machines (90 trials per cell), conservation provides +18.9 pp average advantage on monocular-depth-style noise. A formal bound proves conserved noise energy is strictly less than input noise energy.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- rag

## Source

Original source: https://arxiv.org/abs/2606.11341
