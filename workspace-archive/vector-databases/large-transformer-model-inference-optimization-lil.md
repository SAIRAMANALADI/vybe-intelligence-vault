---
title: Large Transformer Model Inference Optimization | Lil'Log
archive_category: vector-databases
source_category: ai/rag
source_url: https://lilianweng.github.io/posts/2023-01-10-inference-optimization/
resource_id: blog:large-transformer-model-inference-optimization-lil
local_vault_path: ai/rag/large-transformer-model-inference-optimization-lil.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- dataset
- hackernews
- models
- paper
- rag
- reddit
- web-crawled
- workflows
- youtube
selection_reason:
- Valuable developer reference
---

# Large Transformer Model Inference Optimization | Lil'Log

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: dataset
- Selection reasons:
  - Valuable developer reference

## Summary

- **Quantization challenges**: Transformer quantization suffers from high dynamic range activations and outlier features (up to 100× larger), causing significant performance drops in low-bit post-training quantization (PTQ). Mixed-precision (e.g., `LLM.int8()`) mitigates this by preserving outliers in FP16 while quantizing others to INT8.

- **Post-training quantization (PTQ) techniques**: Mixed-precision quantization (e.g., GOBO, `LLM.int8()`) and fine-grained granularity (per-row/column or per

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://lilianweng.github.io/posts/2023-01-10-inference-optimization/

## Local Vault File

Path: [large-transformer-model-inference-optimization-lil.md](../../ai/rag/large-transformer-model-inference-optimization-lil.md)
