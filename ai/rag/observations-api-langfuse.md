---
title: Observations API - Langfuse
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://langfuse.com/docs/api-and-data-platform/features/observations-api#v2
published_at: '2026-08-02T21:56:14.059869+05:30'
collected_at: '2026-08-02T21:56:14.059882+05:30'
tags:
- agents
- benchmark
- dataset
- hackernews
- models
- openai
- rag
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:observations-api-langfuse
first_seen: '2026-08-02T21:56:14.059882+05:30'
last_seen: '2026-08-02T21:56:14.059882+05:30'
last_checked: '2026-08-02T21:56:14.059882+05:30'
health_score: 100
---

# Observations API - Langfuse

## Summary

- **v2 Observations API** replaces deprecated endpoints (`/api/public/traces`, `/api/public/observations`) with optimized query performance, cursor-based pagination, and selective field retrieval via `fields` parameter (e.g., `core,basic,usage`).
- **Logical vs. Physical Parentage**: Uses `isRootObservation` (application roots) and `parentObservationId` (physical hierarchy) for precise observation filtering; I/O returned as raw strings (deprecates `parseIoAsJson`).
- **Enhanced Limits & Filtering**: Supports up to 1,000 observations per request (vs. 100 in v1), includes time-bound queries (`fromStartTime`/`toStartTime`), and advanced `filter` parameter for complex conditions (e.g., `isRootObservation=true`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T21:56:14.059869+05:30

## Related Tags

- agents
- benchmark
- dataset
- hackernews
- models
- openai
- rag
- web-crawled
- workflows
- youtube

## Source

Original source: https://langfuse.com/docs/api-and-data-platform/features/observations-api#v2
