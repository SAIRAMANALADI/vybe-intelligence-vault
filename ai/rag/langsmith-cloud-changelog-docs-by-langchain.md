---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-06T17:13:23.279516+05:30'
collected_at: '2026-08-06T17:13:23.279532+05:30'
tags:
- agents
- anthropic
- benchmark
- dataset
- frontend_ui
- mistral
- models
- openai
- producthunt
- rag
- scripts
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:langsmith-cloud-changelog-docs-by-langchain
first_seen: '2026-08-06T17:13:23.279532+05:30'
last_seen: '2026-08-06T17:13:23.279532+05:30'
last_checked: '2026-08-06T17:13:23.279532+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Annotation Queue & SDK Enhancements**: Public API now exposes endpoints for managing annotation queue items (CRUD, positioning, reviewing) via `/api/v1/platform`, with SDK generation support. Legacy endpoints (e.g., v1 runs, annotation queue) deprecated with sunset date of **Jan 31, 2027** and migration guide provided.

- **Tracing & Observability Improvements**: Trace exports now support a `feedbacks` column for JSON-serialized feedback entries. Token/cost filters default to **total tokens/cost** (not input-only), with consistent support across query backends. Self-hosted deployments now resolve relative signed URLs for attachments and sync tracing project activity via Redis compatibility fixes.

- **LLM Gateway & Sandbox Updates**: LLM Gateway adds **streaming execute** for sandboxes (stdout/stderr via SSE), credit purchase UI with real-time balance updates, and policy scoping for organization/workspace/user headers. Sandboxes include `langsmith` CLI v0.2.44, resolving `/api` path issues in self-hosted deployments.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-06T17:13:23.279516+05:30

## Related Tags

- agents
- anthropic
- benchmark
- dataset
- frontend_ui
- mistral
- models
- openai
- producthunt
- rag
- scripts
- web-crawled
- workflows
- youtube

## Source

Original source: https://changelog.langchain.com/
