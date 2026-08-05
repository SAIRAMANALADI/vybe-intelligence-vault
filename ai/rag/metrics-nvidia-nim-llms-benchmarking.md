---
title: Metrics — NVIDIA NIM LLMs Benchmarking
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html#time-to-first-token-ttft
published_at: '2026-08-05T22:35:15.086246+05:30'
collected_at: '2026-08-05T22:35:15.086259+05:30'
tags:
- benchmark
- rag
- web-crawled
status: active
resource_id: blog:metrics-nvidia-nim-llms-benchmarking
first_seen: '2026-08-05T22:35:15.086259+05:30'
last_seen: '2026-08-05T22:35:15.086259+05:30'
last_checked: '2026-08-05T22:35:15.086259+05:30'
health_score: 100
---

# Metrics — NVIDIA NIM LLMs Benchmarking

## Summary

- **Time to First Token (TTFT)**: Measures latency from query submission to first output token, including request queuing, prefill time (KV cache generation), and network latency; scales with prompt length due to attention mechanism complexity.
- **Inter-Token Latency (ITL)**: Average time between consecutive tokens (excluding TTFT), calculated as `(e2e_latency - TTFT) / (Total_output_tokens - 1)`; reflects decoding efficiency and attention computation overhead.
- **Tokens Per Second (TPS) & Requests Per Second (RPS)**: TPS measures total output token throughput across all requests (saturates at GPU compute limits), while RPS quantifies system capacity as `total_completed_requests / (Ty - Tx)`; both metrics are batch-oriented and exclude warmup phases.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-05T22:35:15.086246+05:30

## Related Tags

- benchmark
- rag
- web-crawled

## Source

Original source: https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html#time-to-first-token-ttft
