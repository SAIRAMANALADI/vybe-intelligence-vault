---
title: Full-Text Search - Langfuse
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://langfuse.com/docs/observability/features/full-text-search
published_at: '2026-08-02T21:56:13.892304+05:30'
collected_at: '2026-08-02T21:56:13.892324+05:30'
tags:
- agents
- benchmark
- hackernews
- producthunt
- web-crawled
- youtube
status: active
resource_id: blog:full-text-search-langfuse
first_seen: '2026-08-02T21:56:13.892324+05:30'
last_seen: '2026-08-02T21:56:13.892324+05:30'
last_checked: '2026-08-02T21:56:13.892324+05:30'
health_score: 100
---

# Full-Text Search - Langfuse

## Summary

- **Implementation**: Full-text search in Langfuse uses ClickHouse text indexes for token-based matching (`error` ≠ `errors`), enabling efficient substring-free queries across `input`, `output`, and string `metadata` in traces/observations.

- **API Support**: The `/api/public/v2/observations` endpoint supports a `matches` operator for case-insensitive token search on `input`/`output` and case-sensitive search on metadata, rejecting slow substring operators (`contains`, `startsWith`, etc.).

- **Performance**: Text indexes skip non-matching data pre-scanning, ensuring fast queries even in high-volume projects; multi-word queries require contiguous phrase matches.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-02T21:56:13.892304+05:30

## Related Tags

- agents
- benchmark
- hackernews
- producthunt
- web-crawled
- youtube

## Source

Original source: https://langfuse.com/docs/observability/features/full-text-search
