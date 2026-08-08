---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-08T21:25:28.659133+05:30'
collected_at: '2026-08-08T21:25:28.659142+05:30'
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
first_seen: '2026-08-08T21:25:28.659142+05:30'
last_seen: '2026-08-08T21:25:28.659142+05:30'
last_checked: '2026-08-08T21:25:28.659142+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Annotation & Dataset Enhancements**: LangSmith introduces public API endpoints for annotation queue items (CRUD + positioning/review), fixes CSV/JSONL uploads (including uppercase filenames), and ensures evaluator renames persist in dataset/experiment views. Legacy v1 endpoints (runs, sharing, datasets) are deprecated with sunset date of Jan 31, 2027.

- **Tracing & Engine Improvements**: Trace exports now support a `feedbacks` column for JSON feedback entries; negative feedback-key filters work correctly with optimized ClickHouse runs tables. Engine issues reopen automatically when new matching traces appear, and run webhooks resolve via `LANGSMITH_PUBLIC_API_ENDPOINT` to avoid loopback failures.

- **LLM Gateway & Sandbox Updates**: LLM Gateway adds streaming execute requests for sandboxes (stdout/stderr as SSE), enforces policy name validation, and displays top 12 spenders in usage charts. Sandboxes include the `langsmith` CLI v0.2.44, resolving API path issues in self-hosted deployments.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T21:25:28.659133+05:30

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
