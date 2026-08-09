---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-09T08:08:33.110122+05:30'
collected_at: '2026-08-09T08:08:33.110135+05:30'
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
first_seen: '2026-08-09T08:08:33.110135+05:30'
last_seen: '2026-08-09T08:08:33.110135+05:30'
last_checked: '2026-08-09T08:08:33.110135+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Annotation & Dataset APIs**: Public API endpoints for annotation queue items (CRUD + positioning) now support `.csv`/`.jsonl` uploads regardless of browser-reported `Content-Type`, including uppercase filenames (e.g., `DATASET.CSV`). Legacy endpoints (e.g., `/api/v1/runs`, annotation queue runs) are deprecated with sunset date **Jan 31, 2027** and migration guide links.

- **Tracing & Engine Improvements**: Trace deletion added via run details menu; negative feedback-key filters now work correctly with optimized ClickHouse runs tables; Engine issue boards reopen automatically when new matching traces are linked. Token/Cost filters default to **total** metrics (input/output breakdowns retained).

- **LLM Gateway & Sandboxes**: Gateway policies enforce non-blank names; usage charts show top 12 spenders per bucket; sandboxes include `langsmith` CLI v0.2.44 by default, enabling trace/dataset queries without installation. Streaming execute requests in sandboxes return `stdout`/`stderr` as Server-Sent Events for non-WebSocket clients.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T08:08:33.110122+05:30

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
