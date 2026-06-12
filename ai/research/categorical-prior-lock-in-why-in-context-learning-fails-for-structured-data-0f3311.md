---
title: 'Categorical Prior Lock-in: Why In-Context Learning Fails for Structured Data'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11961
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.014313+00:00'
tags:
- models
status: active
id: arxiv:2606.11961
first_seen: '2026-06-12T10:40:06.014313+00:00'
last_seen: '2026-06-12T10:40:06.014313+00:00'
---

# Categorical Prior Lock-in: Why In-Context Learning Fails for Structured Data

## Summary

arXiv:2606.11961v1 Announce Type: new 
Abstract: Large language models (LLMs) are increasingly used as conditional generators for structured data, relying on in-context learning (ICL) to adapt to new distributions without parameter updates. We investigate the limits of ICL for structured generation under distribution mismatch, using high-cardinality tabular data as a controlled test case, and identify a structural failure mode we term \textit{categorical prior lock-in}: the inability of ICL to update the model's prior over token distributions inherited from pre-training. Across two 7B-parameter open-weight models, ICL improves numerical fidelity with additional examples but exhibits a sharp ceiling on categorical distributions, failing to reproduce rare classes entirely. Parameter-efficient fine-tuning (LoRA) overcomes these limitations but introduces measurable memorization risk and, in some cases, destabilizes structured output generation, highlighting a fundamental trade-off between adaptability and privacy.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11961
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- models
