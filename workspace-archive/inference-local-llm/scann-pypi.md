---
title: scann · PyPI
archive_category: inference-local-llm
source_category: ai/rag
source_url: https://pypi.org/project/scann/
resource_id: blog:scann-pypi
local_vault_path: ai/rag/scann-pypi.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- benchmark
- dataset
- hackernews
- models
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# scann · PyPI

## Why This Is In The Archive

- Matched archive category: `Inference and Local LLM`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Optimized Nearest Neighbor Search**: ScaNN implements anisotropic vector quantization and search space pruning for **Maximum Inner Product Search (MIPS)** and supports Euclidean distance, achieving state-of-the-art performance on benchmarks like `glove-100-angular`.

- **Hardware-Specific Optimization**: Requires **AVX/FMA** for x86 and **NEON** for ARM; builds leverage **Bazel** with thinLTO and AVX flags (`-mavx --mfma` for x86, `-march=armv8-a+simd` for ARM).

- **TensorFlow Integration**

## Use Cases

- Private AI execution
- Offline model serving
- Quantization setups

## Source

Original source URL: https://pypi.org/project/scann/

## Local Vault File

Path: [scann-pypi.md](../../ai/rag/scann-pypi.md)
