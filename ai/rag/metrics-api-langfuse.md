---
title: Metrics API - Langfuse
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://langfuse.com/docs/metrics/features/metrics-api#v2
published_at: '2026-08-02T21:56:13.905437+05:30'
collected_at: '2026-08-02T21:56:13.905449+05:30'
tags:
- agents
- benchmark
- hackernews
- rag
- web-crawled
- youtube
status: active
resource_id: blog:metrics-api-langfuse
first_seen: '2026-08-02T21:56:13.905449+05:30'
last_seen: '2026-08-02T21:56:13.905449+05:30'
last_checked: '2026-08-02T21:56:13.905449+05:30'
health_score: 100
---

# Metrics API - Langfuse

## Summary

- **Metrics API v2** (`GET /api/public/v2/metrics`) enables custom analytics for LLM applications by supporting dimensions, metrics, filters, and time granularity; replaces deprecated v1 endpoints with migration guidance.

- **Key v2 changes**: Removes `traces` view, introduces `observations`, `scores-numeric`, `scores-categorical`, and `scores-boolean` views; enforces 100-row default limit (up to 1,000), prohibits high-cardinality grouping (e.g., `id`, `traceId`).

- **Query structure**: Requires `view`, `metrics` (e.g., `totalCost` with `sum` aggregation), `dimensions`, and supports ordering via `{aggregation}_{measure}` (e.g., `sum_totalCost`); example curl provided for cost analysis by `providedModelName`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T21:56:13.905437+05:30

## Related Tags

- agents
- benchmark
- hackernews
- rag
- web-crawled
- youtube

## Source

Original source: https://langfuse.com/docs/metrics/features/metrics-api#v2
