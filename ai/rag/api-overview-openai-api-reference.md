---
title: API Overview | OpenAI API Reference
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/api-reference
published_at: '2026-07-04T03:54:07.166262+05:30'
collected_at: '2026-07-04T03:54:07.166275+05:30'
tags:
- models
- openai
- rag
- web-crawled
- workflows
status: active
resource_id: blog:api-overview-openai-api-reference
first_seen: '2026-07-04T03:54:07.166275+05:30'
last_seen: '2026-07-04T03:54:07.166275+05:30'
last_checked: '2026-07-04T03:54:07.166275+05:30'
health_score: 100
---

# API Overview | OpenAI API Reference

## Summary

- **API Surface & Authentication**: OpenAI API offers three primary surfaces—**Responses** (direct model requests, tool use, audio/image/text inputs), **Realtime API** (low-latency voice/audio via WebRTC/WebSocket/SIP), and **Administration** (organization workflows, API keys, audit logs). Authentication uses **Bearer tokens** (API keys or short-lived access tokens via workload identity federation), with optional `OpenAI-Organization` and `OpenAI-Project` headers for multi-tenant setups.

- **Debugging & Rate Limits**: API responses include headers like `x-request-id` (unique request ID), `openai-processing-ms` (latency), and rate-limit metrics (`x-ratelimit-*` for requests/tokens, including project-scoped limits). Clients can supply a custom `X-Client-Request-Id` (ASCII, ≤512 chars) for tracking requests when server-generated IDs are unavailable.

- **Backwards Compatibility**: OpenAI maintains stability in **REST API (`v1`)**, **client libraries (semantic versioning)**, and **model families** (e.g., `gpt-4o`), avoiding breaking changes. Backwards-compatible updates include new optional parameters, resources, or properties, while model output variability requires pinned versions and evals for consistency. Breaking changes are rare and documented in the [changelog](https://platform.openai.com/api/docs/changelog).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T03:54:07.166262+05:30

## Related Tags

- models
- openai
- rag
- web-crawled
- workflows

## Source

Original source: https://platform.openai.com/docs/api-reference
