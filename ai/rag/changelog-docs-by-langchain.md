---
title: Changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/releases/changelog
published_at: '2026-06-28T03:52:12.828752+05:30'
collected_at: '2026-06-28T03:52:12.828767+05:30'
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
first_seen: '2026-06-28T03:52:12.828767+05:30'
last_seen: '2026-06-28T03:52:12.828767+05:30'
last_checked: '2026-06-28T03:52:12.828767+05:30'
health_score: 100
---

# Changelog - Docs by LangChain

## Summary

- **`deepagents` v0.6.0**: Introduced experimental `CodeInterpreterMiddleware` for scoped QuickJS runtime-based code execution and tool calling; added `DeltaChannel` (beta) for incremental delta storage in message history/checkpoints; introduced `HarnessProfile` for per-provider/model configuration bundles; added `ContextHubBackend` for filesystem-backed agent file storage with versioning via LangSmith Hub.

- **`langgraph` v1.2.0**: Added `DeltaChannel` (beta) to reduce checkpoint overhead by storing only incremental deltas; introduced per-node timeouts (`run_timeout`, `idle_timeout`) and error handlers for fault tolerance; implemented graceful shutdown via `RunControl`; launched new event streaming API (`version="v3"`) with typed, per-channel projections and content-block-centric streaming.

- **`langchain` v1.3.0**: Added support for `version="v3"` in `stream_events`/`astream_events` for agents, enabling enhanced event streaming capabilities across the ecosystem.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T03:52:12.828752+05:30

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
