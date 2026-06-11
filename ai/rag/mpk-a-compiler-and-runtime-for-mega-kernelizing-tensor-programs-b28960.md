---
title: 'MPK: A Compiler and Runtime for Mega-Kernelizing Tensor Programs'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2512.22219
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.799343+00:00'
tags:
- rag
status: new
---

# MPK: A Compiler and Runtime for Mega-Kernelizing Tensor Programs

## Summary

arXiv:2512.22219v2 Announce Type: replace-cross 
Abstract: We introduce Mirage Persistent Kernel (MPK), the first compiler and runtime system that automatically transforms multi-GPU model inference into a single high-performance mega-kernel. MPK introduces an SM-level graph representation that captures data dependencies at the granularity of individual streaming multiprocessors (SMs), enabling cross-operator software pipelining, \rev{fine-grained overlap of computation and communication, and other optimizations that are infeasible under the conventional kernel-per-operator execution model}. The MPK compiler lowers tensor programs into optimized SM-level task graphs and generates fast CUDA implementations for each task, while the MPK in-kernel parallel runtime executes these tasks within a single persistent mega-kernel using decentralized scheduling across SMs. Together, these components provide end-to-end kernel fusion with minimal developer effort, while preserving the flexibility of existing programming models. Our evaluation shows that MPK significantly outperforms existing kernel-per-operator LLM serving systems, achieving up to 1.7$\times$ lower end-to-end inference latency and pushing LLM inference performance close to the limits of the underlying hardware. MPK is publicly available at https://github.com/mirage-project/mirage.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- rag

## Source

Original source: https://arxiv.org/abs/2512.22219
