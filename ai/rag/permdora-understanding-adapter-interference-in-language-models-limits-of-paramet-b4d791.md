---
title: 'PermDoRA -- Understanding Adapter Interference in Language Models: Limits
  of Parameter-Space Geometry'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11262
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522257+00:00'
tags:
- models
- rag
status: new
---

# PermDoRA -- Understanding Adapter Interference in Language Models: Limits of Parameter-Space Geometry

## Summary

arXiv:2606.11262v1 Announce Type: cross 
Abstract: Access control in large language models (LLMs) requires modular mechanisms to enable domain-specific behavior without retraining or cross-domain interference. A common hypothesis is that interference during adapter composition arises from overlap in linear parameter updates, suggesting that enforcing orthogonality or directional independence should improve multi-domain performance. We test this hypothesis using DoRA-RBAC, a hierarchical adapter composition framework based on weight-decomposed low-rank adaptation. We compare conventional Euclidean merging with a geometry-aware Riemannian-inspired merging strategy that approximates the Frechet mean via normalized directional averaging across multiple QA benchmarks (GPQA, PubMedQA, SimpleQA, WMDP) on LLaMA-3.1-8B and Mistral-7B. Our results show that while single-domain performance matches LoRA, geometry-aware merging provides no consistent advantage over standard averaging in multi-domain settings.Diagnostic analysis further reveals that angular alignment and orthogonality of adapter updates are weak predictors of composition performance. These findings suggest that adapter interference is not governed primarily by parameter-space geometry, but is instead consistent with interactions in shared nonlinear representations.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models
- rag

## Source

Original source: https://arxiv.org/abs/2606.11262
