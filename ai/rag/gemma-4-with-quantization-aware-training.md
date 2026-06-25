---
title: Gemma 4 with quantization-aware training
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://blog.google/innovation-and-ai/technology/developers-tools/quantization-aware-training-gemma-4/
published_at: '2026-06-26T02:02:17.566109+05:30'
collected_at: '2026-06-26T02:02:17.566120+05:30'
tags:
- deepmind
- hackernews
- meta-ai
- models
- rag
- reddit
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:gemma-4-with-quantization-aware-training
first_seen: '2026-06-26T02:02:17.566120+05:30'
last_seen: '2026-06-26T02:02:17.566120+05:30'
last_checked: '2026-06-26T02:02:17.566120+05:30'
health_score: 100
---

# Gemma 4 with quantization-aware training

## Summary

- **Quantization-Aware Training (QAT) Integration**: Gemma 4 models now use QAT to simulate quantization during training, minimizing quality loss and outperforming standard Post-Training Quantization (PTQ) in preserving model performance while reducing memory footprint.

- **Mobile-Optimized Compression**: Custom mobile quantization schema includes static activations, channel-wise quantization, targeted 2-bit quantization for token generation layers, and KV cache optimization, reducing Gemma 4 E2B memory footprint to **<1GB** for efficient on-device deployment.

- **Multi-Format Deployment Support**: QAT checkpoints released in Q4_0 and mobile formats, compatible with GGUF (llama.cpp), vLLM, and frameworks like MLX (Apple Silicon), with optimized runtimes (LiteRT-LM, Transformers.js) for edge and web deployment.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T02:02:17.566109+05:30

## Related Tags

- deepmind
- hackernews
- meta-ai
- models
- rag
- reddit
- web-crawled
- workflows
- youtube

## Source

Original source: https://blog.google/innovation-and-ai/technology/developers-tools/quantization-aware-training-gemma-4/
