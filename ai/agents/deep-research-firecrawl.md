---
title: Deep Research | Firecrawl
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://docs.firecrawl.dev/features/alpha/deep-research
published_at: '2026-08-05T01:33:31.390671+05:30'
collected_at: '2026-08-05T01:33:31.390677+05:30'
tags:
- agents
- hackernews
- web-crawled
status: active
resource_id: blog:deep-research-firecrawl
first_seen: '2026-08-05T01:33:31.390677+05:30'
last_seen: '2026-08-05T01:33:31.390677+05:30'
last_checked: '2026-08-05T01:33:31.390677+05:30'
health_score: 100
---

# Deep Research | Firecrawl

## Summary

- **Autonomous Research Pipeline**: The `/deep-research` endpoint performs AI-driven, multi-stage research by iteratively analyzing a query, searching relevant web content, extracting key insights, and synthesizing findings into structured outputs (activities, sources, and final analysis) with source attribution.

- **Configurable Parameters**: Research depth (`maxDepth`), time limits (`timeLimit`), and URL cap (`maxUrls`) can be tuned (e.g., `maxDepth=5`, `timeLimit=180s`, `maxUrls=15`) to balance thoroughness and cost, with billing based on URLs processed (1 credit/URL).

- **Real-Time Monitoring & Output**: Asynchronous jobs provide progress tracking via `activities` (search/extract/analyze/synthesize steps) and return structured JSON responses with `finalAnalysis`, `sources`, and status updates (`processing`/`completed`), optionally customizable via `systemPrompt` and `analysisPrompt`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-05T01:33:31.390671+05:30

## Related Tags

- agents
- hackernews
- web-crawled

## Source

Original source: https://docs.firecrawl.dev/features/alpha/deep-research
