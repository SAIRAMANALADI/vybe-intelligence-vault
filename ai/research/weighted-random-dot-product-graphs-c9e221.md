---
title: Weighted Random Dot Product Graphs
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2505.03649
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.799130+00:00'
tags:
- models
status: new
---

# Weighted Random Dot Product Graphs

## Summary

arXiv:2505.03649v4 Announce Type: replace-cross 
Abstract: Modeling of intricate relational patterns has become a cornerstone of contemporary statistical research and related data science fields. Networks, represented as graphs, offer a natural framework for this analysis. This paper extends the Random Dot Product Graph (RDPG) model to accommodate weighted graphs, markedly broadening the model's scope to scenarios where edges exhibit heterogeneous weight distributions. We propose a nonparametric weighted (W)RDPG model that assigns a sequence of latent positions to each node. Inner products of these nodal vectors specify the moments of their incident edge weights' distribution via moment-generating functions. In this way, and unlike prior art, the WRDPG can discriminate between weight distributions that share the same mean but differ in other higher-order moments. We derive statistical guarantees for an estimator of the nodal's latent positions adapted from the workhorse adjacency spectral embedding, establishing its consistency and asymptotic normality. We also contribute a generative framework that enables sampling of graphs that adhere to a (prescribed or data-fitted) WRDPG, facilitating, e.g., the analysis and testing of observed graph metrics using judicious reference distributions. The paper is organized to formalize the model's definition, the estimation (or nodal embedding) process and its guarantees, as well as the methodologies for generating weighted graphs, all complemented by illustrative and reproducible examples showcasing the WRDPG's effectiveness in various network analytic applications.

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

Original source: https://arxiv.org/abs/2505.03649
