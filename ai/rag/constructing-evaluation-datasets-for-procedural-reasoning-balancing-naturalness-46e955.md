---
title: 'Constructing Evaluation Datasets for Procedural Reasoning: Balancing Naturalness,
  Grounding, and Multi-Hop Coverage'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12767
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.480981+00:00'
tags:
- benchmark
- dataset
- hackernews
- rag
status: new
---

# Constructing Evaluation Datasets for Procedural Reasoning: Balancing Naturalness, Grounding, and Multi-Hop Coverage

## Summary

arXiv:2606.12767v1 Announce Type: new 
Abstract: Evaluating procedural reasoning in AI-supported learning systems requires question-answer datasets that are both learner-like and grounded in the instructional knowledge the system is expected to use. We study how TMK-based question generation strategies affect dataset quality for procedural and multi-hop reasoning.
 We compare three strategies: strict generation from Task-Method-Knowledge (TMK) models, transcript-first generation with post-hoc TMK filtering, and TMK-aware generation that combines transcripts with structured guidance. To evaluate generated items, we introduce a grounding validation framework based on closed-set evidence units extracted from TMK models. The framework measures whether answers are supported by the underlying representation, whether questions are self-contained, and whether they target multi-hop procedural reasoning.
 Across 23 instructional topics and 690 generated question-answer pairs, strict TMK generation achieves the strongest overall quality, with 96.5% grounded questions and 92.6% usable questions. Transcript-first generation produces more learner-like questions but more context-dependent or weakly grounded items, while TMK-aware generation yields high raw multi-hop coverage but lower grounding. These results show that procedural richness and natural phrasing do not guarantee representational grounding, motivating explicit representation-aware validation for evaluation datasets in AI-supported learning.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12767
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- dataset
- hackernews
- rag
