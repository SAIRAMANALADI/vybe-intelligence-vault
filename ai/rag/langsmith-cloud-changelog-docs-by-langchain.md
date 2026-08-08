---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-09T03:31:20.986936+05:30'
collected_at: '2026-08-09T03:31:20.986955+05:30'
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
first_seen: '2026-08-09T03:31:20.986955+05:30'
last_seen: '2026-08-09T03:31:20.986955+05:30'
last_checked: '2026-08-09T03:31:20.986955+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Annotation & Dataset APIs**: Public API endpoints for annotation queue items (CRUD, positioning, reviewing) now support run/thread queue operations; dataset uploads accept `.csv`/`.jsonl` regardless of browser-reported `Content-Type` (fixes Windows Excel-type mislabeling); legacy endpoints (e.g., v1 runs query, `/api/v1/datasets/{dataset_id}/runs`) deprecated with `Sunset: Jan 31, 2027` and migration guide links.

- **Tracing & Engine Improvements**: Trace bulk exports now include an opt-in `feedbacks` column (JSON array of feedback entries); Engine issue boards reopen when new matching traces are linked; `POST /api/v1/runs/stats` returns 404 for non-existent projects (replaces generic 500 errors); token/cost filters default to **total** metrics (input/output breakdowns preserved).

- **LLM Gateway & Sandboxes**: Gateway policies enforce non-blank names; spend charts cap top spenders at 12 with "Other" aggregation; sandboxes support streaming execute via Server-Sent Events (WebSocket fallback), include `langsmith` CLI v0.2.44, and authenticate Engine commands with deployment service keys to prevent 401 errors.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T03:31:20.986936+05:30

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
