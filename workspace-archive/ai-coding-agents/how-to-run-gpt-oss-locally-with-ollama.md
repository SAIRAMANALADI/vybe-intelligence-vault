---
title: How to run gpt-oss locally with Ollama
archive_category: ai-coding-agents
source_category: ai/agents
source_url: https://cookbook.openai.com/articles/gpt-oss/run-locally-ollama
resource_id: blog:how-to-run-gpt-oss-locally-with-ollama
local_vault_path: ai/agents/how-to-run-gpt-oss-locally-with-ollama.md
quality_score: 70
archive_score: 70
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
- Useful for project building
---

# How to run gpt-oss locally with Ollama

## Why This Is In The Archive

- Matched archive category: `AI Coding Agents`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: framework
- Selection reasons:
  - Useful for project building

## Summary

- **Model Requirements**: `gpt-oss-20b` requires ≥16GB VRAM (or unified memory) for consumer hardware, while `gpt-oss-120b` demands ≥60GB VRAM; both models are shipped in MXFP4 quantization and support CPU offloading at reduced performance.

- **Ollama Integration**: Models are deployed via `ollama pull/push` commands, with chat and API endpoints (`http://localhost:11434/v1`) supporting OpenAI-compatible Chat Completions and function calling (tools) for local inference.

- **SDK/Proxy Support**:

## Use Cases

- Assisted programming workflows
- Auto-debugging codebases
- Autonomous feature building

## Source

Original source URL: https://cookbook.openai.com/articles/gpt-oss/run-locally-ollama

## Local Vault File

Path: [how-to-run-gpt-oss-locally-with-ollama.md](../../ai/agents/how-to-run-gpt-oss-locally-with-ollama.md)
