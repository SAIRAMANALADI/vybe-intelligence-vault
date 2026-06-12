---
title: 'FOCUS: DLLMs Know How to Tame Their Compute Bound'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2601.23278
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.017484+00:00'
tags:
- benchmark
status: active
id: arxiv:2601.23278
first_seen: '2026-06-12T10:40:06.017484+00:00'
last_seen: '2026-06-12T10:40:06.017484+00:00'
---

# FOCUS: DLLMs Know How to Tame Their Compute Bound

## Summary

arXiv:2601.23278v2 Announce Type: replace 
Abstract: Diffusion Large Language Models (DLLMs) offer a compelling alternative to Auto-Regressive models, but their deployment is constrained by high decoding cost. In this work, we identify a key inefficiency in DLLM decoding: while computation is parallelized over token blocks, only a small subset of tokens is decodable at each diffusion step, causing most compute to be wasted on non-decodable tokens. We further observe a strong correlation between attention-derived token importance and token-wise decoding probability. Based on this insight, we propose FOCUS, an inference system designed for DLLMs. By dynamically focusing computation on decodable tokens and evicting non-decodable ones on-the-fly, FOCUS increases the effective batch size, alleviating compute limitations and enabling scalable throughput. Empirical evaluations demonstrate that FOCUS achieves up to 3.52$\times$ throughput improvement over the production-grade engine LMDeploy in large-batch settings, while preserving or improving generation quality across multiple benchmarks.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2601.23278
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
