---
title: Webhook subscriptions | Better Stack Documentation
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://betterstack.com/docs/uptime/subscribing-to-status-updates/subscribing-with-webhooks/
published_at: '2026-08-01T21:55:18.520474+05:30'
collected_at: '2026-08-01T21:55:18.520492+05:30'
tags:
- agents
- frontend_ui
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:webhook-subscriptions-better-stack-documentation
first_seen: '2026-08-01T21:55:18.520492+05:30'
last_seen: '2026-08-01T21:55:18.520492+05:30'
last_checked: '2026-08-01T21:55:18.520492+05:30'
health_score: 100
---

# Webhook subscriptions | Better Stack Documentation

## Summary

- **Webhook Subscription Process**: Automated HTTP POST requests are sent to a specified HTTPS endpoint upon status page updates (incidents, maintenance, component changes), requiring email confirmation for activation and supporting idempotent handling via unique `id` fields.

- **Payload Structure & Validation**: JSON payloads include standardized `meta` and `page` objects, with event-specific data (`incident`, `maintenance`, or `component_update`), strict 30-second response timeouts, and mandatory headers (`Content-Type: application/json`, `User-Agent: BetterStack-StatusPage/1.0`).

- **Retry & Failure Handling**: Exponential backoff retries (up to 10 attempts) with automatic deactivation after persistent failures, requiring reactivation via email confirmation; best practices emphasize immediate 2xx responses and background processing to avoid timeouts.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-01T21:55:18.520474+05:30

## Related Tags

- agents
- frontend_ui
- reddit
- web-crawled
- workflows

## Source

Original source: https://betterstack.com/docs/uptime/subscribing-to-status-updates/subscribing-with-webhooks/
