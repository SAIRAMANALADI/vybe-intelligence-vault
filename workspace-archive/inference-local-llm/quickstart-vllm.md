---
title: Quickstart - vLLM
archive_category: inference-local-llm
source_category: ai/resources
source_url: https://vllm.readthedocs.io/en/latest/getting_started/quickstart.html
resource_id: blog:quickstart-vllm
local_vault_path: ai/resources/quickstart-vllm.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: template
importance: medium
tags:
- openai
- producthunt
- reddit
- scripts
- web-crawled
selection_reason:
- Strong keyword match
- Useful for project building
---

# Quickstart - vLLM

## Why This Is In The Archive

- Matched archive category: `Inference and Local LLM`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: template
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Installation & Compatibility**: vLLM supports NVIDIA CUDA, AMD ROCm, Google TPUs, Ascend NPUs, and Apple Silicon (via vLLM-Metal). Installation via `uv pip install vllm` (with `--torch-backend=auto` for CUDA) or platform-specific packages (e.g., `vllm-tpu` for TPUs) is recommended. Python 3.10–3.13 is required for most setups.

- **Offline Batched Inference**: Uses `LLM` class with `SamplingParams` to process prompts in batch. Defaults to Hugging Face model downloads unless `VLLM_USE_MODELSC

## Use Cases

- Private AI execution
- Offline model serving
- Quantization setups

## Source

Original source URL: https://vllm.readthedocs.io/en/latest/getting_started/quickstart.html

## Local Vault File

Path: [quickstart-vllm.md](../../ai/resources/quickstart-vllm.md)
