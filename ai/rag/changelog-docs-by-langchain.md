---
title: Changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/releases/changelog
published_at: '2026-07-09T09:52:10.662462+05:30'
collected_at: '2026-07-09T09:52:10.662477+05:30'
tags:
- agents
- anthropic
- openai
- producthunt
- rag
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:changelog-docs-by-langchain
first_seen: '2026-07-09T09:52:10.662477+05:30'
last_seen: '2026-07-09T09:52:10.662477+05:30'
last_checked: '2026-07-09T09:52:10.662477+05:30'
health_score: 100
---

# Changelog - Docs by LangChain

## Summary

- **`deepagents` v0.7.0a6**: Introduced a new `delete` filesystem tool for recursive directory/file deletion, modified `write_file` to overwrite existing files, enabled middleware instance overriding via `.name` matching, and added filesystem tool allowlisting in `FilesystemMiddleware`.

- **`DeltaChannel` (beta)**: Implemented in `deepagents` and `langgraph` v1.2.0, this channel type stores only incremental deltas per step (e.g., message history) to reduce checkpoint overhead, with optional full snapshots via `snapshot_frequency=K`.

- **`ContextHubBackend`**: New filesystem backend for `deepagents` backed by LangSmith Hub, storing agent files (skills, memories) as Hub commits for versioned persistence and native durability without separate LangGraph storage.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-09T09:52:10.662462+05:30

## Related Tags

- agents
- anthropic
- openai
- producthunt
- rag
- web-crawled
- workflows
- youtube

## Source

Original source: https://docs.langchain.com/oss/python/releases/changelog
