---
title: Changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/releases/changelog
published_at: '2026-08-03T01:11:25.395518+05:30'
collected_at: '2026-08-03T01:11:25.395533+05:30'
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
first_seen: '2026-08-03T01:11:25.395533+05:30'
last_seen: '2026-08-03T01:11:25.395533+05:30'
last_checked: '2026-08-03T01:11:25.395533+05:30'
health_score: 100
---

# Changelog - Docs by LangChain

## Summary

- **Deep Agents v0.7.0**: Default agent input tokens reduced by **65%** (5,395 → 1,895) via leaner prompts and trimmed tool schemas; new filesystem tools (`delete`, `write_file` overwrite), middleware overrides, and expanded prompt-caching support (Bedrock, Fireworks, NVIDIA Nemotron 3 Ultra).

- **LangGraph v1.2.0**: Introduces `DeltaChannel` (beta) for incremental state storage, per-node timeouts/error handlers, graceful shutdown via `RunControl`, and a new `version="v3"` streaming API with typed, per-channel projections.

- **Breaking Changes in Deep Agents v0.7.0**: Planning todos are opt-in (`TodoListMiddleware` removed by default), backend compatibility shims removed (requires explicit `BackendProtocol` instances), and output formats changed (e.g., `ls`/`glob` returns `"No files found"` instead of `[]`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T01:11:25.395518+05:30

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
