---
title: run-locally-ollama.md
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://raw.githubusercontent.com/openai/openai-cookbook/main/articles/gpt-oss/run-locally-ollama.md
published_at: '2026-06-22T15:34:30.533342+05:30'
collected_at: '2026-06-22T15:34:30.533358+05:30'
tags:
- agents
- meta-ai
- models
- openai
- web-crawled
status: active
resource_id: blog:run-locally-ollama-md
first_seen: '2026-06-22T15:34:30.533358+05:30'
last_seen: '2026-06-22T15:34:30.533358+05:30'
last_checked: '2026-06-22T15:34:30.533358+05:30'
health_score: 100
---

# run-locally-ollama.md

## Summary

- **Model Requirements**: `gpt-oss-20b` requires ≥16GB VRAM/unified memory; `gpt-oss-120b` needs ≥60GB VRAM/unified memory. Both models use MXFP4 quantization out-of-the-box with optional CPU offloading (slower performance).
- **Ollama Setup**: Install Ollama, then pull models via `ollama pull gpt-oss:20b` or `ollama pull gpt-oss:120b`. Supports Chat Completions API (OpenAI-compatible) and function calling (e.g., built-in browser tool).
- **Advanced Integration**: Use LiteLLM or AI SDK to connect Ollama-hosted models to OpenAI’s Agents SDK. Responses API requires proxy (e.g., Hugging Face’s `responses.js` or OpenAI’s example server).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-22T15:34:30.533342+05:30

## Related Tags

- agents
- meta-ai
- models
- openai
- web-crawled

## Source

Original source: https://raw.githubusercontent.com/openai/openai-cookbook/main/articles/gpt-oss/run-locally-ollama.md
