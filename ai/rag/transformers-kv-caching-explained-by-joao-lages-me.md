---
title: Transformers KV Caching Explained | by João Lages | Medium
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://medium.com/@joaolages/kv-caching-explained-276520203249
published_at: '2026-07-04T03:56:07.774278+05:30'
collected_at: '2026-07-04T03:56:07.774288+05:30'
tags:
- rag
- web-crawled
status: active
resource_id: blog:transformers-kv-caching-explained-by-joao-lages-me
first_seen: '2026-07-04T03:56:07.774288+05:30'
last_seen: '2026-07-04T03:56:07.774288+05:30'
last_checked: '2026-07-04T03:56:07.774288+05:30'
health_score: 100
---

# Transformers KV Caching Explained | by João Lages | Medium

## Summary

- **KV caching** stores previously computed **Key (K)** and **Value (V)** states during auto-regressive decoding in transformer decoders (e.g., GPT, T5), avoiding redundant recalculations of attention for prior tokens.
- **Speedup mechanism**: Caching reduces matrix multiplication dimensions during attention computation, significantly accelerating inference (e.g., **11.885s vs. 56.197s** for 1000 tokens in GPT-2 on a Tesla T4 GPU).
- **Trade-off**: KV caching increases memory usage (GPU/CPU RAM) but is default in libraries like Hugging Face `transformers`, with negligible overhead in most cases.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T03:56:07.774278+05:30

## Related Tags

- rag
- web-crawled

## Source

Original source: https://medium.com/@joaolages/kv-caching-explained-276520203249
