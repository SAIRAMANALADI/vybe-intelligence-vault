---
title: Compiler-First State Space Duality and Portable $O(1)$ Autoregressive Caching
  for Inference
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2603.09555
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.017821+00:00'
tags:
- rag
status: active
id: arxiv:2603.09555
first_seen: '2026-06-12T10:40:06.017821+00:00'
last_seen: '2026-06-12T10:40:06.017821+00:00'
---

# Compiler-First State Space Duality and Portable $O(1)$ Autoregressive Caching for Inference

## Summary

arXiv:2603.09555v2 Announce Type: replace 
Abstract: High-throughput Mamba-2 inference is usually tied to fused CUDA and Triton kernels, limiting portability across accelerator backends. We show that the state space duality (SSD) recurrence has a compiler-friendly structure: diagonal per-head dynamics, fixed-size chunking, einsum-dominated compute, and static control flow. Expressing this structure in standard JAX primitives gives a single-source inference path with no custom kernels, a registered JAX PyTree cache, and a compiled on-device autoregressive loop. On a single Google Cloud TPU v6e, batch-1 prefill reaches approximately 140 TFLOPS, or 15% model FLOP utilisation (MFU), the roofline ceiling for this regime, and cached decode reaches up to 64% hardware bandwidth utilisation (HBU). At a 4096-token context, cached decode is 27x--36x faster than full-prefix recomputation across five Mamba-2 checkpoints from 130M to 2.7B parameters. The same source runs unmodified on NVIDIA L40S, where cached decode remains sequence-length independent across all model scales. WikiText-103 validation perplexity matches the Triton reference mamba_ssm v2.2.2 within +/-0.0005 points, and hidden states agree to float32 rounding tolerance. Code is available at https://github.com/CosmoNaught/mamba2-jax.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2603.09555
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- rag
