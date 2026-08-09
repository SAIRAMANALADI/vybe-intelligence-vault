---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-09T12:56:19.581707+05:30'
collected_at: '2026-08-09T12:56:19.581722+05:30'
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
first_seen: '2026-08-09T12:56:19.581722+05:30'
last_seen: '2026-08-09T12:56:19.581722+05:30'
last_checked: '2026-08-09T12:56:19.581722+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Annotation & Dataset APIs**: Public API endpoints for annotation queue items (CRUD + positioning) now support `.csv`/`.jsonl` uploads regardless of browser-reported `Content-Type`, including uppercase filenames (e.g., `DATASET.CSV`). Legacy endpoints (e.g., v1 runs query) deprecated with sunset date of **Jan 31, 2027** and migration guide links.

- **LLM Gateway Enhancements**: Policy management expanded to support organization/workspace/user-scoped spend caps/rate limits via custom `X-Gateway-*` headers. Credit purchase UI now shows fee-inclusive totals, and onboarding flow includes model access options (Gateway Credits vs. provider API keys).

- **Tracing & Sandbox Updates**: Trace deletion added to run details; sandboxes now include `langsmith` CLI v0.2.44 by default, with streaming execute requests (SSE) for non-WebSocket clients. Token/cost filters default to **total** metrics (input/output breakdowns retained).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T12:56:19.581707+05:30

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
