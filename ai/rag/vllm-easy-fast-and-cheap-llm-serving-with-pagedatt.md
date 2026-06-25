---
title: 'vLLM: Easy, Fast, and Cheap LLM Serving with PagedAttention | vLLM Blog'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://blog.vllm.ai/2023/06/20/vllm.html
published_at: '2026-06-23T10:01:32.600595+05:30'
collected_at: '2026-06-23T10:01:32.600601+05:30'
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
- web-crawled
status: active
resource_id: blog:vllm-easy-fast-and-cheap-llm-serving-with-pagedatt
first_seen: '2026-06-23T10:01:32.600601+05:30'
last_seen: '2026-06-23T10:01:32.600601+05:30'
last_checked: '2026-06-23T10:01:32.600601+05:30'
health_score: 100
---

# vLLM: Easy, Fast, and Cheap LLM Serving with PagedAttention | vLLM Blog

## Summary

- **PagedAttention**: Novel attention mechanism enabling non-contiguous KV cache storage via block-based partitioning, reducing memory waste from 60-80% to <4% and enabling up to 24x higher throughput vs. HuggingFace Transformers.

- **Memory Sharing**: Supports efficient sharing of KV cache blocks across sequences (e.g., parallel sampling/beam search) via block tables and Copy-on-Write, cutting memory overhead by up to 55% and improving throughput by 2.2x.

- **Deployment Efficiency**: Powers LMSYS Vicuna/Chatbot Arena with 30x higher throughput than HuggingFace and 50% GPU reduction, handling 30K daily requests (peak 60K) with low latency.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-23T10:01:32.600595+05:30

## Related Tags

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
- web-crawled

## Source

Original source: https://blog.vllm.ai/2023/06/20/vllm.html
