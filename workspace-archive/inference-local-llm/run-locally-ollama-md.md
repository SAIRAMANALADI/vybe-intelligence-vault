---
title: run-locally-ollama.md
archive_category: inference-local-llm
source_category: ai/agents
source_url: https://raw.githubusercontent.com/openai/openai-cookbook/main/articles/gpt-oss/run-locally-ollama.md
resource_id: blog:run-locally-ollama-md
local_vault_path: ai/agents/run-locally-ollama-md.md
quality_score: 70
archive_score: 74
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

# run-locally-ollama.md

## Why This Is In The Archive

- Matched archive category: `Inference and Local LLM`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Model Requirements**: `gpt-oss-20b` requires ≥16GB VRAM/unified memory; `gpt-oss-120b` needs ≥60GB VRAM/unified memory. Both models use MXFP4 quantization out-of-the-box with optional CPU offloading (slower performance).
- **Ollama Setup**: Install Ollama, then pull models via `ollama pull gpt-oss:20b` or `ollama pull gpt-oss:120b`. Supports Chat Completions API (OpenAI-compatible) and function calling (e.g., built-in browser tool).
- **Advanced Integration**: Use LiteLLM or AI SDK to connec

## Use Cases

- Private AI execution
- Offline model serving
- Quantization setups

## Source

Original source URL: https://raw.githubusercontent.com/openai/openai-cookbook/main/articles/gpt-oss/run-locally-ollama.md

## Local Vault File

Path: [run-locally-ollama-md.md](../../ai/agents/run-locally-ollama-md.md)
