---
title: Changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/releases/changelog
published_at: '2026-08-02T09:29:09.659496+05:30'
collected_at: '2026-08-02T09:29:09.659506+05:30'
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
first_seen: '2026-08-02T09:29:09.659506+05:30'
last_seen: '2026-08-02T09:29:09.659506+05:30'
last_checked: '2026-08-02T09:29:09.659506+05:30'
health_score: 100
---

# Changelog - Docs by LangChain

## Summary

- **`deepagents` v0.7.0**: Default agent input tokens reduced by **65%** (5,395 → 1,895) via leaner prompts and trimmed tool schemas; introduces filesystem tools (`delete`, `write_file` overwrite), middleware override support, and expanded prompt-caching (Bedrock, Fireworks, NVIDIA Nemotron 3 Ultra harness profile).

- **`langgraph` v1.2.0**: Adds `DeltaChannel` (beta) for incremental state storage, per-node timeouts (`run_timeout`, `idle_timeout`), node-level error handlers, and v3 event streaming API with typed, per-channel projections (`run.values`, `run.messages`).

- **Breaking changes in `deepagents` v0.7.0**: Planning `todos` opt-in (removed from default), backend compatibility shims removed (use concrete `BackendProtocol` instances), and output format changes (`No files found` instead of `[]`, `read_file` no longer includes fixed-width gutter).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T09:29:09.659496+05:30

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
