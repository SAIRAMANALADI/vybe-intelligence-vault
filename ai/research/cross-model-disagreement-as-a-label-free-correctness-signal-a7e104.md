---
title: Cross-Model Disagreement as a Label-Free Correctness Signal
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2603.25450
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.484692+00:00'
tags:
- benchmark
status: new
---

# Cross-Model Disagreement as a Label-Free Correctness Signal

## Summary

arXiv:2603.25450v2 Announce Type: replace 
Abstract: Detecting when a language model is wrong without ground truth labels is a fundamental challenge for safe deployment. Existing approaches rely on a model's own uncertainty -- such as token entropy or confidence scores -- but these signals fail critically on the most dangerous failure mode: confident errors, where a model is wrong but certain. In this work we introduce cross-model disagreement as a correctness indicator -- a simple, training-free signal that can be dropped into existing production systems, routing pipelines, and deployment monitoring infrastructure without modification. Given a model's generated answer, cross-model disagreement computes how surprised or uncertain a second verifier model is when reading that answer via a single forward pass. No generation from the verifying model is required, and no correctness labels are needed. We instantiate this principle as Cross-Model Perplexity (CMP), which measures the verifying model's surprise at the generating model's answer tokens, and Cross-Model Entropy (CME), which measures the verifying model's uncertainty at those positions. Both CMP and CME outperform within-model uncertainty baselines across benchmarks spanning reasoning, retrieval, and mathematical problem solving (MMLU, TriviaQA, and GSM8K). On MMLU, CMP achieves a mean AUROC of 0.75 against a within-model entropy baseline of 0.59. These results establish cross-model disagreement as a practical, training-free approach to label-free correctness estimation, with direct applications in deployment monitoring, model routing, selective prediction, data filtering, and scalable oversight of production language model systems.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2603.25450
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
