---
title: Affinity V1 API Reference
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://api-docs.affinity.co
published_at: '2026-06-23T01:20:56.523932+05:30'
collected_at: '2026-06-23T01:20:56.523947+05:30'
tags:
- dataset
- hackernews
- rag
- scripts
- web-crawled
- workflows
status: active
resource_id: blog:affinity-v1-api-reference
first_seen: '2026-06-23T01:20:56.523947+05:30'
last_seen: '2026-06-23T01:20:56.523947+05:30'
last_checked: '2026-06-23T01:20:56.523947+05:30'
health_score: 100
---

# Affinity V1 API Reference

## Summary

- **Authentication**: Supports HTTP Basic Auth (API key as password) and Bearer Auth (API key as token), with IP allowlisting for enhanced security.
- **Rate Limits**: Enforces per-minute, monthly (tier-dependent: 100K for Scale/Advanced, unlimited for Enterprise), and concurrent request limits, returning `429` on exceeding thresholds.
- **Error Handling**: Standard RESTful responses with JSON payloads; errors include `401` (Unauthorized), `403` (Forbidden), `422` (Unprocessable Entity), and `429` (Rate Limit). All requests require HTTPS.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-23T01:20:56.523932+05:30

## Related Tags

- dataset
- hackernews
- rag
- scripts
- web-crawled
- workflows

## Source

Original source: https://api-docs.affinity.co
