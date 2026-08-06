---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-06T14:33:31.922120+05:30'
collected_at: '2026-08-06T14:33:31.922135+05:30'
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
first_seen: '2026-08-06T14:33:31.922135+05:30'
last_seen: '2026-08-06T14:33:31.922135+05:30'
last_checked: '2026-08-06T14:33:31.922135+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Annotation & Dataset APIs**: LangSmith added public API endpoints for annotation queue items (CRUD, counting, positioning, reviewing) and improved dataset uploads (case-insensitive `.csv`/`.jsonl`, Windows browser compatibility). Legacy endpoints (e.g., v1 runs query, `/datasets/{id}/runs`) are deprecated with sunset date **Jan 31, 2027**.

- **Tracing & Engine Enhancements**: Trace exports now support a `feedbacks` column (JSON array of feedback entries). Engine issues reopen automatically when new traces match, and run webhooks resolve URLs via `LANGSMITH_PUBLIC_API_ENDPOINT` to avoid loopback failures.

- **LLM Gateway & Sandbox Updates**: Gateway policies enforce stricter name validation, and usage charts now show top 12 spenders per bucket. Sandboxes include `langsmith` CLI v0.2.44 and support streaming execute requests via Server-Sent Events for WebSocket-less clients.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-06T14:33:31.922120+05:30

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
