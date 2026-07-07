---
title: Changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/releases/changelog
published_at: '2026-07-07T15:39:14.773585+05:30'
collected_at: '2026-07-07T15:39:14.773598+05:30'
tags:
- agents
- anthropic
- openai
- producthunt
- rag
- reddit
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:changelog-docs-by-langchain
first_seen: '2026-07-07T15:39:14.773598+05:30'
last_seen: '2026-07-07T15:39:14.773598+05:30'
last_checked: '2026-07-07T15:39:14.773598+05:30'
health_score: 100
---

# Changelog - Docs by LangChain

## Summary

- **`deepagents` v0.6.0**: Introduces experimental `CodeInterpreterMiddleware` for scoped QuickJS runtime-based code execution and tool calling; adds `DeltaChannel` (beta) for incremental delta storage in message history/checkpoints; introduces `HarnessProfile` for provider/model-specific configurations and `ContextHubBackend` for versioned agent file storage via LangSmith Hub.

- **`langgraph` v1.2.0**: Adds `DeltaChannel` (beta) to reduce checkpoint overhead by storing only incremental deltas; introduces per-node timeouts, error handlers, and graceful shutdown via `RunControl`; introduces new `version="v3"` event streaming API with typed, per-channel projections and content-block-centric streaming.

- **`langchain` v1.3.0**: Adds support for `version="v3"` in `stream_events`/`astream_events` for agent event streaming, aligning with updates in `deepagents` and `langgraph`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-07T15:39:14.773585+05:30

## Related Tags

- agents
- anthropic
- openai
- producthunt
- rag
- reddit
- web-crawled
- workflows
- youtube

## Source

Original source: https://docs.langchain.com/oss/python/releases/changelog
