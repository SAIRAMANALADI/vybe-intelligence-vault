---
title: Faster Whisper - Beam
archive_category: rag-systems
source_category: ai/rag
source_url: https://docs.beam.cloud/v2/examples/whisper
resource_id: blog:faster-whisper-beam
local_vault_path: ai/rag/faster-whisper-beam.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- models
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Faster Whisper - Beam

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Deployment Configuration**: Uses Beam's `@endpoint` decorator with GPU-accelerated resources (A10G, 32GiB RAM, 2 vCPUs), NVIDIA CUDA 12.2 base image, and persistent volume (`cached_models`) for model caching to optimize cold-start performance.

- **Model Handling**: Implements lazy-loading via `on_start` hook to download the `large-v3` Faster Whisper model (FP16 precision) on container initialization, ensuring efficient GPU utilization and reduced inference latency.

- **API Flexibility**: S

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://docs.beam.cloud/v2/examples/whisper

## Local Vault File

Path: [faster-whisper-beam.md](../../ai/rag/faster-whisper-beam.md)
