---
title: 'When Probing Accuracy Saturates, Fragility Resolves: A Complementary Metric
  for LLM Pre-Training Analysis'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11375
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.015377+00:00'
tags:
- dataset
- models
- rag
status: active
id: arxiv:2606.11375
first_seen: '2026-06-12T10:40:06.015377+00:00'
last_seen: '2026-06-12T10:40:06.015377+00:00'
---

# When Probing Accuracy Saturates, Fragility Resolves: A Complementary Metric for LLM Pre-Training Analysis

## Summary

arXiv:2606.11375v1 Announce Type: cross 
Abstract: Standard linear probing declares a property "encoded" when a classifier on hidden states achieves high accuracy. The protocol works well on a snapshot but breaks across pre-training: probe accuracy saturates within the first few thousand steps, leaving most of training invisible to the instrument. We introduce fragility, a complementary per-layer metric defined as the activation-noise level at which probe accuracy collapses. Fragility is sensitive to both the margin of separability and the redundancy of representation, both of which keep evolving long after accuracy plateaus. Applied to open-checkpoint language models, fragility recovers structure that accuracy alone cannot see. Moralized representations emerge along a lexical $\to$ compositional gradient: lexical moral detection first, compositional moral encoding later. Because probe accuracy on its own tracks how lexically separable a dataset is, we establish the compositional encoding directly, by showing it transfers across construction types that share no contrast tokens. A layer-depth robustness gradient develops monotonically across training while accuracy stays flat. And matched fine-tuning corpora that produce identical probing accuracy leave distinct fragility fingerprints, showing that data curation reshapes probe robustness without changing probe accuracy. In every comparison we test, where probing accuracy returns a flat answer, fragility returns a structured one.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11375
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- dataset
- models
- rag
