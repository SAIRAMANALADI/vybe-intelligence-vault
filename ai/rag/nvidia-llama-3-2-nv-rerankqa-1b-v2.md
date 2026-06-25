---
title: nvidia / llama-3.2-nv-rerankqa-1b-v2
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.api.nvidia.com/nim/reference/nvidia-llama-3_2-nv-rerankqa-1b-v2
published_at: '2026-06-24T10:14:12.575759+05:30'
collected_at: '2026-06-24T10:14:12.575771+05:30'
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
resource_id: blog:nvidia-llama-3-2-nv-rerankqa-1b-v2
first_seen: '2026-06-24T10:14:12.575771+05:30'
last_seen: '2026-06-24T10:14:12.575771+05:30'
last_checked: '2026-06-24T10:14:12.575771+05:30'
health_score: 100
---

# nvidia / llama-3.2-nv-rerankqa-1b-v2

## Summary

- **Model Architecture & Training**: Transformer-based cross-encoder (Llama-3.2-1B) fine-tuned for contrastive learning with bi-directional attention, using mean pooling and binary classification head; trained on 800k samples from public QA datasets for multilingual/cross-lingual retrieval (26 languages, 8192-token context).

- **Performance Metrics**: Achieves **73.64% avg. Recall@5** on NQ/HotpotQA/FiQA/TechQA benchmarks when paired with `llama-3.2-nv-embedqa-1b-v2`; **65.80% avg. Recall@5** on MIRACL multilingual datasets; **86.83% avg. Recall@5** on cross-lingual MLQA; **70.69% avg. Recall@5** on long-document MLDR benchmark.

- **Deployment & Compliance**: Optimized for NVIDIA Ampere/Hopper/Lovelace GPUs on Linux; licensed under NVIDIA AI Foundation Models + Llama 3.2 Community License; supports TensorRT inference on H100/A100/L40s/L4/A10G hardware.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T10:14:12.575759+05:30

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

Original source: https://docs.api.nvidia.com/nim/reference/nvidia-llama-3_2-nv-rerankqa-1b-v2
