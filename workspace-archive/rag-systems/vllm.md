---
title: vLLM
archive_category: rag-systems
source_category: ai/rag
source_url: https://docs.vllm.ai/en/latest
resource_id: blog:vllm
local_vault_path: ai/rag/vllm.md
quality_score: 70
archive_score: 74
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
- Strong keyword match
- Valuable developer reference
---

# vLLM

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **High-performance serving**: Implements PagedAttention for efficient KV cache management, supports continuous batching, chunked prefill, and prefix caching, with optimizations like FlashAttention, speculative decoding (e.g., EAGLE), and CUDA/HIP graph execution for state-of-the-art throughput.

- **Extensive quantization & hardware support**: Supports multiple quantization schemes (FP8, INT4/8, GPTQ/AWQ, GGUF) and optimized kernels (CUTLASS, TRTLLM-GEN), while enabling distributed inference v

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://docs.vllm.ai/en/latest

## Local Vault File

Path: [vllm.md](../../ai/rag/vllm.md)
