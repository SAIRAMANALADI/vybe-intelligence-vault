---
title: "Compiler-First State Space Duality and Portable $O(1)$ Autoregressive Caching for Inference"
archive_category: "vector-databases"
source_category: "ai/rag"
source_url: "https://arxiv.org/abs/2603.09555"
local_vault_path: "ai\rag\compiler-first-state-space-duality-and-portable-o-1-autoregressive-caching-for-i-5774be.md"
tags:
  - rag
---

# Compiler-First State Space Duality and Portable $O(1)$ Autoregressive Caching for Inference

## Why This Is In The Archive

- Matched source category: `ai/rag`
- Tags: rag
- Archive category: Vector Databases

## Summary

arXiv:2603.09555v2 Announce Type: replace-cross 
Abstract: High-throughput Mamba-2 inference is usually tied to fused CUDA and Triton kernels, limiting portability across accelerator backends. We show that the state space duality (SSD) recurrence has a compiler-friendly structure: diagonal per-head dynamics, fixed-size chunking, einsum-dominated compute, and static control flow. Expressing this structure in standard JAX primitives gives a single-source inference path with no custom kernels, a re

## Use Cases

- Vector storage setup
- Embedding management
- Similarity search

## Source

Original source: https://arxiv.org/abs/2603.09555

## Local Vault File

Path: ai\rag\compiler-first-state-space-duality-and-portable-o-1-autoregressive-caching-for-i-5774be.md
