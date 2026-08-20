---
title: LoRA and QLoRA recommendations for LLMs | Gemini Enterprise Agent Platform
  | Google Cloud Documentation
archive_category: model-providers
source_category: ai/agents
source_url: https://cloud.google.com/vertex-ai/generative-ai/docs/model-garden/lora-qlora
resource_id: blog:lora-and-qlora-recommendations-for-llms-gemini-ent
local_vault_path: ai/agents/lora-and-qlora-recommendations-for-llms-gemini-ent.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- meta-ai
- models
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# LoRA and QLoRA recommendations for LLMs | Gemini Enterprise Agent Platform | Google Cloud Documentation

## Why This Is In The Archive

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Memory Efficiency**: QLoRA reduces peak GPU memory usage by ~75% compared to LoRA, enabling higher max sequence lengths and larger batch sizes.
- **Performance Trade-offs**: LoRA is ~66% faster and up to 40% cheaper than QLoRA, but QLoRA supports significantly higher batch sizes (e.g., 24 vs. 2 on A100 40G for openLLaMA-7B).
- **Accuracy Parity**: Both LoRA and QLoRA yield comparable accuracy improvements for LLM fine-tuning.

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://cloud.google.com/vertex-ai/generative-ai/docs/model-garden/lora-qlora

## Local Vault File

Path: [lora-and-qlora-recommendations-for-llms-gemini-ent.md](../../ai/agents/lora-and-qlora-recommendations-for-llms-gemini-ent.md)
