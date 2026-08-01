---
title: Changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/releases/changelog
published_at: '2026-08-01T19:31:11.317293+05:30'
collected_at: '2026-08-01T19:31:11.317305+05:30'
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
first_seen: '2026-08-01T19:31:11.317305+05:30'
last_seen: '2026-08-01T19:31:11.317305+05:30'
last_checked: '2026-08-01T19:31:11.317305+05:30'
health_score: 100
---

# Changelog - Docs by LangChain

## Summary

- **`deepagents` v0.7.0**: Default-agent input tokens reduced by **65%** (5,395 → 1,895) via leaner prompts and trimmed tool schemas; new filesystem tools (`delete`, `write_file` overwrite), middleware override support, and expanded prompt-caching (Bedrock, Fireworks, NVIDIA Nemotron 3 Ultra).

- **`langgraph` v1.2.0**: Introduces `DeltaChannel` (beta) for incremental state storage, per-node timeouts/error handlers, and `version="v3"` event streaming with typed, per-channel projections (e.g., `run.messages`, `run.lifecycle`).

- **Breaking changes in `deepagents` v0.7.0**: Planning `todos` opt-in (no `TodoListMiddleware` by default), removed backend factory shims (`BackendFactory`, `BACKEND_TYPES`), and updated output formats (`No files found` for empty `ls`/`glob`, removed `cat -n` gutter in `read_file`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-01T19:31:11.317293+05:30

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
