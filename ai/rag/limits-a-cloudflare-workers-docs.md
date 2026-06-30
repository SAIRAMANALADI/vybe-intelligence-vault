---
title: Limits Â· Cloudflare Workers docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developers.cloudflare.com/workers/platform/limits/#cpu-time
published_at: '2026-07-01T01:55:23.552657+05:30'
collected_at: '2026-07-01T01:55:23.552674+05:30'
tags:
- agents
- dataset
- rag
- reddit
- scripts
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:limits-a-cloudflare-workers-docs
first_seen: '2026-07-01T01:55:23.552674+05:30'
last_seen: '2026-07-01T01:55:23.552674+05:30'
last_checked: '2026-07-01T01:55:23.552674+05:30'
health_score: 100
---

# Limits Â· Cloudflare Workers docs

## Summary

- **Plan-Specific Limits**:
  - **Free Plan**: 100K daily requests, 10ms CPU time per HTTP request, 50 subrequests/invocation, 100 Workers/account.
  - **Paid Plan**: Unlimited daily requests, 5min CPU time (configurable up to 300K ms), 10K subrequests/invocation, 500 Workers/account.

- **Resource Constraints**:
  - **Memory**: 128MB per isolate (includes JS heap and WebAssembly).
  - **Concurrent Connections**: Max 6 simultaneous outgoing connections per invocation (headers-waiting phase only).
  - **Request/Response**: 128KB header size limit; response body has no enforced limit (Enterprise: 5GB cache max).

- **Duration & Subrequests**:
  - **HTTP Requests**: No duration limit; Cron Triggers/Durable Objects limited to 15min.
  - **Subrequests**: Free plan allows 50/invocation (1K to internal services), Paid allows 10K (configurable up to 10M).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T01:55:23.552657+05:30

## Related Tags

- agents
- dataset
- rag
- reddit
- scripts
- web-crawled
- workflows
- youtube

## Source

Original source: https://developers.cloudflare.com/workers/platform/limits/#cpu-time
