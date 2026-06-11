---
title: Probabilistic Salary Prediction with Graph Attention Networks and a Mixture
  Density Network
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11663
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.797266+00:00'
tags: []
status: new
---

# Probabilistic Salary Prediction with Graph Attention Networks and a Mixture Density Network

## Summary

arXiv:2606.11663v1 Announce Type: cross 
Abstract: Accurate salary prediction is critical for bridging the information gap between employers and job seekers in modern labor markets. Existing approaches predominantly yield a single point estimate and treat job attributes such as location, occupation, and industry as independent categorical features, ignoring both the inherent uncertainty and multi-modality of real-world compensation data and the rich hierarchical and semantic-similarity relationships that govern pay norms. In this paper we propose GAT-MDN, a unified framework that addresses both limitations simultaneously. For each of the three attribute domains we construct a domain-specific graph whose edges encode (i) hierarchical parent-child containment and (ii) weighted similarity links derived from a pre-trained Sentence-Transformer. Parallel Graph Attention Networks (GATs) with edge-feature-aware attention learn rich, context-sensitive node representations from these multi-relational graphs. A priority-based hierarchical selection module then assembles a composite feature vector that gracefully handles missing or coarse attributes, and a Mixture Density Network (MDN) head maps this vector to the parameters of a Gaussian Mixture Model (GMM), yielding a full conditional salary distribution. Extensive experiments on a real-world Dutch job-posting dataset of over 1 million records demonstrate that GAT-MDN significantly outperforms a non-graph MLP-MDN baseline in both Negative Log-Likelihood (NLL) and Mean Squared Error (MSE).

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

Original source: https://arxiv.org/abs/2606.11663
