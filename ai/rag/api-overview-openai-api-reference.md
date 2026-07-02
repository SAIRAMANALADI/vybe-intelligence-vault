---
title: API Overview | OpenAI API Reference
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/api-reference
published_at: '2026-07-02T15:10:14.735353+05:30'
collected_at: '2026-07-02T15:10:14.735362+05:30'
tags:
- models
- openai
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:api-overview-openai-api-reference
first_seen: '2026-07-02T15:10:14.735362+05:30'
last_seen: '2026-07-02T15:10:14.735362+05:30'
last_checked: '2026-07-02T15:10:14.735362+05:30'
health_score: 100
---

# API Overview | OpenAI API Reference

## Summary

- **API Surface & Authentication**: OpenAI API offers three primary surfaces—**Responses** (for model/text/audio/image interactions), **Realtime API** (low-latency WebRTC/WebSocket/SIP audio sessions), and **Administration** (user/project/key management). Authentication uses **HTTP Bearer tokens** (API keys or short-lived tokens via workload identity federation), with optional `OpenAI-Organization` and `OpenAI-Project` headers for multi-tenant setups.

- **Debugging & Rate Limits**: API responses include headers like `x-request-id` (unique request ID), `openai-processing-ms` (latency), and rate-limit metrics (`x-ratelimit-*`). Custom request IDs can be set via `X-Client-Request-Id` (max 512 ASCII chars) for troubleshooting, especially when server headers are unavailable.

- **Backwards Compatibility**: OpenAI maintains stability via **semantic versioning** for client libraries and REST API (`v1`), but model outputs/prompting behavior may change between snapshots. Backwards-compatible changes include new optional parameters, resources, or properties, while breaking changes are documented in the [changelog](https://platform.openai.com/api/docs/changelog).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T15:10:14.735353+05:30

## Related Tags

- models
- openai
- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://platform.openai.com/docs/api-reference
