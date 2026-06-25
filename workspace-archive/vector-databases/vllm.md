---
title: vLLM
archive_category: vector-databases
source_category: ai/rag
source_url: https://docs.vllm.ai/en/latest
resource_id: blog:vllm
local_vault_path: ai/rag/vllm.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- anthropic
- meta-ai
- mistral
- models
- openai
- paper
- rag
- reddit
- web-crawled
selection_reason:
- Valuable developer reference
---

# vLLM

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **High-performance serving**: Implements PagedAttention for efficient KV cache management, supports continuous batching, chunked prefill, and prefix caching, with optimizations like FlashAttention, speculative decoding (e.g., EAGLE), and CUDA/HIP graph execution for state-of-the-art throughput.

- **Extensive quantization & hardware support**: Supports multiple quantization schemes (FP8, INT4/8, GPTQ/AWQ, GGUF) and optimized kernels (CUTLASS, TRTLLM-GEN), while enabling distributed inference v

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://docs.vllm.ai/en/latest

## Local Vault File

Path: [vllm.md](../../ai/rag/vllm.md)
