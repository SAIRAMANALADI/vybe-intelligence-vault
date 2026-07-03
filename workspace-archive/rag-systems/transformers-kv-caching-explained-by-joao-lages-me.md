---
title: Transformers KV Caching Explained | by João Lages | Medium
archive_category: rag-systems
source_category: ai/rag
source_url: https://medium.com/@joaolages/kv-caching-explained-276520203249
resource_id: blog:transformers-kv-caching-explained-by-joao-lages-me
local_vault_path: ai/rag/transformers-kv-caching-explained-by-joao-lages-me.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Transformers KV Caching Explained | by João Lages | Medium

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **KV caching** stores previously computed **Key (K)** and **Value (V)** states during auto-regressive decoding in transformer decoders (e.g., GPT, T5), avoiding redundant recalculations of attention for prior tokens.
- **Speedup mechanism**: Caching reduces matrix multiplication dimensions during attention computation, significantly accelerating inference (e.g., **11.885s vs. 56.197s** for 1000 tokens in GPT-2 on a Tesla T4 GPU).
- **Trade-off**: KV caching increases memory usage (GPU/CPU RAM)

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://medium.com/@joaolages/kv-caching-explained-276520203249

## Local Vault File

Path: [transformers-kv-caching-explained-by-joao-lages-me.md](../../ai/rag/transformers-kv-caching-explained-by-joao-lages-me.md)
