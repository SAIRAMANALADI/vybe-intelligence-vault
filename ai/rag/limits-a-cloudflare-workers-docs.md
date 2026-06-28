---
title: Limits Â· Cloudflare Workers docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developers.cloudflare.com/workers/platform/limits/#cpu-time
published_at: '2026-06-29T01:22:15.717646+05:30'
collected_at: '2026-06-29T01:22:15.717659+05:30'
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
first_seen: '2026-06-29T01:22:15.717659+05:30'
last_seen: '2026-06-29T01:22:15.717659+05:30'
last_checked: '2026-06-29T01:22:15.717659+05:30'
health_score: 100
---

# Limits Â· Cloudflare Workers docs

## Summary

- **Account Plan Limits**: Free plan allows 100K daily requests, 10ms CPU time per HTTP request, 128MB memory per isolate, 50 subrequests per invocation, and 6 simultaneous open connections. Paid plans offer no daily request limit, up to 5 minutes CPU time, 10MB worker size, and 10K subrequests per invocation.
- **Request/Response Limits**: Max URL size is 16KB; request/response header sizes capped at 128KB. Free/Pro plans enforce 100MB max request body, Business 200MB, Enterprise 500MB (adjustable). No enforced response body limit (CDN cache limits apply: 512MB for Free/Pro/Business, 5GB for Enterprise).
- **CPU Time & Memory Enforcement**: CPU time excludes network wait time; Free plan enforces 10ms per request, Paid up to 5 minutes (configurable). Memory limit is 128MB per isolate; exceeding triggers Error 1102. Streaming (e.g., `TransformStream`) and offloading to Durable Objects/KV/R2/D1 recommended for optimization.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T01:22:15.717646+05:30

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
