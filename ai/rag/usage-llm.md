---
title: Usage - LLM
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://llm.datasette.io/en/stable/usage.html#continuing-a-conversation
published_at: '2026-08-02T14:19:55.372105+05:30'
collected_at: '2026-08-02T14:19:55.372120+05:30'
tags:
- anthropic
- dataset
- models
- openai
- rag
- web-crawled
- youtube
status: active
resource_id: blog:usage-llm
first_seen: '2026-08-02T14:19:55.372120+05:30'
last_seen: '2026-08-02T14:19:55.372120+05:30'
last_checked: '2026-08-02T14:19:55.372120+05:30'
health_score: 100
---

# Usage - LLM

## Summary

- **Command syntax**: Execute prompts via `llm 'prompt'` (default) or `llm prompt 'prompt'`; streaming is enabled by default but can be disabled with `--no-stream`; model selection is done via `-m/--model` (e.g., `-m gpt-4o` or `-q 4o -q mini` for partial matching).

- **Multi-modal & attachments**: Supports multi-modal models (e.g., GPT-4o) with attachments via `-a` (URLs, file paths, or stdin `-`); content type can be explicitly set with `--at` (e.g., `--at - image/jpeg`).

- **Advanced features**: Tools are callable via `--functions` (inline Python) or `--tool/-T` (plugins/toolboxes); JSON schemas are supported via `--schema` or `--schema-multi`; fragments (`-f`) enable reusable context; conversations are continued with `-c/--continue` (retains prior context and model).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T14:19:55.372105+05:30

## Related Tags

- anthropic
- dataset
- models
- openai
- rag
- web-crawled
- youtube

## Source

Original source: https://llm.datasette.io/en/stable/usage.html#continuing-a-conversation
