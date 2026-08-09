---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-09T15:37:07.886351+05:30'
collected_at: '2026-08-09T15:37:07.886362+05:30'
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
- reddit
- scripts
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:langsmith-cloud-changelog-docs-by-langchain
first_seen: '2026-08-09T15:37:07.886362+05:30'
last_seen: '2026-08-09T15:37:07.886362+05:30'
last_checked: '2026-08-09T15:37:07.886362+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Annotation & Dataset APIs**: LangSmith Cloud exposes new annotation queue item endpoints (add/list/update/delete/count/position/review) via public API/SDK, with support for `.csv`/`.jsonl` uploads regardless of browser-reported `Content-Type` (fixes Windows Excel-type labeling issues) and uppercase filenames (e.g., `DATASET.CSV`).

- **Legacy API Deprecation**: All legacy endpoints (v1 runs query/retrieve, v1 run sharing/public-read, `POST /api/v1/datasets/{dataset_id}/runs`, annotation queue run endpoints) are marked deprecated with `Sunset: January 31, 2027` and `Deprecation: true` headers, requiring migration to SmithDB SDK.

- **LLM Gateway Enhancements**: New LLM Gateway features include per-subject spend-cap/rate-limit policies (org/workspace/user/API-key-scoped), expanded default policy visibility, improved credit purchase UX (real-time balance display), and Google Gemini model support in connect samples.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T15:37:07.886351+05:30

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
- reddit
- scripts
- web-crawled
- workflows
- youtube

## Source

Original source: https://changelog.langchain.com/
