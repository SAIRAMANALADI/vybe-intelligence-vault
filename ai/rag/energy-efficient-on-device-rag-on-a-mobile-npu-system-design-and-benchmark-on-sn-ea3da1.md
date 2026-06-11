---
title: 'Energy-Efficient On-Device RAG on a Mobile NPU: System Design and Benchmark
  on Snapdragon X Elite'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11257
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.796827+00:00'
tags:
- models
- rag
status: new
---

# Energy-Efficient On-Device RAG on a Mobile NPU: System Design and Benchmark on Snapdragon X Elite

## Summary

arXiv:2606.11257v1 Announce Type: cross 
Abstract: Retrieval-Augmented Generation (RAG) pipelines are compute-intensive, combining embedding, retrieval, reranking, and large language model (LLM) generation. Running them entirely on-device benefits privacy, latency, and offline use, but the energy cost of CPU inference is a major barrier. We present what is, to our knowledge, the first end-to-end RAG pipeline that runs all neural stages -- embedding, reranking, and LLM generation -- on the Qualcomm Hexagon NPU of the Snapdragon X Elite. Profiling on a Dell XPS 13 laptop, we compare NPU-accelerated RAG against CPU and OpenCL/Adreno GPU baselines on indexing and query workloads. On indexing, the NPU achieves 9.1x higher embedding throughput and 12.3x less system energy. On a 120-query Wikipedia-passage benchmark, it delivers 18.1x faster LLM prefilling, 4.0x lower end-to-end query latency, and 4.0x less system energy than the CPU baseline; the same workload on the integrated GPU is 1.7x slower than CPU and uses 6.5x more energy than the NPU. A GPT-4.1 LLM-as-judge evaluation finds NPU answer quality on par with CPU and GPU within evaluator noise (mean 9.32 vs. 8.95 vs. 9.03 on a 1-10 rubric), with 86.7% of queries scoring identically across all three backends. On the Snapdragon X Elite / Hexagon class of laptop SoC, the NPU thus enables practical, energy-efficient on-device RAG without quality regression -- a sustainable path toward green edge intelligence that we expect to generalize to comparable mobile NPUs (Apple Neural Engine, Intel NPU, MediaTek APU) as their software stacks mature.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models
- rag

## Source

Original source: https://arxiv.org/abs/2606.11257
