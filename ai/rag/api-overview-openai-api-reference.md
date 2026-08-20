---
title: API Overview | OpenAI API Reference
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/api-reference
published_at: '2026-08-09T21:30:54.601334+05:30'
collected_at: '2026-08-09T21:30:54.601356+05:30'
tags:
- agents
- models
- openai
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:api-overview-openai-api-reference
first_seen: '2026-08-09T21:30:54.601356+05:30'
last_seen: '2026-08-09T21:30:54.601356+05:30'
last_checked: '2026-08-09T21:30:54.601356+05:30'
health_score: 100
---

# API Overview | OpenAI API Reference

## Summary

- **API Surface Selection**: OpenAI API offers three primary surfaces: **Responses** (for direct model interactions, tool use, and multi-modal inputs), **Realtime API** (for low-latency audio/voice via WebRTC/WebSocket/SIP), and **Administration** (for org-level workflows like user/project management and API key governance).

- **Authentication Mechanisms**: Supports **API keys** (standard or admin-scoped), **short-lived tokens via workload identity federation**, and **HTTP Bearer auth** (`Authorization: Bearer <KEY>`). Headers `OpenAI-Organization` and `OpenAI-Project` specify resource ownership; revocations propagate within seconds.

- **Debugging & Rate Limits**: Response headers include `x-request-id` (unique ID), `openai-processing-ms` (latency), and rate-limit metrics (`x-ratelimit-*`). Custom request IDs can be set via `X-Client-Request-Id` (max 512 ASCII chars). Backwards-compatible changes (e.g., new optional params) are documented in the [changelog](https://platform.openai.com/api/docs/changelog).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T21:30:54.601334+05:30

## Related Tags

- agents
- models
- openai
- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://platform.openai.com/docs/api-reference
