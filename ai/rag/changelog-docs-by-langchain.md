---
title: Changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/releases/changelog
published_at: '2026-07-08T09:22:20.403954+05:30'
collected_at: '2026-07-08T09:22:20.403963+05:30'
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
first_seen: '2026-07-08T09:22:20.403963+05:30'
last_seen: '2026-07-08T09:22:20.403963+05:30'
last_checked: '2026-07-08T09:22:20.403963+05:30'
health_score: 100
---

# Changelog - Docs by LangChain

## Summary

- **`deepagents` v0.7.0**: Introduced a new `delete` filesystem tool for recursive directory deletion, modified `write_file` to overwrite existing files (use `edit_file` for targeted changes), enabled middleware instance overriding via name matching, and added filesystem tool allowlisting in `FilesystemMiddleware`.

- **`DeltaChannel` (beta)**: Implemented in `deepagents` and `langgraph` v1.2.0 to store only incremental deltas for large-growing channels (e.g., message lists), reducing checkpoint overhead; supports `snapshot_frequency=K` for periodic full snapshots.

- **`ContextHubBackend`**: New filesystem backend for `deepagents` storing agent files (skills, memories) as LangSmith Hub commits, enabling version history and native durability without separate LangGraph storage.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-08T09:22:20.403954+05:30

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
