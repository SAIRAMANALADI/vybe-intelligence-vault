---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-07T05:54:19.945046+05:30'
collected_at: '2026-08-07T05:54:19.945066+05:30'
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
first_seen: '2026-08-07T05:54:19.945066+05:30'
last_seen: '2026-08-07T05:54:19.945066+05:30'
last_checked: '2026-08-07T05:54:19.945066+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **API & SDK Enhancements**: Annotation queue endpoints (`/api/v1/platform`) now support full CRUD operations (add/list/update/delete/count/position/review) for run/thread queue items via public API/SDK. Legacy endpoints (v1 runs, datasets, sharing) are deprecated with sunset date **Jan 31, 2027** and migration guide links.

- **Tracing & Observability**: Trace exports now include optional `feedbacks` column (JSON array of key/comment pairs). Token/cost filters default to **total** metrics (input/output breakdowns retained). Negative feedback-key filters fixed for ClickHouse optimized runs tables.

- **LLM Gateway & Sandboxes**: Gateway policies enforce blank-name validation; spend charts show top 12 spenders per bucket. Sandboxes support **streaming execute** (Server-Sent Events) and include `langsmith` CLI v0.2.44, resolving `/api` path issues in self-hosted deployments.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-07T05:54:19.945046+05:30

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
