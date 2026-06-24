---
title: Gemma 4 - SGLang Documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.sglang.io/cookbook/autoregressive/Google/Gemma4
published_at: '2026-06-24T20:49:50.060670+05:30'
collected_at: '2026-06-24T20:49:50.060684+05:30'
tags:
- agents
- benchmark
- dataset
- models
- openai
- producthunt
- rag
- web-crawled
status: active
resource_id: blog:gemma-4-sglang-documentation
first_seen: '2026-06-24T20:49:50.060684+05:30'
last_seen: '2026-06-24T20:49:50.060684+05:30'
last_checked: '2026-06-24T20:49:50.060684+05:30'
health_score: 100
---

# Gemma 4 - SGLang Documentation

## Summary

- **Architecture & Features**: Gemma 4 introduces hybrid attention (sliding window + full attention), multimodal support (text/vision/audio), MoE variants (26B-A4B), per-layer embeddings (PLE), and fused Triton-optimized operations (RMSNorm + residual + scalar kernels).

- **Deployment & Hardware**: Supports SGLang with CUDA/AMD GPU optimizations; hardware requirements vary by model (e.g., 1x H200 for 12B, 2x H200 for 31B, 1x MI300X for AMD). Speculative decoding (MTP) via paired assistant models reduces latency.

- **Functionality & Benchmarks**: Enables reasoning (thinking mode), tool calling, and vision/audio inputs; benchmarks show speed/accuracy trade-offs (e.g., 35% faster decode for 12B with MTP on H200, MMLU/GSM8K/MMUU accuracy metrics).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T20:49:50.060670+05:30

## Related Tags

- agents
- benchmark
- dataset
- models
- openai
- producthunt
- rag
- web-crawled

## Source

Original source: https://docs.sglang.io/cookbook/autoregressive/Google/Gemma4
