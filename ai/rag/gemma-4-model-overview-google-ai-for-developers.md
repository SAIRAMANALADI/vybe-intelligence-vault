---
title: Gemma 4 model overview | Google AI for Developers
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://ai.google.dev/gemma/docs/core
published_at: '2026-06-23T09:54:51.935826+05:30'
collected_at: '2026-06-23T09:54:51.935840+05:30'
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
first_seen: '2026-06-23T09:54:51.935840+05:30'
last_seen: '2026-06-23T09:54:51.935840+05:30'
last_checked: '2026-06-23T09:54:51.935840+05:30'
health_score: 100
---

# Gemma 4 model overview | Google AI for Developers

## Summary

- **Model Family & Architecture**: Gemma 4 introduces five variants (E2B, E4B, 12B, 31B, 26B A4B) with specialized designs: dense (31B), MoE (26B A4B), and unified (12B) for multimodal tasks; E2B/E4B optimized for edge/browser deployment via Per-Layer Embeddings (PLE).
- **Multimodal & Context Support**: Native processing of text, images (variable aspect ratio/resolution), video, and audio (E2B/E4B/12B); supports up to 256K context window (128K for small models) and multi-token prediction (MTP) for faster inference.
- **Quantization & Deployment**: Offers Quantization-Aware Training (QAT) models (e.g., 4-bit GGUF, `w4a16-ct`) for efficient deployment across platforms (local, mobile, cloud); memory requirements scale with parameter count and quantization (e.g., 11.4GB BF16 to 2.9GB Q4_0 for E2B).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-23T09:54:51.935826+05:30

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
