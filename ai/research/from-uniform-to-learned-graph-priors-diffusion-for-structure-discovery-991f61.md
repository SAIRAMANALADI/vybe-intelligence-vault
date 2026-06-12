---
title: 'From Uniform to Learned Graph Priors: Diffusion for Structure Discovery'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11831
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.014166+00:00'
tags:
- benchmark
status: active
id: arxiv:2606.11831
first_seen: '2026-06-12T10:40:06.014166+00:00'
last_seen: '2026-06-12T10:40:06.014166+00:00'
---

# From Uniform to Learned Graph Priors: Diffusion for Structure Discovery

## Summary

arXiv:2606.11831v1 Announce Type: new 
Abstract: Neural relational inference (NRI) methods discover interaction graphs from trajectories through variational reasoning on discrete potential edges. However, these methods typically rely on oversimplified, factorized graph priors. Such priors, typically nearing uniform distributions, treat edges as independent entities. This systemic misalignment does not match the real-world systems and yields diffuse and indecisive edge posteriors limiting the reliability of structural discovery. To address this, we propose \textit{Diff-prior}, a diffusion-parameterized adaptive prior used to calibrate latent graph distribution rather than generate graphs. Our core insight is to reframe prior integration as a learnable denoising-style calibration that organizes scattered, uncertain edge posteriors into a more reliable overall structure which can be trained by the diffusion model. Diff-prior learns an adaptive structure prior that performs structured calibration on the edge posteriors during inference, guiding it towards a distribution closer to the underlying structure. The diff-prior operates before structural sampling and acts as a denoising calibrator directly on the encoder edge distribution, which provides a generic training paradigm over structured variables. Experiments on standard benchmarks validated our framework, and the results indicate that Diff-prior improves the performance of structure inference and generates more decisive edge posteriors across multiple NRI-family architectures. The code is available on https://github.com/Hardy158118/Diffprior.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11831
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
