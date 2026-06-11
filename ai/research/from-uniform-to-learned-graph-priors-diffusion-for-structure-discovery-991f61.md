---
title: 'From Uniform to Learned Graph Priors: Diffusion for Structure Discovery'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11831
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522855+00:00'
tags: []
status: new
---

# From Uniform to Learned Graph Priors: Diffusion for Structure Discovery

## Summary

arXiv:2606.11831v1 Announce Type: cross 
Abstract: Neural relational inference (NRI) methods discover interaction graphs from trajectories through variational reasoning on discrete potential edges. However, these methods typically rely on oversimplified, factorized graph priors. Such priors, typically nearing uniform distributions, treat edges as independent entities. This systemic misalignment does not match the real-world systems and yields diffuse and indecisive edge posteriors limiting the reliability of structural discovery. To address this, we propose \textit{Diff-prior}, a diffusion-parameterized adaptive prior used to calibrate latent graph distribution rather than generate graphs. Our core insight is to reframe prior integration as a learnable denoising-style calibration that organizes scattered, uncertain edge posteriors into a more reliable overall structure which can be trained by the diffusion model. Diff-prior learns an adaptive structure prior that performs structured calibration on the edge posteriors during inference, guiding it towards a distribution closer to the underlying structure. The diff-prior operates before structural sampling and acts as a denoising calibrator directly on the encoder edge distribution, which provides a generic training paradigm over structured variables. Experiments on standard benchmarks validated our framework, and the results indicate that Diff-prior improves the performance of structure inference and generates more decisive edge posteriors across multiple NRI-family architectures. The code is available on https://github.com/Hardy158118/Diffprior.

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

Original source: https://arxiv.org/abs/2606.11831
