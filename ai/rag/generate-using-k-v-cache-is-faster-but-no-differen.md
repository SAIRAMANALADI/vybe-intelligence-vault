---
title: 'Generate: using k-v cache is faster but no difference to memory usage - 🤗Transformers
  - Hugging Face Forums'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://discuss.huggingface.co/t/generate-using-k-v-cache-is-faster-but-no-difference-to-memory-usage/31272
published_at: '2026-07-18T01:13:31.715323+05:30'
collected_at: '2026-07-18T01:13:31.715336+05:30'
tags:
- benchmark
- dataset
- hackernews
- meta-ai
- models
- openai
- rag
- web-crawled
status: active
resource_id: blog:generate-using-k-v-cache-is-faster-but-no-differen
first_seen: '2026-07-18T01:13:31.715336+05:30'
last_seen: '2026-07-18T01:13:31.715336+05:30'
last_checked: '2026-07-18T01:13:31.715336+05:30'
health_score: 100
---

# Generate: using k-v cache is faster but no difference to memory usage - 🤗Transformers - Hugging Face Forums

## Summary

- **K-V cache impact on VRAM**: The memory overhead of k-v caching scales with `(2 * hidden_size * num_layers * decoder_length)`, but for ASR models with short decoder sequences (e.g., ~20 tokens), the difference in VRAM usage between cached and non-cached inference is negligible (~4MB for Whisper large-v2).

- **Performance vs. memory tradeoff**: While k-v caching reduces inference time by avoiding recomputation of key-value states, the VRAM increase is minimal for small models/sequences; significant VRAM savings (~84MB for GPT-J) only appear with larger models and longer sequences (e.g., 256 tokens).

- **ASR-specific observations**: For ASR tasks, where decoder lengths are typically short, the k-v cache’s VRAM overhead is insignificant, making caching primarily a performance optimization rather than a memory-saving technique.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-18T01:13:31.715323+05:30

## Related Tags

- benchmark
- dataset
- hackernews
- meta-ai
- models
- openai
- rag
- web-crawled

## Source

Original source: https://discuss.huggingface.co/t/generate-using-k-v-cache-is-faster-but-no-difference-to-memory-usage/31272
