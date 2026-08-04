---
title: Changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/releases/changelog
published_at: '2026-08-04T22:42:27.203146+05:30'
collected_at: '2026-08-04T22:42:27.203155+05:30'
tags:
- agents
- anthropic
- benchmark
- openai
- producthunt
- rag
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:changelog-docs-by-langchain
first_seen: '2026-08-04T22:42:27.203155+05:30'
last_seen: '2026-08-04T22:42:27.203155+05:30'
last_checked: '2026-08-04T22:42:27.203155+05:30'
health_score: 100
---

# Changelog - Docs by LangChain

## Summary

- **DeepAgents v0.7.0**: Default agent input tokens reduced by **65%** (5,395 → 1,895) via leaner prompts and trimmed tool schemas; new filesystem tools (`delete`, `write_file` overwrite), middleware override support, and expanded prompt-caching (Bedrock, Fireworks, NVIDIA Nemotron 3 Ultra harness profile).

- **LangGraph v1.2.0**: Introduces `DeltaChannel` (beta) for incremental checkpoint storage, per-node timeouts/error handlers, graceful shutdown via `RunControl`, and `version="v3"` streaming API with typed, per-channel projections (e.g., `run.messages`, `run.lifecycle`).

- **Breaking Changes**:
  - DeepAgents v0.7.0: Planning `todos` opt-in (`TodoListMiddleware` no longer default), backend compatibility shims removed (e.g., `BackendFactory`), and output format changes (e.g., empty `ls` output now `No files found`).
  - LangGraph v1.1.0: `version="v2"` enforces type-safe streaming/invoke with `GraphOutput` and Pydantic coercion; fixed time-travel with interrupts/subgraphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T22:42:27.203146+05:30

## Related Tags

- agents
- anthropic
- benchmark
- openai
- producthunt
- rag
- web-crawled
- workflows
- youtube

## Source

Original source: https://docs.langchain.com/oss/python/releases/changelog
