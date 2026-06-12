---
title: 'Proto-LeakNet: Towards Signal-Leak Aware Attribution in Synthetic Human Face
  Imagery'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2511.04260
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.485348+00:00'
tags:
- benchmark
- rag
status: new
---

# Proto-LeakNet: Towards Signal-Leak Aware Attribution in Synthetic Human Face Imagery

## Summary

arXiv:2511.04260v3 Announce Type: replace-cross 
Abstract: The growing sophistication of synthetic image and deepfake generation models has turned source attribution and authenticity verification into a critical challenge for modern computer vision systems. Recent studies suggest that diffusion pipelines unintentionally imprint persistent statistical traces, known as signal-leaks, within their outputs, particularly in latent representations. Building on this observation, we propose Proto-LeakNet, a signal-leak-aware and interpretable attribution framework that integrates Closed-set classification with a density-based Open-set evaluation on the learned embeddings, enabling analysis of unseen generators without retraining. Acting in the latent domain of diffusion models, our method re-simulates partial forward diffusion to expose residual generator-specific cues. A temporal attention encoder aggregates multi-step latent features, while a feature-weighted prototype head structures the embedding space and enables transparent attribution. Trained solely on closed data and achieving a Macro AUC of 98.13\%, Proto-LeakNet learns a latent geometry that remains robust under post-processing, surpassing state-of-the-art methods, and achieves strong separability both between real images and known generators, and between known and unseen ones. The codebase is available at the following link: https://github.com/claudiunderthehood/Proto-LeakNet .

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2511.04260
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- rag
