---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-08T12:53:30.487286+05:30'
collected_at: '2026-08-08T12:53:30.487300+05:30'
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
first_seen: '2026-08-08T12:53:30.487300+05:30'
last_seen: '2026-08-08T12:53:30.487300+05:30'
last_checked: '2026-08-08T12:53:30.487300+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Annotation & Dataset APIs**: Public API endpoints for annotation queue items (add, list, update, delete, count, position, review) now support run/thread queue items; dataset uploads accept `.csv`/`.jsonl` regardless of browser-reported `Content-Type` (e.g., Windows Excel-type `.csv`); legacy endpoints (`v1 runs`, `POST /api/v1/datasets/{dataset_id}/runs`) deprecated with `Sunset: Jan 31, 2027`.
- **Tracing & Feedback Enhancements**: Trace detail panes use elevated backgrounds; bulk exports include optional `feedbacks` column (JSON array of feedback entries); negative feedback-key filters now work correctly with optimized ClickHouse runs tables; PDF/document attachments render in full-width preview.
- **LLM Gateway & Sandbox Updates**: Gateway policies with blank names fall back to ID display; sandbox streaming execute requests return stdout/stderr via Server-Sent Events; `langsmith` CLI v0.2.44 preinstalled in sandboxes; Gateway Credits purchase UI shows post-purchase balance and fee-inclusive total.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T12:53:30.487286+05:30

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
