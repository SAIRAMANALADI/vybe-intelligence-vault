---
title: Gemma 4 model overview | Google AI for Developers
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://ai.google.dev/gemma/docs/core
published_at: '2026-07-01T15:52:31.218934+05:30'
collected_at: '2026-07-01T15:52:31.218946+05:30'
tags:
- agents
- benchmark
- deepmind
- hackernews
- meta-ai
- models
- rag
- web-crawled
- youtube
status: active
resource_id: blog:gemma-4-model-overview-google-ai-for-developers
first_seen: '2026-07-01T15:52:31.218946+05:30'
last_seen: '2026-07-01T15:52:31.218946+05:30'
last_checked: '2026-07-01T15:52:31.218946+05:30'
health_score: 100
---

# Gemma 4 model overview | Google AI for Developers

## Summary

- **Model Family & Sizes**: Gemma 4 introduces five architectures (E2B, E4B, 12B, 31B, 26B A4B) with 128K–256K context windows, supporting text, image, video, and audio inputs; E2B/E4B use Per-Layer Embeddings (PLE) for efficiency, while 26B A4B is a Mixture-of-Experts (MoE) model activating 4B parameters per token but requiring full 26B weights in memory.

- **Quantization & Deployment**: Supports BF16 (16-bit), SFP8 (8-bit), Q4_0 (4-bit), and Quantization-Aware Training (QAT) for optimized inference; memory requirements range from 0.84GB (E2B, 4-bit, mobile) to 69.9GB (31B, BF16), with QAT models available for high-efficiency deployment (e.g., `-qat-q4_0-gguf` for local use).

- **Capabilities & Performance**: Features native system prompt support, multi-token prediction (MTP) for speculative decoding, and improved coding/agentic functions; QAT mitigates precision loss during compression, enabling near-baseline performance in quantized models (e.g., `-qat-w4a16-ct` for high-throughput serving).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T15:52:31.218934+05:30

## Related Tags

- agents
- benchmark
- deepmind
- hackernews
- meta-ai
- models
- rag
- web-crawled
- youtube

## Source

Original source: https://ai.google.dev/gemma/docs/core
