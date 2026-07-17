---
title: 'Generate: using k-v cache is faster but no difference to memory usage - 🤗Transformers
  - Hugging Face Forums'
archive_category: vector-databases
source_category: ai/rag
source_url: https://discuss.huggingface.co/t/generate-using-k-v-cache-is-faster-but-no-difference-to-memory-usage/31272
resource_id: blog:generate-using-k-v-cache-is-faster-but-no-differen
local_vault_path: ai/rag/generate-using-k-v-cache-is-faster-but-no-differen.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- benchmark
- dataset
- hackernews
- meta-ai
- models
- openai
- rag
- web-crawled
selection_reason:
- Valuable developer reference
---

# Generate: using k-v cache is faster but no difference to memory usage - 🤗Transformers - Hugging Face Forums

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: dataset
- Selection reasons:
  - Valuable developer reference

## Summary

- **K-V cache impact on VRAM**: The memory overhead of k-v caching scales with `(2 * hidden_size * num_layers * decoder_length)`, but for ASR models with short decoder sequences (e.g., ~20 tokens), the difference in VRAM usage between cached and non-cached inference is negligible (~4MB for Whisper large-v2).

- **Performance vs. memory tradeoff**: While k-v caching reduces inference time by avoiding recomputation of key-value states, the VRAM increase is minimal for small models/sequences; signi

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://discuss.huggingface.co/t/generate-using-k-v-cache-is-faster-but-no-difference-to-memory-usage/31272

## Local Vault File

Path: [generate-using-k-v-cache-is-faster-but-no-differen.md](../../ai/rag/generate-using-k-v-cache-is-faster-but-no-differen.md)
