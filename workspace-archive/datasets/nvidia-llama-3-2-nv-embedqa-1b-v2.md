---
title: nvidia / llama-3.2-nv-embedqa-1b-v2
archive_category: datasets
source_category: ai/rag
source_url: https://docs.api.nvidia.com/nim/reference/nvidia-llama-3_2-nv-embedqa-1b-v2
resource_id: blog:nvidia-llama-3-2-nv-embedqa-1b-v2
local_vault_path: ai/rag/nvidia-llama-3-2-nv-embedqa-1b-v2.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- benchmark
- dataset
- hackernews
- meta-ai
- mistral
- models
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# nvidia / llama-3.2-nv-embedqa-1b-v2

## Why This Is In The Archive

- Matched archive category: `Datasets`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Model Specifications**: Transformer-based fine-tuned Llama3.2 1B retriever with 16 layers, 2048 embedding size, and support for **8192-token context length** and **Matryoshka Embeddings** (dynamic sizing: 384, 512, 768, 1024, or 2048) for multilingual QA retrieval.

- **Performance Metrics**: Achieves **68.60% Recall@5** on standard QA benchmarks (NQ, HotpotQA, FiQA, TechQA) and **79.86% cross-lingual Recall@5** (MLQA), with **60.75% multilingual Recall@5** (MIRACL), outperforming BM25 and s

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://docs.api.nvidia.com/nim/reference/nvidia-llama-3_2-nv-embedqa-1b-v2

## Local Vault File

Path: [nvidia-llama-3-2-nv-embedqa-1b-v2.md](../../ai/rag/nvidia-llama-3-2-nv-embedqa-1b-v2.md)
