---
title: nvidia / llama-3.2-nv-rerankqa-1b-v2
archive_category: model-providers
source_category: ai/rag
source_url: https://docs.api.nvidia.com/nim/reference/nvidia-llama-3_2-nv-rerankqa-1b-v2
resource_id: blog:nvidia-llama-3-2-nv-rerankqa-1b-v2
local_vault_path: ai/rag/nvidia-llama-3-2-nv-rerankqa-1b-v2.md
quality_score: 70
archive_score: 72
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

# nvidia / llama-3.2-nv-rerankqa-1b-v2

## Why This Is In The Archive

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Model Architecture & Training**: Transformer-based cross-encoder (Llama-3.2-1B) fine-tuned for contrastive learning with bi-directional attention, using mean pooling and binary classification head; trained on 800k samples from public QA datasets for multilingual/cross-lingual retrieval (26 languages, 8192-token context).

- **Performance Metrics**: Achieves **73.64% avg. Recall@5** on NQ/HotpotQA/FiQA/TechQA benchmarks when paired with `llama-3.2-nv-embedqa-1b-v2`; **65.80% avg. Recall@5** o

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://docs.api.nvidia.com/nim/reference/nvidia-llama-3_2-nv-rerankqa-1b-v2

## Local Vault File

Path: [nvidia-llama-3-2-nv-rerankqa-1b-v2.md](../../ai/rag/nvidia-llama-3-2-nv-rerankqa-1b-v2.md)
