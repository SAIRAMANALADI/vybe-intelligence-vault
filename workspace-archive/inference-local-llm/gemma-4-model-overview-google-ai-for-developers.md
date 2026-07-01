---
title: Gemma 4 model overview | Google AI for Developers
archive_category: inference-local-llm
source_category: ai/rag
source_url: https://ai.google.dev/gemma/docs/core
resource_id: blog:gemma-4-model-overview-google-ai-for-developers
local_vault_path: ai/rag/gemma-4-model-overview-google-ai-for-developers.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- agents
- benchmark
- deepmind
- hackernews
- meta-ai
- models
- rag
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Gemma 4 model overview | Google AI for Developers

## Why This Is In The Archive

- Matched archive category: `Inference and Local LLM`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Model Family & Sizes**: Gemma 4 introduces five architectures (E2B, E4B, 12B, 31B, 26B A4B) with 128K–256K context windows, supporting text, image, video, and audio inputs; E2B/E4B use Per-Layer Embeddings (PLE) for efficiency, while 26B A4B is a Mixture-of-Experts (MoE) model activating 4B parameters per token but requiring full 26B weights in memory.

- **Quantization & Deployment**: Supports BF16 (16-bit), SFP8 (8-bit), Q4_0 (4-bit), and Quantization-Aware Training (QAT) for optimized inf

## Use Cases

- Private AI execution
- Offline model serving
- Quantization setups

## Source

Original source URL: https://ai.google.dev/gemma/docs/core

## Local Vault File

Path: [gemma-4-model-overview-google-ai-for-developers.md](../../ai/rag/gemma-4-model-overview-google-ai-for-developers.md)
