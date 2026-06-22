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

- **Model Requirements**: `gpt-oss-20b` requires ≥16GB VRAM (or unified memory) for consumer hardware, while `gpt-oss-120b` demands ≥60GB VRAM; both models are shipped in MXFP4 quantization and support CPU offloading at reduced performance.

- **Ollama Integration**: Models are deployed via `ollama pull/push` commands, with chat and API endpoints (`http://localhost:11434/v1`) supporting OpenAI-compatible Chat Completions and function calling (tools) for local inference.

- **SDK/Proxy Support**:

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://cookbook.openai.com/articles/gpt-oss/run-locally-ollama

## Local Vault File

Path: [how-to-run-gpt-oss-locally-with-ollama.md](../../ai/agents/how-to-run-gpt-oss-locally-with-ollama.md)
