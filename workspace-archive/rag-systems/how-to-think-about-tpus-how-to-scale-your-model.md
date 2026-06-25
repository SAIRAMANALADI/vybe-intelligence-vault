---
title: How to Think About TPUs | How To Scale Your Model
archive_category: rag-systems
source_category: ai/rag
source_url: https://jax-ml.github.io/scaling-book/tpus
resource_id: blog:how-to-think-about-tpus-how-to-scale-your-model
local_vault_path: ai/rag/how-to-think-about-tpus-how-to-scale-your-model.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- deepmind
- meta-ai
- models
- rag
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# How to Think About TPUs | How To Scale Your Model

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **TPU Architecture**: TPUs are specialized hardware accelerators optimized for matrix multiplication (MXU), featuring a systolic array (e.g., 128x128 or 256x256 in TPU v6e) with high compute throughput (e.g., 5e13 bf16 FLOPs/s per MXU at 1.5GHz on TPU v5e). They include a Vector Processing Unit (VPU) for general ops (e.g., ReLU, reductions) and Vector Memory (VMEM, 128 MiB on TPU v5e) for fast scratchpad access, while High Bandwidth Memory (HBM) stores tensors (e.g., 16 GiB on TPU v5e).

- **T

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://jax-ml.github.io/scaling-book/tpus

## Local Vault File

Path: [how-to-think-about-tpus-how-to-scale-your-model.md](../../ai/rag/how-to-think-about-tpus-how-to-scale-your-model.md)
