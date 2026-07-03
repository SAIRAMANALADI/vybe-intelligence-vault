---
title: Metrics — NVIDIA NIM LLMs Benchmarking
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html#time-to-first-token-ttft
resource_id: blog:metrics-nvidia-nim-llms-benchmarking
local_vault_path: ai/rag/metrics-nvidia-nim-llms-benchmarking.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- benchmark
- hackernews
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Metrics — NVIDIA NIM LLMs Benchmarking

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Time to First Token (TTFT)**: Measures latency from query submission to first token output, including prompt tokenization, KV-cache generation, and network overhead; scales linearly with prompt length due to attention computation requirements.
- **Inter-Token Latency (ITL)**: Average time between consecutive output tokens (excluding TTFT in GenAI-Perf), reflecting decoding efficiency; influenced by KV-cache growth and memory bandwidth during attention computation.
- **Tokens Per Second (TPS)

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html#time-to-first-token-ttft

## Local Vault File

Path: [metrics-nvidia-nim-llms-benchmarking.md](../../ai/rag/metrics-nvidia-nim-llms-benchmarking.md)
