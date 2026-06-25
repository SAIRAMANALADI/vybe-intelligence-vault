---
title: Gemma 4 - SGLang Documentation
archive_category: rag-systems
source_category: ai/rag
source_url: https://docs.sglang.io/cookbook/autoregressive/Google/Gemma4
resource_id: blog:gemma-4-sglang-documentation
local_vault_path: ai/rag/gemma-4-sglang-documentation.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- agents
- benchmark
- dataset
- models
- openai
- producthunt
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Gemma 4 - SGLang Documentation

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Architecture & Features**: Gemma 4 introduces hybrid attention (sliding window + full attention), multimodal support (text/vision/audio), MoE variants (26B-A4B), per-layer embeddings (PLE), and fused Triton-optimized operations (RMSNorm + residual + scalar kernels).

- **Deployment & Hardware**: Supports SGLang with CUDA/AMD GPU optimizations; hardware requirements vary by model (e.g., 1x H200 for 12B, 2x H200 for 31B, 1x MI300X for AMD). Speculative decoding (MTP) via paired assistant model

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://docs.sglang.io/cookbook/autoregressive/Google/Gemma4

## Local Vault File

Path: [gemma-4-sglang-documentation.md](../../ai/rag/gemma-4-sglang-documentation.md)
