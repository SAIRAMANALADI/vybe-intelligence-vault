---
title: google-research/scann at master · google-research/google-research · GitHub
archive_category: inference-local-llm
source_category: ai/resources
source_url: https://github.com/google-research/google-research/tree/master/scann
resource_id: github:google-research/google-research
local_vault_path: ai/resources/google-research-google-research.md
quality_score: 70
archive_score: 77
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- benchmark
- dataset
- hackernews
- models
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Active open-source repository
---

# google-research/scann at master · google-research/google-research · GitHub

## Why This Is In The Archive

- Matched archive category: `Inference and Local LLM`
- Quality score: 70 | Archive score: 77 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Active open-source repository

## Summary

- **Algorithm**: Implements anisotropic vector quantization (AVQ) and SOAR indexing for efficient Maximum Inner Product Search (MIPS) and Euclidean distance search, achieving state-of-the-art performance on benchmarks like glove-100-angular.
- **Optimizations**: Uses AVX/FMA instructions for x86 and NEON for ARM, with search space pruning and quantization techniques to accelerate nearest neighbor search in large-scale datasets.
- **Integration**: Supports TensorFlow via optional `scann[tf]` pack

## Use Cases

- Private AI execution
- Offline model serving
- Quantization setups

## Source

Original source URL: https://github.com/google-research/google-research/tree/master/scann

## Local Vault File

Path: [google-research-google-research.md](../../ai/resources/google-research-google-research.md)
