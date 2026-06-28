---
title: Changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/releases/changelog
published_at: '2026-06-28T10:27:11.416410+05:30'
collected_at: '2026-06-28T10:27:11.416422+05:30'
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
first_seen: '2026-06-28T10:27:11.416422+05:30'
last_seen: '2026-06-28T10:27:11.416422+05:30'
last_checked: '2026-06-28T10:27:11.416422+05:30'
health_score: 100
---

# Changelog - Docs by LangChain

## Summary

- **`deepagents` v0.6.0**: Introduces experimental `CodeInterpreterMiddleware` for scoped QuickJS runtime-based code execution and tool calling; implements `DeltaChannel` (beta) for incremental state checkpointing to reduce storage overhead in long-running threads; adds `HarnessProfile` for provider/model-specific configuration bundles and `ContextHubBackend` for versioned agent file storage via LangSmith Hub.

- **`langgraph` v1.2.0**: Adds `DeltaChannel` (beta) for delta-based state storage, per-node timeouts (`run_timeout`, `idle_timeout`), async node error handlers with `NodeError` recovery, and graceful shutdown via `RunControl`; introduces `version="v3"` streaming API with typed, per-channel projections and content-block-centric output.

- **`langchain` v1.3.0**: Supports `version="v3"` in `stream_events`/`astream_events` for event streaming compatibility across agents.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T10:27:11.416410+05:30

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
