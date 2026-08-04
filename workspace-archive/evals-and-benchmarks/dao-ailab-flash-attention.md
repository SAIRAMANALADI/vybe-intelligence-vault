---
title: flash-attention/hopper at main · Dao-AILab/flash-attention · GitHub
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://github.com/Dao-AILab/flash-attention/tree/main/hopper
resource_id: github:dao-ailab/flash-attention-28b8bcd4
local_vault_path: ai/rag/dao-ailab-flash-attention.md
quality_score: 70
archive_score: 77
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- benchmark
- producthunt
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Active open-source repository
---

# flash-attention/hopper at main · Dao-AILab/flash-attention · GitHub

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 77 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Active open-source repository

## Summary

- Optimized attention mechanism implementation leveraging Hopper architecture (SM90) with TMA (Tensor Memory Accelerator) and GMMA (General Matrix Multiply Accelerator) for reduced memory bandwidth usage and improved compute efficiency.

- Supports forward and backward pass kernels (`flash_fwd_kernel_sm90.h`, `flash_bwd_kernel_sm90.h`) with CUDA/HIP backend, including fused operations like softmax and rotary embeddings.

- Includes FP8 precision support (`benchmark_flash_attention_fp8.py`) and m

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://github.com/Dao-AILab/flash-attention/tree/main/hopper

## Local Vault File

Path: [dao-ailab-flash-attention.md](../../ai/rag/dao-ailab-flash-attention.md)
