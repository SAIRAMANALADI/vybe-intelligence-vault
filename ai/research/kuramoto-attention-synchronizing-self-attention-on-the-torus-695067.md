---
title: 'Kuramoto Attention: Synchronizing Self-Attention on the Torus'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11585
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.795957+00:00'
tags:
- models
status: new
---

# Kuramoto Attention: Synchronizing Self-Attention on the Torus

## Summary

arXiv:2606.11585v1 Announce Type: new 
Abstract: We introduce Kuramoto attention, a self-attention layer in which each hidden coordinate is an angle. The layer scores tokens by gated cosine similarity, attends over previous phase states, and updates each token by the tangent component of the attention-weighted circular mean. Because the values are the raw phase states, this update is exactly the Kuramoto coupling term $\sum_u A_{t,u}\sin(\theta_u-\theta_t)$, with the attention matrix acting as an adaptive, content-dependent coupling kernel. Equivalently, the gated score is a learned metric on the torus that selects which tokens couple, and the update pulls each token toward the circular mean of the tokens it selects, tightening their phase agreement. The same two ingredients, an invariant similarity score and an on-manifold mean, define such a layer on any compact group; the torus is the abelian case, where both are closed-form. The softmax weights solve an entropy-regularized phase-retrieval problem, and rotary position enters as a position-dependent phase drift in the score. On enwiki8 character-level language modeling, the layer trains as a functional language model whose bits-per-character stays close to a strong matched RoPE+SwiGLU transformer: within $0.02$ BPC at one million parameters ($1.637\pm0.010$ versus $1.616\pm0.004$) and level on the median at five million ($1.448$ versus $1.452$ over five seeds) with the transformer ahead on the mean ($1.468$ versus $1.456$). These experiments establish that the constrained geometric structure is a viable language model at this scale; the structure itself, and its synchronization reading, is the contribution. Ablations isolate the load-bearing components, and the result gives a compact bridge between self-attention and phase synchronization.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models

## Source

Original source: https://arxiv.org/abs/2606.11585
