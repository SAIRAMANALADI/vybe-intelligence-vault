---
title: 'HiGR: Industrial-Scale Hierarchical Generative Slate Recommendation Framework
  in Tencent'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2512.24787
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524043+00:00'
tags:
- rag
status: new
---

# HiGR: Industrial-Scale Hierarchical Generative Slate Recommendation Framework in Tencent

## Summary

arXiv:2512.24787v4 Announce Type: replace-cross 
Abstract: Slate recommendation, which presents users with a ranked item list in a single display, is ubiquitous across mainstream online platforms. While recent generative recommendation methods have shown strong potential in modeling item sequences with semantic IDs, directly applying them to industrial-scale slate recommendation faces a fundamental disconnect: entangled SID spaces confound high-level list planning, fine-grained autoregressive decoding over long sequences limits semantic planning efficiency, and token-level objectives misalign with holistic slate quality. In this paper, we propose HiGR, an industrial-scale hierarchical generative framework for slate recommendation that bridges this disconnect through a co-designed pipeline. First, HiGR learns structured SIDs via a Prefix-Contrastive Residual Quantized VAE (PCRQ-VAE). By enforcing high-level prefixes to capture shared semantics, PCRQ-VAE creates a controllable discrete space that acts as a prerequisite for efficient planning. Leveraging this structured space, our Hierarchical Slate Decoder (HSD) shifts autoregressive modeling from entangled token-level decoding to coarse-grained preference embeddings. This design significantly reduces inference latency while allowing explicit global slate structure planning. Finally, this stable planning space enables an ORPO-based listwise alignment mechanism to optimize triple-objective implicit feedback-ranking fidelity, genuine user interest, and diversity. Extensive offline experiments show that HiGR outperforms state-of-the-art baselines by over 10% in offline recommendation quality while achieving a $5\times$ inference speedup. Online A/B tests on Tencent platforms further improve watch time by 1.22% and video plays by 1.73%. HiGR has been deployed on multiple Tencent platform surfaces, serving hundreds of millions of users and proving its industrial-scale applicability.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- rag

## Source

Original source: https://arxiv.org/abs/2512.24787
