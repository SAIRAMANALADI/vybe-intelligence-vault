---
title: Faster Whisper - Beam
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.beam.cloud/v2/examples/whisper
published_at: '2026-06-27T04:19:22.978965+05:30'
collected_at: '2026-06-27T04:19:22.978976+05:30'
tags:
- models
- rag
- web-crawled
status: active
resource_id: blog:faster-whisper-beam
first_seen: '2026-06-27T04:19:22.978976+05:30'
last_seen: '2026-06-27T04:19:22.978976+05:30'
last_checked: '2026-06-27T04:19:22.978976+05:30'
health_score: 100
---

# Faster Whisper - Beam

## Summary

- **Deployment Configuration**: Uses Beam's `@endpoint` decorator with GPU-accelerated resources (A10G, 32GiB RAM, 2 vCPUs), NVIDIA CUDA 12.2 base image, and persistent volume (`cached_models`) for model caching to optimize cold-start performance.

- **Model Handling**: Implements lazy-loading via `on_start` hook to download the `large-v3` Faster Whisper model (FP16 precision) on container initialization, ensuring efficient GPU utilization and reduced inference latency.

- **API Flexibility**: Supports dual input modes (URL or base64-encoded audio) with automatic format detection, leveraging `NamedTemporaryFile` for in-memory processing and returning transcribed text via a serverless REST endpoint.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T04:19:22.978965+05:30

## Related Tags

- models
- rag
- web-crawled

## Source

Original source: https://docs.beam.cloud/v2/examples/whisper
