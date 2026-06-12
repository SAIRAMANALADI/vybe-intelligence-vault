---
title: "Compiler-First State Space Duality and Portable $O(1)$ Autoregressive Caching for Inference"
archive_category: "evals-and-benchmarks"
source_category: "ai/rag"
source_url: "https://arxiv.org/abs/2603.09555"
local_vault_path: "ai/rag/compiler-first-state-space-duality-and-portable-o-1-autoregressive-caching-for-i-5774be.md"
quality_score: 70
archive_score: 74
archive_tier: "useful"
resource_kind: "framework"
importance: "medium"
tags:
  - rag
selection_reason:
  - "Strong keyword match"
  - "Useful for project building"
---

# Compiler-First State Space Duality and Portable $O(1)$ Autoregressive Caching for Inference

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

arXiv:2603.09555v2 Announce Type: replace 
Abstract: High-throughput Mamba-2 inference is usually tied to fused CUDA and Triton kernels, limiting portability across accelerator backends. We show that the state space duality (SSD) recurrence has a compiler-friendly structure: diagonal per-head dynamics, fixed-size chunking, einsum-dominated compute, and static control flow. Expressing this structure in standard JAX primitives gives a single-source inference path with no custom kernels, a register

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://arxiv.org/abs/2603.09555

## Local Vault File

Path: [compiler-first-state-space-duality-and-portable-o-1-autoregressive-caching-for-i-5774be.md](file:///../../ai/rag/compiler-first-state-space-duality-and-portable-o-1-autoregressive-caching-for-i-5774be.md)
