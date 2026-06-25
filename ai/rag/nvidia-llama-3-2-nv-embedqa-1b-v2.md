---
title: nvidia / llama-3.2-nv-embedqa-1b-v2
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.api.nvidia.com/nim/reference/nvidia-llama-3_2-nv-embedqa-1b-v2
published_at: '2026-06-24T22:59:31.038017+05:30'
collected_at: '2026-06-24T22:59:31.038033+05:30'
tags:
- benchmark
- dataset
- hackernews
- meta-ai
- mistral
- models
- rag
- reddit
- web-crawled
status: active
resource_id: blog:nvidia-llama-3-2-nv-embedqa-1b-v2
first_seen: '2026-06-24T22:59:31.038033+05:30'
last_seen: '2026-06-24T22:59:31.038033+05:30'
last_checked: '2026-06-24T22:59:31.038033+05:30'
health_score: 100
---

# nvidia / llama-3.2-nv-embedqa-1b-v2

## Summary

- **Model Specifications**: Transformer-based fine-tuned Llama3.2 1B retriever with 16 layers, 2048 embedding size, and support for **8192-token context length** and **Matryoshka Embeddings** (dynamic sizing: 384, 512, 768, 1024, or 2048) for multilingual QA retrieval.

- **Performance Metrics**: Achieves **68.60% Recall@5** on standard QA benchmarks (NQ, HotpotQA, FiQA, TechQA) and **79.86% cross-lingual Recall@5** (MLQA), with **60.75% multilingual Recall@5** (MIRACL), outperforming BM25 and several commercial models.

- **Training & Deployment**: Trained on **12M semi-supervised + 1M fine-tuned public QA samples**, optimized via AdamW (100 warmup steps, 5e-6 LR), and deployable via **NeMo Retriever NIM** on NVIDIA Ampere/Hopper/Lovelace GPUs with Linux support.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T22:59:31.038017+05:30

## Related Tags

- benchmark
- dataset
- hackernews
- meta-ai
- mistral
- models
- rag
- reddit
- web-crawled

## Source

Original source: https://docs.api.nvidia.com/nim/reference/nvidia-llama-3_2-nv-embedqa-1b-v2
