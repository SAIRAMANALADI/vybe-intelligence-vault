---
title: Changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/releases/changelog
published_at: '2026-08-04T17:13:13.578965+05:30'
collected_at: '2026-08-04T17:13:13.578979+05:30'
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
first_seen: '2026-08-04T17:13:13.578979+05:30'
last_seen: '2026-08-04T17:13:13.578979+05:30'
last_checked: '2026-08-04T17:13:13.578979+05:30'
health_score: 100
---

# Changelog - Docs by LangChain

## Summary

- **`deepagents` v0.7.0**: Input tokens reduced by **65%** (5,395 → 1,895) via leaner default prompts and trimmed tool schemas; introduces filesystem tools (`delete`, `write_file`), middleware overrides, prompt-caching support (Bedrock, Fireworks), and NVIDIA Nemotron 3 Ultra harness profile.

- **`langgraph` v1.2.0**: Adds `DeltaChannel` (beta) for incremental state storage, per-node timeouts/error handlers, graceful shutdown via `RunControl`, and `version="v3"` event streaming with typed, per-channel projections.

- **Breaking changes in `deepagents` v0.7.0**: Planning todos (`TodoListMiddleware`) opt-in, backend compatibility shims removed (e.g., `BackendFactory`), and output format changes (e.g., `ls`/`glob` empty output as `No files found`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T17:13:13.578965+05:30

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
