---
title: Metrics — NVIDIA NIM LLMs Benchmarking
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html#time-to-first-token-ttft
published_at: '2026-07-04T03:54:06.787043+05:30'
collected_at: '2026-07-04T03:54:06.787052+05:30'
tags:
- benchmark
- hackernews
- rag
- web-crawled
status: active
resource_id: blog:metrics-nvidia-nim-llms-benchmarking
first_seen: '2026-07-04T03:54:06.787052+05:30'
last_seen: '2026-07-04T03:54:06.787052+05:30'
last_checked: '2026-07-04T03:54:06.787052+05:30'
health_score: 100
---

# Metrics — NVIDIA NIM LLMs Benchmarking

## Summary

- **Time to First Token (TTFT)**: Measures latency from query submission to first token output, including prompt tokenization, KV-cache generation, and network overhead; scales linearly with prompt length due to attention computation requirements.
- **Inter-Token Latency (ITL)**: Average time between consecutive output tokens (excluding TTFT in GenAI-Perf), reflecting decoding efficiency; influenced by KV-cache growth and memory bandwidth during attention computation.
- **Tokens Per Second (TPS)**: System-wide throughput metric (total output tokens divided by time between first and last response), with variations in calculation methods (e.g., sliding window in GenAI-Perf vs. full benchmark duration in LLMPerf) affecting reported values.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T03:54:06.787043+05:30

## Related Tags

- benchmark
- hackernews
- rag
- web-crawled

## Source

Original source: https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html#time-to-first-token-ttft
