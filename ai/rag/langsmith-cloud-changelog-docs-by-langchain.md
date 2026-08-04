---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-05T04:03:25.865949+05:30'
collected_at: '2026-08-05T04:03:25.865961+05:30'
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
first_seen: '2026-08-05T04:03:25.865961+05:30'
last_seen: '2026-08-05T04:03:25.865961+05:30'
last_checked: '2026-08-05T04:03:25.865961+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Annotation & Dataset APIs**: Public API now supports full CRUD operations for annotation queue items (runs/threads), with CSV/JSONL uploads accepting all Content-Type headers (including Windows Excel types) and legacy endpoints marked deprecated (Sunset: Jan 31, 2027).

- **Tracing & Engine Improvements**: Trace deletion, negative feedback-key filters, and token/cost filter defaults (total tokens/cost) now work consistently. Engine issues reopen automatically when new matching traces are linked, and run webhooks resolve via `LANGSMITH_PUBLIC_API_ENDPOINT`.

- **LLM Gateway & Sandbox Updates**: Gateway policies enforce non-blank names, usage charts show top 12 spenders, and sandbox streaming executes via Server-Sent Events. Self-hosted deployments authenticate sandbox commands via WebSocket with deployment service keys.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-05T04:03:25.865949+05:30

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
