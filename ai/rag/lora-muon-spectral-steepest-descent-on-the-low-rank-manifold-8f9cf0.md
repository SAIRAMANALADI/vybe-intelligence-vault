---
title: 'LoRA-Muon: Spectral Steepest Descent on the Low-Rank Manifold'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12921
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.104489+00:00'
tags:
- models
- rag
status: active
id: arxiv:2606.12921
first_seen: '2026-06-12T10:40:03.104489+00:00'
last_seen: '2026-06-12T10:40:03.104489+00:00'
---

# LoRA-Muon: Spectral Steepest Descent on the Low-Rank Manifold

## Summary

arXiv:2606.12921v1 Announce Type: cross 
Abstract: Low-Rank Adaptation (LoRA) significantly reduces compute and memory costs for finetuning Deep Learning models but is often harder to tune than dense training: when using factor-wise optimizers such as AdamW, it is sensitive to initialization choices, its optimal learning rates transfer poorly across ranks, and it often fails to beat dense baselines. We derive LoRA-Muon by applying the Muon optimizer's spectral steepest-descent rule to the low-rank setting. Along with our split weight-decay rule, our main claim is that LoRA-Muon is a good low-rank proxy for full-rank Muon and Shampoo-family optimizers. Its optimal learning rates transfer across rank, width, depth, and factor-rescaling. In our compute-matched TinyShakespeare study, a rank-$2$ proxy recovers the dense best tested learning rate, and a rank-$32$ LoRA-Muon run attains lower mean validation loss than the dense baseline in the seed-averaged sweep. We further show that the Spectron optimizer depends on arbitrary factor scaling, so it would likely be a poor fit when finetuning starts from badly imbalanced factors, and that LoRA-RITE's simplified QR-coordinate core implements the same spectral update. LoRA-Muon computes that update without QR-decomposition and avoids storing second moments, making it more accelerator-friendly and memory-efficient.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12921
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- models
- rag
