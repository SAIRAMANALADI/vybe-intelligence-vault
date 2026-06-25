---
title: 'vLLM: Easy, Fast, and Cheap LLM Serving with PagedAttention | vLLM Blog'
archive_category: vector-databases
source_category: ai/rag
source_url: https://blog.vllm.ai/2023/06/20/vllm.html
resource_id: blog:vllm-easy-fast-and-cheap-llm-serving-with-pagedatt
local_vault_path: ai/rag/vllm-easy-fast-and-cheap-llm-serving-with-pagedatt.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- agents
- benchmark
- dataset
- hackernews
- meta-ai
- models
- openai
- paper
- rag
- scripts
selection_reason:
- Valuable developer reference
---

# vLLM: Easy, Fast, and Cheap LLM Serving with PagedAttention | vLLM Blog

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: dataset
- Selection reasons:
  - Valuable developer reference

## Summary

- **PagedAttention**: Novel attention mechanism enabling non-contiguous KV cache storage via block-based partitioning, reducing memory waste from 60-80% to <4% and enabling up to 24x higher throughput vs. HuggingFace Transformers.

- **Memory Sharing**: Supports efficient sharing of KV cache blocks across sequences (e.g., parallel sampling/beam search) via block tables and Copy-on-Write, cutting memory overhead by up to 55% and improving throughput by 2.2x.

- **Deployment Efficiency**: Powers L

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://blog.vllm.ai/2023/06/20/vllm.html

## Local Vault File

Path: [vllm-easy-fast-and-cheap-llm-serving-with-pagedatt.md](../../ai/rag/vllm-easy-fast-and-cheap-llm-serving-with-pagedatt.md)
