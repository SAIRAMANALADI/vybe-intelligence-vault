---
title: Versioned Late Materialization for Ultra-Long Sequence Training in Recommendation
  Systems at Scale
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2604.24806
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.107425+00:00'
tags:
- dataset
- rag
status: active
id: arxiv:2604.24806
first_seen: '2026-06-12T10:40:03.107425+00:00'
last_seen: '2026-06-12T10:40:03.107425+00:00'
---

# Versioned Late Materialization for Ultra-Long Sequence Training in Recommendation Systems at Scale

## Summary

arXiv:2604.24806v2 Announce Type: replace-cross 
Abstract: Modern Deep Learning Recommendation Models (DLRMs) follow scaling laws with sequence length, driving the frontier toward ultra-long User Interaction History (UIH). However, the industry-standard "Fat Row" paradigm, which pre-materializes these sequences into every training example, creates a storage and I/O wall where data infrastructure usage exceeds GPU training capacity due to data redundancy that is amplified in multi-tenant environments where models with vastly different sequence length requirements share a union dataset. We present a \emph{versioned late materialization} paradigm that eliminates this redundancy by storing UIH once in a normalized, immutable tier and reconstructing sequences just-in-time during training via lightweight versioned pointers. The system ensures Online-to-Offline (O2O) consistency through a bifurcated protocol that prevents future leakage across both streaming and batch training, while a read-optimized immutable storage layer provides multi-dimensional projection pushdown for heterogeneous model tenants. Disaggregated data preprocessing with pipelined I/O prefetching and data-affinity optimizations masks the latency of training-time sequence reconstruction, keeping training throughput compute-bound by GPUs. Deployed on production DLRMs, the system reduces training data infrastructure resource usage while enabling aggressive sequence length scaling that delivers significant model quality gains, serving as the foundational data infrastructure for modern recommendation model architectures, including HSTU and ULTRA-HSTU.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2604.24806
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- dataset
- rag
