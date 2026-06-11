---
title: Mahalanobis-Guided Latent OOD Detection for Hybrid ES-DRL Control in Time-Varying
  Systems
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11474
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.795885+00:00'
tags: []
status: new
---

# Mahalanobis-Guided Latent OOD Detection for Hybrid ES-DRL Control in Time-Varying Systems

## Summary

arXiv:2606.11474v1 Announce Type: new 
Abstract: In this paper, we study Mahalanobis-guided latent out-of-distribution (OOD) detection for test-time RL controller switching in nonlinear time-varying systems. RL controllers can quickly control high-dimensional systems within the training distribution, but their performance can degrade when time-varying dynamics produce unseen observations. We consider a combined ES--DRL controller, where RL provides fast in-distribution actions and bounded extremum seeking (ES) provides robust model-independent control under OOD operation. The key challenge is deciding when to switch. We train a variational autoencoder (VAE) on in-distribution beam-profile observations and use Mahalanobis distance in the VAE latent space to detect OOD beam profiles at test time. This OOD decision sets a binary switch that selects either the RL controller or the ES controller. We evaluate the approach in safety-critical particle accelerator control. In this setting, spatial magnet motion creates OOD beam profiles that were not seen during RL training. Visualization of the VAE latent space shows that the proposed method identifies this OOD scenario and provides an interpretable signal for switching between RL and ES in the combined controller.

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

Original source: https://arxiv.org/abs/2606.11474
