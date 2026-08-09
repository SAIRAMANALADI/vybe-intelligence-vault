---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-10T03:32:09.300678+05:30'
collected_at: '2026-08-10T03:32:09.300691+05:30'
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
first_seen: '2026-08-10T03:32:09.300691+05:30'
last_seen: '2026-08-10T03:32:09.300691+05:30'
last_checked: '2026-08-10T03:32:09.300691+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Annotation & Dataset APIs**: LangSmith introduced public API endpoints for annotation queue items (CRUD + positioning/review) and improved dataset uploads (CSV/JSONL, case-insensitive filenames, metadata rendering in experiment grids). Legacy endpoints (v1 runs, datasets, annotation queues) are deprecated with a sunset date of Jan 31, 2027.

- **Tracing & Engine Enhancements**: Trace exports now support a `feedbacks` column for JSON feedback arrays. Engine issue boards auto-reopen when new matching traces are linked, and tracing project sorting is fixed for self-hosted Redis <6.2. Token/cost filters default to total metrics (input/output breakdowns remain available).

- **LLM Gateway & Sandbox Updates**: Gateway policies enforce non-blank names, usage charts show top 12 spenders, and onboarding supports Gateway Credits (prepaid) or BYO API keys. Sandboxes now include `langsmith` CLI v0.2.44, streaming execute via SSE, and WebSocket auth fixes for self-hosted deployments.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T03:32:09.300678+05:30

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
