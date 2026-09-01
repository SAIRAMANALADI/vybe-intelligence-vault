---
title: flash-attention/hopper at main · Dao-AILab/flash-attention · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/Dao-AILab/flash-attention/tree/main/hopper
published_at: '2026-09-02T04:20:37.137895+05:30'
collected_at: '2026-09-02T04:20:37.137910+05:30'
tags:
- benchmark
- producthunt
- rag
- reddit
- web-crawled
status: active
resource_id: github:dao-ailab/flash-attention
first_seen: '2026-09-02T04:20:37.137910+05:30'
last_seen: '2026-09-02T04:20:37.137910+05:30'
last_checked: '2026-09-02T04:20:37.137910+05:30'
health_score: 100
---

# flash-attention/hopper at main · Dao-AILab/flash-attention · GitHub

## Summary

- Optimized attention mechanism implementation leveraging Hopper architecture (SM90) with TMA (Tensor Memory Accelerator) and GMMA (Tensor Core MMA) for reduced memory bandwidth usage and improved compute efficiency.

- Supports forward and backward pass kernels (`flash_fwd_kernel_sm90.h`, `flash_bwd_kernel_sm90.h`) with dynamic sequence length handling via `seqlen.h` and paged KV cache (`paged_kv.h`) for efficient inference.

- Includes FP8 precision support (`benchmark_flash_attention_fp8.py`) and multi-head attention (MHA) variants with grouped-query attention (GQA) via `pack_gqa.h`, with Python/C++ APIs (`flash_attn_interface.py`, `flash_api.cpp`) for seamless integration.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-02T04:20:37.137895+05:30

## Related Tags

- benchmark
- producthunt
- rag
- reddit
- web-crawled

## Source

Original source: https://github.com/Dao-AILab/flash-attention/tree/main/hopper
