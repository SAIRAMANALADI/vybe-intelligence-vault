---
title: Neural-Parameterized Cellular Automata for Wildfire Spread
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11676
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.797305+00:00'
tags: []
status: new
---

# Neural-Parameterized Cellular Automata for Wildfire Spread

## Summary

arXiv:2606.11676v1 Announce Type: cross 
Abstract: Traditional wildfire models rely on rigid, low-dimensional parameters and static fuel maps, frequently underpredicting fire spread. To address this weakness, we introduce a hybrid deep-learning parameterized Probabilistic Cellular Automata (CA) framework implemented in JAX. Our approach employs a Multi-Scale Convolutional Neural Network to dynamically generate spatially varying parameters that govern fire-spread probability, wind alignment, and slope influence. This hybrid design captures complex, nonlinear environmental interactions while preserving the physical interpretability of the underlying three-state CA. The JAX implementation enables hardware acceleration and gradient-based parameter calibration. Evaluated on six large-scale wildfires in the western United States, the model maintains IoU > 0.6 over 72-hour forecast horizons after a 10-day data assimilation window during which the model is fitted incrementally to observed perimeters; the resulting forecast is a conditional projection of fire growth under the suppression regime already ncoded in those observations.

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

Original source: https://arxiv.org/abs/2606.11676
