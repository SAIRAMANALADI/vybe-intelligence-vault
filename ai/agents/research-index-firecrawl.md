---
title: Research Index | Firecrawl
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://docs.firecrawl.dev/features/research?utm_source=firecrawl-web&utm_medium=banner&utm_campaign=research-index-launch
published_at: '2026-07-01T01:54:02.955232+05:30'
collected_at: '2026-07-01T01:54:02.955249+05:30'
tags:
- agents
- benchmark
- dataset
- paper
- producthunt
- web-crawled
status: active
resource_id: blog:research-index-firecrawl
first_seen: '2026-07-01T01:54:02.955249+05:30'
last_seen: '2026-07-01T01:54:02.955249+05:30'
last_checked: '2026-07-01T01:54:02.955249+05:30'
health_score: 100
---

# Research Index | Firecrawl

## Summary

- **API Endpoints**: Provides structured endpoints for research tasks:
  - `GET /search/research/papers` (search papers by query/filters)
  - `GET /search/research/papers/{id}` (inspect metadata/passages)
  - `GET /search/research/papers/{id}/similar` (find related papers via semantic expansion)
  - `GET /search/research/github` (search GitHub history/READMEs)

- **Paper Analysis Features**:
  - Natural-language paper search with ranked results (title, abstract, `paperId`, `primaryId`, score)
  - Passage retrieval via `query` parameter to extract full-text answers (e.g., methods/datasets)
  - Related paper discovery using `intent` parameter with modes: `similar` (co-citation), `citers` (papers citing seed), or `references` (papers cited by seed)

- **GitHub Integration**:
  - Searches GitHub issues/PRs/discussions/READMEs for implementation notes, bugs, or design discussions
  - Returns repository URL, metadata, and matched markdown content with contextual snippets

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-01T01:54:02.955232+05:30

## Related Tags

- agents
- benchmark
- dataset
- paper
- producthunt
- web-crawled

## Source

Original source: https://docs.firecrawl.dev/features/research?utm_source=firecrawl-web&utm_medium=banner&utm_campaign=research-index-launch
