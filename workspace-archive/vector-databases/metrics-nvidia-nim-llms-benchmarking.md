---
title: Metrics — NVIDIA NIM LLMs Benchmarking
archive_category: vector-databases
source_category: ai/rag
source_url: https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html#time-to-first-token-ttft
resource_id: blog:metrics-nvidia-nim-llms-benchmarking
local_vault_path: ai/rag/metrics-nvidia-nim-llms-benchmarking.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- benchmark
- hackernews
- rag
- web-crawled
selection_reason:
- Valuable developer reference
---

# Metrics — NVIDIA NIM LLMs Benchmarking

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: prompt
- Selection reasons:
  - Valuable developer reference

## Summary

- **Time to First Token (TTFT)**: Measures latency from query submission to first output token, including request queuing, prefill time, and network latency; scales with prompt length due to KV-cache computation.
- **Inter-Token Latency (ITL)**: Average time between consecutive tokens (excluding TTFT in GenAI-Perf), reflecting decoding efficiency and memory/attention computation performance.
- **Tokens Per Second (TPS)**: System throughput metric calculated as total output tokens divided by time

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html#time-to-first-token-ttft

## Local Vault File

Path: [metrics-nvidia-nim-llms-benchmarking.md](../../ai/rag/metrics-nvidia-nim-llms-benchmarking.md)
