---
title: Metrics — NVIDIA NIM LLMs Benchmarking
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html#time-to-first-token-ttft
published_at: '2026-07-02T15:10:13.533090+05:30'
collected_at: '2026-07-02T15:10:13.533101+05:30'
tags:
- benchmark
- hackernews
- rag
- web-crawled
status: active
resource_id: blog:metrics-nvidia-nim-llms-benchmarking
first_seen: '2026-07-02T15:10:13.533101+05:30'
last_seen: '2026-07-02T15:10:13.533101+05:30'
last_checked: '2026-07-02T15:10:13.533101+05:30'
health_score: 100
---

# Metrics — NVIDIA NIM LLMs Benchmarking

## Summary

- **Time to First Token (TTFT)**: Measures latency from query submission to first output token, including request queuing, prefill time, and network latency; scales with prompt length due to KV-cache computation.
- **Inter-Token Latency (ITL)**: Average time between consecutive tokens (excluding TTFT in GenAI-Perf), reflecting decoding efficiency and memory/attention computation performance.
- **Tokens Per Second (TPS)**: System throughput metric calculated as total output tokens divided by time between first and last response (GenAI-Perf) or entire benchmark duration (LLMPerf), with per-user TPS defined as output length divided by end-to-end latency.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T15:10:13.533090+05:30

## Related Tags

- benchmark
- hackernews
- rag
- web-crawled

## Source

Original source: https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html#time-to-first-token-ttft
