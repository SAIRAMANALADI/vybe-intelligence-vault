---
title: How to run gpt-oss locally with Ollama
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://cookbook.openai.com/articles/gpt-oss/run-locally-ollama
published_at: '2026-06-23T09:56:15.199994+05:30'
collected_at: '2026-06-23T09:56:15.200004+05:30'
tags:
- agents
- meta-ai
- models
- openai
- web-crawled
status: active
resource_id: blog:how-to-run-gpt-oss-locally-with-ollama
first_seen: '2026-06-23T09:56:15.200004+05:30'
last_seen: '2026-06-23T09:56:15.200004+05:30'
last_checked: '2026-06-23T09:56:15.200004+05:30'
health_score: 100
---

# How to run gpt-oss locally with Ollama

## Summary

- **Model Specifications**: `gpt-oss-20b` requires ≥16GB VRAM (or unified memory) and is optimized for consumer GPUs/Apple Silicon; `gpt-oss-120b` needs ≥60GB VRAM (or unified memory), ideal for multi-GPU/workstations. Both models ship MXFP4 quantized with optional CPU offloading (slower performance).

- **Ollama Integration**: Supports local deployment via `ollama pull/pull` (e.g., `gpt-oss:20b`), chat/terminal interaction (`ollama run`), and a Chat Completions-compatible API (OpenAI SDK-compatible). Tools/function calling and Responses API workarounds (via proxy/server) are supported.

- **Agents SDK Compatibility**: Enables integration with OpenAI’s Agents SDK (Python/TypeScript) using LiteLLM or AI SDK adapters to route requests to local Ollama-hosted models (e.g., `ollama/gpt-oss:120b`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-23T09:56:15.199994+05:30

## Related Tags

- agents
- meta-ai
- models
- openai
- web-crawled

## Source

Original source: https://cookbook.openai.com/articles/gpt-oss/run-locally-ollama
