---
title: API 2.3 Release - Meta Stack Exchange
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://meta.stackexchange.com/questions/366977/api-2-3-release
published_at: '2026-06-24T10:22:01.301734+05:30'
collected_at: '2026-06-24T10:22:01.301750+05:30'
tags:
- agents
- hackernews
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:api-2-3-release-meta-stack-exchange
first_seen: '2026-06-24T10:22:01.301750+05:30'
last_seen: '2026-06-24T10:22:01.301750+05:30'
last_checked: '2026-06-24T10:22:01.301750+05:30'
health_score: 100
---

# API 2.3 Release - Meta Stack Exchange

## Summary

- **API v2.3 Release Notes**: Introduced support for [Collectives](https://meta.stackoverflow.com/questions/408585/beta-release-of-collectives-on-stack-overflow) and Articles, added flag retraction capability, and exposed new endpoints for suggested edits, tag preferences, and network achievements.

- **API Consistency Issues**: New `collective-report` type fields (`ActivityReportDimensions`, `HealthReportDimensions`, `UsersReportDimensions`) violate snake_case convention, breaking API naming consistency.

- **Documentation & Bug Fixes**: API docs incorrectly labeled as v2.2, `/articles` endpoint returned malformed links (missing `/collectives/google-cloud` path segment), and undocumented `can_suggest_edit` field was later exposed in API responses.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T10:22:01.301734+05:30

## Related Tags

- agents
- hackernews
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://meta.stackexchange.com/questions/366977/api-2-3-release
