---
title: Measuring Semantic Progress in Multi-turn Dialogue via Information Gain
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.12332
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.797898+00:00'
tags: []
status: new
---

# Measuring Semantic Progress in Multi-turn Dialogue via Information Gain

## Summary

arXiv:2606.12332v1 Announce Type: cross 
Abstract: Evaluating multi-turn dialogue is challenging because quality emerges across turns rather than within individual responses. We focus on a key dimension of information-seeking dialogue: semantic progress, defined as the accumulation of new, question-relevant, and non-redundant information over the course of a conversation. We formalize semantic progress as question-conditioned uncertainty reduction and introduce an information-theoretic metric that approximates it in embedding space. Our main estimator uses a tractable Gaussian formulation with closed-form updates, while a complementary maximum-entropy argument shows why log-determinant structure arises more broadly when only second-order embedding information is retained. This formulation yields desirable theoretical properties, including monotonicity, additive decomposition of total information gain across turns, and diminishing returns for redundant evidence. Unlike LLM-as-a-judge approaches, our metric requires no autoregressive inference at evaluation time and is fully reproducible for a fixed embedding model. Experiments on MT-Bench, Chatbot Arena, and UltraFeedback show that the proposed metric achieves competitive agreement with human judgments despite targeting only semantic progress, with improved alignment on MT-Bench and UltraFeedback compared to several LLM-based judges. Notably, the method remains effective with lightweight embedding models under CPU-only execution, indicating that semantic progress can be captured without reliance on large model capacity.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- None

## Source

Original source: https://arxiv.org/abs/2606.12332
