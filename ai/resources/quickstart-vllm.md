---
title: Quickstart - vLLM
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://vllm.readthedocs.io/en/latest/getting_started/quickstart.html
published_at: '2026-06-23T10:01:42.512084+05:30'
collected_at: '2026-06-23T10:01:42.512094+05:30'
tags:
- openai
- producthunt
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:quickstart-vllm
first_seen: '2026-06-23T10:01:42.512094+05:30'
last_seen: '2026-06-23T10:01:42.512094+05:30'
last_checked: '2026-06-23T10:01:42.512094+05:30'
health_score: 100
---

# Quickstart - vLLM

## Summary

- **Installation & Compatibility**: vLLM supports NVIDIA CUDA, AMD ROCm, Google TPUs, Ascend NPUs, and Apple Silicon (via vLLM-Metal). Installation via `uv pip install vllm` (with `--torch-backend=auto` for CUDA) or platform-specific packages (e.g., `vllm-tpu` for TPUs) is recommended. Python 3.10–3.13 is required for most setups.

- **Offline Batched Inference**: Uses `LLM` class with `SamplingParams` to process prompts in batch. Defaults to Hugging Face model downloads unless `VLLM_USE_MODELSCOPE=True` is set. Outputs are `RequestOutput` objects; chat templates must be manually applied for instruct/chat models.

- **Online Serving**: Implements OpenAI API-compatible endpoints (e.g., `/v1/completions`, `/v1/chat/completions`). Launch with `vllm serve <model>`, optionally overriding `generation_config` or enabling API key auth. Supports dynamic chat interactions via standard OpenAI client libraries.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-23T10:01:42.512084+05:30

## Related Tags

- openai
- producthunt
- reddit
- scripts
- web-crawled

## Source

Original source: https://vllm.readthedocs.io/en/latest/getting_started/quickstart.html
