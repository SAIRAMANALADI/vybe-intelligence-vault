---
title: Efficient, Robust, and Anti-Collusion Fingerprinting of Image Diffusion Models
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12977
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.104543+00:00'
tags: []
status: active
id: arxiv:2606.12977
first_seen: '2026-06-12T10:40:03.104543+00:00'
last_seen: '2026-06-12T10:40:03.104543+00:00'
---

# Efficient, Robust, and Anti-Collusion Fingerprinting of Image Diffusion Models

## Summary

arXiv:2606.12977v1 Announce Type: cross 
Abstract: Model fingerprinting, embedding user-specific identifiers (fingerprints) into generated outputs, has recently emerged as a popular solution to protect the intellectual property rights (IPR) of generative text-to-image (T2I) models and prevent unauthorized redistribution. In this work, we reveal a previously unexplored systematic vulnerability in existing generative model fingerprinting methods: they lack robustness against collusion attacks, where multiple attackers combine their models to remove or obscure the fingerprints. To address this issue, we take the first step towards a robust fingerprinting method for T2I models with anti-collusion capabilities. The proposed method encodes strings of bits, namely fingerprints, into the coefficients of a personalized normalization module (PNM) incorporated into T2I models, so that fingerprints can be reliably recovered from any generated image. To defend against collusion attacks and prevent unauthorized model redistribution, we introduce an anti-collusion mechanism based on lossless function-invariant parameter transformations. This mechanism significantly degrades the image generation quality of colluded models, making them effectively unusable. Moreover, our method allows developers to efficiently create multiple copies of fingerprinted T2I models by reparameterizing the PNM without the need for retraining. We also introduce a worst-case optimization strategy to improve robustness against model-level attacks. Our experiments demonstrate that the proposed method achieves high fidelity and robustness across multiple T2I image generation and editing tasks, with fingerprint extraction accuracy exceeding 99.5%. Compared with existing methods, our method demonstrates, for the first time, a notable proactive robustness to collusion attacks by significantly increasing the FID of colluded models.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12977
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- None
