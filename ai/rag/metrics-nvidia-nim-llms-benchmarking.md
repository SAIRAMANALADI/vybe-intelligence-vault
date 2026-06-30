---
title: Metrics — NVIDIA NIM LLMs Benchmarking
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html#time-to-first-token-ttft
published_at: '2026-06-30T10:14:10.718464+05:30'
collected_at: '2026-06-30T10:14:10.718477+05:30'
tags:
- benchmark
- hackernews
- rag
- web-crawled
status: active
resource_id: blog:metrics-nvidia-nim-llms-benchmarking
first_seen: '2026-06-30T10:14:10.718477+05:30'
last_seen: '2026-06-30T10:14:10.718477+05:30'
last_checked: '2026-06-30T10:14:10.718477+05:30'
health_score: 100
---

# Metrics — NVIDIA NIM LLMs Benchmarking

## Summary

- **Time to First Token (TTFT)**: Measures latency from query submission to first token output, including prompt tokenization, KV-cache generation, and network delays; scales with prompt length due to attention computation overhead.
- **Inter-Token Latency (ITL)**: Average time between consecutive tokens (excluding TTFT in GenAI-Perf), reflecting decoding efficiency and memory bandwidth; critical for long-sequence generation where KV-cache growth impacts attention computation.
- **Tokens Per Second (TPS)**: System throughput metric calculated as total output tokens divided by active request duration (GenAI-Perf) or full benchmark duration (LLMPerf); includes batch processing and sliding-window stabilization to exclude warm-up/cool-down phases.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T10:14:10.718464+05:30

## Related Tags

- benchmark
- hackernews
- rag
- web-crawled

## Source

Original source: https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html#time-to-first-token-ttft
