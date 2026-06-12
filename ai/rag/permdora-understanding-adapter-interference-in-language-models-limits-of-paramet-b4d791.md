---
title: 'PermDoRA -- Understanding Adapter Interference in Language Models: Limits
  of Parameter-Space Geometry'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11262
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.013123+00:00'
tags:
- benchmark
- meta-ai
- mistral
- models
- rag
status: active
id: arxiv:2606.11262
first_seen: '2026-06-12T10:40:06.013123+00:00'
last_seen: '2026-06-12T10:40:06.013123+00:00'
---

# PermDoRA -- Understanding Adapter Interference in Language Models: Limits of Parameter-Space Geometry

## Summary

arXiv:2606.11262v1 Announce Type: new 
Abstract: Access control in large language models (LLMs) requires modular mechanisms to enable domain-specific behavior without retraining or cross-domain interference. A common hypothesis is that interference during adapter composition arises from overlap in linear parameter updates, suggesting that enforcing orthogonality or directional independence should improve multi-domain performance. We test this hypothesis using DoRA-RBAC, a hierarchical adapter composition framework based on weight-decomposed low-rank adaptation. We compare conventional Euclidean merging with a geometry-aware Riemannian-inspired merging strategy that approximates the Frechet mean via normalized directional averaging across multiple QA benchmarks (GPQA, PubMedQA, SimpleQA, WMDP) on LLaMA-3.1-8B and Mistral-7B. Our results show that while single-domain performance matches LoRA, geometry-aware merging provides no consistent advantage over standard averaging in multi-domain settings.Diagnostic analysis further reveals that angular alignment and orthogonality of adapter updates are weak predictors of composition performance. These findings suggest that adapter interference is not governed primarily by parameter-space geometry, but is instead consistent with interactions in shared nonlinear representations.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11262
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- meta-ai
- mistral
- models
- rag
