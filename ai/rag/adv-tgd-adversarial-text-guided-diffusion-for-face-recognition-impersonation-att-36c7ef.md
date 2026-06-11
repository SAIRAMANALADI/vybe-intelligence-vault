---
title: 'Adv-TGD: Adversarial Text-Guided Diffusion for Face Recognition Impersonation
  Attacks'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11615
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.797213+00:00'
tags:
- models
- rag
status: new
---

# Adv-TGD: Adversarial Text-Guided Diffusion for Face Recognition Impersonation Attacks

## Summary

arXiv:2606.11615v1 Announce Type: cross 
Abstract: The widespread adoption of face recognition (FR) technologies raises serious privacy concerns, as facial data can be exploited without consent. To address this challenge, we propose Adv-TGD, a generative adversarial attack framework that synthesizes photorealistic faces capable of impersonating target identities and deceiving face recognition systems. Built upon Stable Diffusion, Adv-TGD performs per-sample LoRA fine-tuning conditioned on concise textual prompts to generate natural yet adversarially manipulated identities. Unlike conventional identity-attack approaches, our method optimizes lightweight cross-attention adapters for each source-target pair within a single-step denoising process. Latent blending is constrained by a face-local heatmap mask to ensure spatially precise identity manipulation while preserving non-sensitive regions. We introduce a composite objective that integrates masked epsilon-MSE reconstruction, thresholded identity divergence in FR embedding space, directional feature alignment, and source-similarity suppression to balance adversarial attack and visual realism. Optionally, LLaVA-generated attribute prompts enhance fine-grained semantic details without reintroducing identity cues. Under the black-box evaluation protocol, Adv-TGD attains an average attack success rate (ASR) of 85.90% across IR152, IRSE50, MobileFace, and FaceNet, surpassing the semantic SOTA baseline Adv-CPG by +6.25 points, diffusion-based makeup method DiffAIM by +3 points, and noise-based P3-Mask by +16 points. Despite its strong attack efficacy, Adv-TGD preserves high visual fidelity (PSNR = 27.15 dB, SSIM = 0.981). Furthermore, we demonstrate the flexibility of our framework by successfully extending it to in-the-wild datasets (LADN), general object classification (ImageNet), and transformer-based diffusion models (FLUX.1).

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models
- rag

## Source

Original source: https://arxiv.org/abs/2606.11615
