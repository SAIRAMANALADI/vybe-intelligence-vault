---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-10T10:36:23.374425+05:30'
collected_at: '2026-08-10T10:36:23.374435+05:30'
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
first_seen: '2026-08-10T10:36:23.374435+05:30'
last_seen: '2026-08-10T10:36:23.374435+05:30'
last_checked: '2026-08-10T10:36:23.374435+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Annotation & Experiment Enhancements**: LangSmith introduces public API endpoints for annotation queue items (add/list/update/delete/position/review) and improves dataset uploads (CSV/JSONL support, uppercase filenames). Legacy endpoints (v1 runs, sharing, datasets) are deprecated with a sunset date of January 31, 2027, and migration guidance provided.

- **Tracing & Feedback Improvements**: Trace exports now include a `feedbacks` column (JSON array of feedback entries), and negative feedback-key filters work correctly with optimized ClickHouse runs tables. PDF/document attachments render in full-width previews, and playground errors now display provider-specific messages instead of generic server errors.

- **LLM Gateway & Sandbox Updates**: LLM Gateway adds streaming execute requests for sandboxes (stdout/stderr via Server-Sent Events), enforces policy name validation, and improves credit purchase UX. Sandboxes now include the `langsmith` CLI by default, and self-hosted deployments authenticate sandbox commands via WebSocket with deployment service keys.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T10:36:23.374425+05:30

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
