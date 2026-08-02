---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-02T14:17:16.192809+05:30'
collected_at: '2026-08-02T14:17:16.192823+05:30'
tags:
- agents
- anthropic
- benchmark
- dataset
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
first_seen: '2026-08-02T14:17:16.192823+05:30'
last_seen: '2026-08-02T14:17:16.192823+05:30'
last_checked: '2026-08-02T14:17:16.192823+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Deprecation & Migration**: Legacy feedback formula endpoints (`POST/GET /feedback/formulas`) are deprecated in favor of composite evaluators (code evaluator + run rule), with removal scheduled for **2026-08-20**; users must migrate existing formulas to the new model.

- **Performance & Reliability**: LangSmith now enforces **monthly trace limits** per project/user, caps reusable evaluators per workspace, and improves batch ingestion (e.g., buffering OpenTelemetry spans, zstd compression for bulk exports) to prevent resource exhaustion and timeouts.

- **UI/UX & API Enhancements**: New features include **interactive split chips** in experiment tables, **thread evaluator testing**, **annotation queue batching** (RUN/THREAD support), and **OpenTelemetry resource attribute integration**; deprecated legacy dataset comparison helpers removed from public OpenAPI spec.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T14:17:16.192809+05:30

## Related Tags

- agents
- anthropic
- benchmark
- dataset
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
