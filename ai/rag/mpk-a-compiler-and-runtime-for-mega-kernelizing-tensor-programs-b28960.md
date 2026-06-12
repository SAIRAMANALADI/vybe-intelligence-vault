---
title: 'MPK: A Compiler and Runtime for Mega-Kernelizing Tensor Programs'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2512.22219
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.019038+00:00'
tags:
- benchmark
- rag
status: active
id: arxiv:2512.22219
first_seen: '2026-06-12T10:40:06.019038+00:00'
last_seen: '2026-06-12T10:40:06.019038+00:00'
---

# MPK: A Compiler and Runtime for Mega-Kernelizing Tensor Programs

## Summary

arXiv:2512.22219v2 Announce Type: replace-cross 
Abstract: We introduce Mirage Persistent Kernel (MPK), the first compiler and runtime system that automatically transforms multi-GPU model inference into a single high-performance mega-kernel. MPK introduces an SM-level graph representation that captures data dependencies at the granularity of individual streaming multiprocessors (SMs), enabling cross-operator software pipelining, \rev{fine-grained overlap of computation and communication, and other optimizations that are infeasible under the conventional kernel-per-operator execution model}. The MPK compiler lowers tensor programs into optimized SM-level task graphs and generates fast CUDA implementations for each task, while the MPK in-kernel parallel runtime executes these tasks within a single persistent mega-kernel using decentralized scheduling across SMs. Together, these components provide end-to-end kernel fusion with minimal developer effort, while preserving the flexibility of existing programming models. Our evaluation shows that MPK significantly outperforms existing kernel-per-operator LLM serving systems, achieving up to 1.7$\times$ lower end-to-end inference latency and pushing LLM inference performance close to the limits of the underlying hardware. MPK is publicly available at https://github.com/mirage-project/mirage.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2512.22219
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- rag
