---
title: Crawl | Firecrawl
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.firecrawl.dev/features/crawl
published_at: '2026-08-06T03:58:39.195416+05:30'
collected_at: '2026-08-06T03:58:39.195437+05:30'
tags:
- agents
- benchmark
- hackernews
- meta-ai
- models
- producthunt
- rag
- scripts
- web-crawled
- workflows
status: active
resource_id: blog:crawl-firecrawl
first_seen: '2026-08-06T03:58:39.195437+05:30'
last_seen: '2026-08-06T03:58:39.195437+05:30'
last_checked: '2026-08-06T03:58:39.195437+05:30'
health_score: 100
---

# Crawl | Firecrawl

## Summary

- **Crawl Functionality**: Recursively crawls websites via sitemaps or link traversal, supporting depth limits, path filtering, and subdomain/external link control; returns structured data (markdown/JSON) or raw HTML with metadata (status codes, titles, descriptions).

- **Credit System & Options**: Each page consumes 1 credit (default limit: 10,000); JSON mode (+4 credits/page), enhanced proxy (+4 credits/page), and PDF parsing (+1 credit/page) are available; job results persist for 24 hours post-completion.

- **Real-Time & Async Workflows**: Supports WebSocket-based real-time updates (`watcher`), webhook callbacks (events: `started`, `page`, `completed`, `failed`), and SDK methods (`crawl`, `start_crawl` + `get_crawl_status`) for polling or immediate processing.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-06T03:58:39.195416+05:30

## Related Tags

- agents
- benchmark
- hackernews
- meta-ai
- models
- producthunt
- rag
- scripts
- web-crawled
- workflows

## Source

Original source: https://docs.firecrawl.dev/features/crawl
