---
title: '`langchain-google-genai` 4.0.0 Released! (Consolidated SDK, Vertex deprecations,
  and more) · langchain-ai/langchain-goog'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/langchain-ai/langchain-google/discussions/1422
published_at: '2026-08-01T21:51:26.389167+05:30'
collected_at: '2026-08-01T21:51:26.389185+05:30'
tags:
- agents
- anthropic
- benchmark
- frontend_ui
- meta-ai
- mistral
- models
- rag
- web-crawled
status: active
resource_id: github:langchain-ai/langchain-google
first_seen: '2026-08-01T21:51:26.389185+05:30'
last_seen: '2026-08-01T21:51:26.389185+05:30'
last_checked: '2026-08-01T21:51:26.389185+05:30'
health_score: 100
---

# `langchain-google-genai` 4.0.0 Released! (Consolidated SDK, Vertex deprecations, and more) · langchain-ai/langchain-goog

## Summary

- **SDK Consolidation**: Migration from `langchain-google-genai` to unified [`google-genai`](https://googleapis.github.io/python-genai/) SDK, deprecating legacy `google-ai-generativelanguage` and overlapping `langchain-google-vertexai` components (e.g., `ChatVertexAI`, `VertexAIEmbeddings`).

- **Structured Output Default Change**: `with_structured_output()` now defaults to `method="json_schema"` (native structured outputs) instead of `method="function_calling"`, with explicit opt-in for legacy behavior.

- **Backend Auto-Detection**: Vertex AI vs. Gemini API backend selection via env vars (`GOOGLE_GENAI_USE_VERTEXAI`), credentials, or project parameters; gRPC transport removed in favor of REST.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-01T21:51:26.389167+05:30

## Related Tags

- agents
- anthropic
- benchmark
- frontend_ui
- meta-ai
- mistral
- models
- rag
- web-crawled

## Source

Original source: https://github.com/langchain-ai/langchain-google/discussions/1422
