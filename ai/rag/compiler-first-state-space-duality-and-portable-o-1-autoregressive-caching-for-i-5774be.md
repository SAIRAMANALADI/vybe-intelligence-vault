---
title: Compiler-First State Space Duality and Portable $O(1)$ Autoregressive Caching
  for Inference
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2603.09555
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524179+00:00'
tags:
- rag
status: new
---

# Compiler-First State Space Duality and Portable $O(1)$ Autoregressive Caching for Inference

## Summary

arXiv:2603.09555v2 Announce Type: replace-cross 
Abstract: High-throughput Mamba-2 inference is usually tied to fused CUDA and Triton kernels, limiting portability across accelerator backends. We show that the state space duality (SSD) recurrence has a compiler-friendly structure: diagonal per-head dynamics, fixed-size chunking, einsum-dominated compute, and static control flow. Expressing this structure in standard JAX primitives gives a single-source inference path with no custom kernels, a registered JAX PyTree cache, and a compiled on-device autoregressive loop. On a single Google Cloud TPU v6e, batch-1 prefill reaches approximately 140 TFLOPS, or 15% model FLOP utilisation (MFU), the roofline ceiling for this regime, and cached decode reaches up to 64% hardware bandwidth utilisation (HBU). At a 4096-token context, cached decode is 27x--36x faster than full-prefix recomputation across five Mamba-2 checkpoints from 130M to 2.7B parameters. The same source runs unmodified on NVIDIA L40S, where cached decode remains sequence-length independent across all model scales. WikiText-103 validation perplexity matches the Triton reference mamba_ssm v2.2.2 within +/-0.0005 points, and hidden states agree to float32 rounding tolerance. Code is available at https://github.com/CosmoNaught/mamba2-jax.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- rag

## Source

Original source: https://arxiv.org/abs/2603.09555
