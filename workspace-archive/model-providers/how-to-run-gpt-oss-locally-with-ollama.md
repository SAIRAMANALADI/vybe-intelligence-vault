---
title: How to run gpt-oss locally with Ollama
archive_category: model-providers
source_category: ai/agents
source_url: https://cookbook.openai.com/articles/gpt-oss/run-locally-ollama
resource_id: blog:how-to-run-gpt-oss-locally-with-ollama
local_vault_path: ai/agents/how-to-run-gpt-oss-locally-with-ollama.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- agents
- meta-ai
- models
- openai
- web-crawled
selection_reason:
- Strong keyword match
- Useful for project building
---

# How to run gpt-oss locally with Ollama

## Why This Is In The Archive

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Model Specifications**: `gpt-oss-20b` requires ≥16GB VRAM (or unified memory) and is optimized for consumer GPUs/Apple Silicon; `gpt-oss-120b` needs ≥60GB VRAM (or unified memory), ideal for multi-GPU/workstations. Both models ship MXFP4 quantized with optional CPU offloading (slower performance).

- **Ollama Integration**: Supports local deployment via `ollama pull/pull` (e.g., `gpt-oss:20b`), chat/terminal interaction (`ollama run`), and a Chat Completions-compatible API (OpenAI SDK-compat

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://cookbook.openai.com/articles/gpt-oss/run-locally-ollama

## Local Vault File

Path: [how-to-run-gpt-oss-locally-with-ollama.md](../../ai/agents/how-to-run-gpt-oss-locally-with-ollama.md)
