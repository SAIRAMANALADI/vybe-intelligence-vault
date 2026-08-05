---
title: Changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/releases/changelog
published_at: '2026-08-06T04:02:03.892197+05:30'
collected_at: '2026-08-06T04:02:03.892212+05:30'
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
first_seen: '2026-08-06T04:02:03.892212+05:30'
last_seen: '2026-08-06T04:02:03.892212+05:30'
last_checked: '2026-08-06T04:02:03.892212+05:30'
health_score: 100
---

# Changelog - Docs by LangChain

## Summary

- **`deepagents` v0.7.0**: Input tokens reduced by **65%** (5,395 → 1,895) via leaner default prompts and trimmed tool schemas; introduces filesystem tool enhancements (e.g., `delete`, `write_file` overwrite), prompt-caching support for Bedrock/Fireworks, and NVIDIA Nemotron 3 Ultra harness profile.

- **Breaking changes in `deepagents` v0.7.0**: Planning `todos` opt-in (removed from default), backend compatibility shims removed (requires concrete `BackendProtocol` instances), and output format changes (e.g., `ls`/`glob` returns `No files found` instead of `[]`).

- **LangGraph v1.2.0**: Introduces `DeltaChannel` (beta) for incremental state storage, per-node timeouts/error handlers, graceful shutdown via `RunControl`, and a new `version="v3"` event streaming API with typed, per-channel projections.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-06T04:02:03.892197+05:30

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
