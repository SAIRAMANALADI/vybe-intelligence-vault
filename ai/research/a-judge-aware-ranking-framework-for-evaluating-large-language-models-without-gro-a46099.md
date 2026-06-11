---
title: A Judge-Aware Ranking Framework for Evaluating Large Language Models without
  Ground Truth
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2601.21817
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.799420+00:00'
tags: []
status: new
---

# A Judge-Aware Ranking Framework for Evaluating Large Language Models without Ground Truth

## Summary

arXiv:2601.21817v3 Announce Type: replace-cross 
Abstract: Evaluating large language models (LLMs) on open-ended tasks without ground-truth labels is increasingly done via the LLM-as-a-judge paradigm. A critical but under-modeled issue is that judge LLMs differ substantially in reliability; treating all judges equally can yield biased leaderboards and misleading uncertainty estimates. More data can make evaluation more confidently wrong under misspecified aggregation. We propose a judge-aware ranking framework that extends the Bradley-Terry-Luce model by introducing judge-specific discrimination parameters, jointly estimating latent model quality and judge reliability from pairwise comparisons without reference labels. We establish identifiability up to natural normalizations and prove consistency and asymptotic normality of the maximum likelihood estimator, enabling confidence intervals for score differences and rank comparisons. Across multiple public benchmarks and a newly collected dataset, our method improves agreement with human preferences, achieves higher data efficiency than unweighted baselines, and produces calibrated uncertainty quantification for LLM rankings.

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

Original source: https://arxiv.org/abs/2601.21817
