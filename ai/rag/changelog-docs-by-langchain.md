---
title: Changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/releases/changelog
published_at: '2026-08-02T21:50:09.876299+05:30'
collected_at: '2026-08-02T21:50:09.876312+05:30'
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
first_seen: '2026-08-02T21:50:09.876312+05:30'
last_seen: '2026-08-02T21:50:09.876312+05:30'
last_checked: '2026-08-02T21:50:09.876312+05:30'
health_score: 100
---

# Changelog - Docs by LangChain

## Summary

- **`deepagents` v0.7.0**: Default agent input tokens reduced by **65%** (5,395 → 1,895) via leaner prompts and trimmed tool schemas; introduced filesystem tools (`delete`, `write_file` overwrite), middleware override support, and enhanced prompt-caching (Bedrock, Fireworks) with NVIDIA Nemotron 3 Ultra harness profile.

- **`langgraph` v1.2.0**: Added `DeltaChannel` for incremental state storage, per-node timeouts/error handlers, and `version="v3"` streaming API with typed, per-channel projections; supports graceful shutdown via `RunControl`.

- **Breaking changes in `deepagents` v0.7.0**: Planning `todos` opt-in (removed default `TodoListMiddleware`), backend compatibility shims removed (e.g., `BackendFactory`), and output format changes (e.g., `ls`/`glob` empty output as `No files found`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T21:50:09.876299+05:30

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
