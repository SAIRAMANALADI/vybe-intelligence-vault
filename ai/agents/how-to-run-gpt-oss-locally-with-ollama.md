---
title: How to run gpt-oss locally with Ollama
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://cookbook.openai.com/articles/gpt-oss/run-locally-ollama
published_at: '2026-06-22T15:33:19.624298+05:30'
collected_at: '2026-06-22T15:33:19.624315+05:30'
tags:
- agents
- meta-ai
- models
- openai
- web-crawled
status: active
resource_id: blog:how-to-run-gpt-oss-locally-with-ollama
first_seen: '2026-06-22T15:33:19.624315+05:30'
last_seen: '2026-06-22T15:33:19.624315+05:30'
last_checked: '2026-06-22T15:33:19.624315+05:30'
health_score: 100
---

# How to run gpt-oss locally with Ollama

## Summary

- **Model Requirements**: `gpt-oss-20b` requires ≥16GB VRAM (or unified memory) for consumer hardware, while `gpt-oss-120b` demands ≥60GB VRAM; both models are shipped in MXFP4 quantization and support CPU offloading at reduced performance.

- **Ollama Integration**: Models are deployed via `ollama pull/push` commands, with chat and API endpoints (`http://localhost:11434/v1`) supporting OpenAI-compatible Chat Completions and function calling (tools) for local inference.

- **SDK/Proxy Support**: Enables local model usage with OpenAI Agents SDK via LiteLLM (Python) or AI SDK (TypeScript), and provides workarounds (Responses.js proxy) for Responses API compatibility.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-22T15:33:19.624298+05:30

## Related Tags

- agents
- meta-ai
- models
- openai
- web-crawled

## Source

Original source: https://cookbook.openai.com/articles/gpt-oss/run-locally-ollama
