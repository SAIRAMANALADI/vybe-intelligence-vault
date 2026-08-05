---
title: Webhook subscriptions | Better Stack Documentation
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://betterstack.com/docs/uptime/subscribing-to-status-updates/subscribing-with-webhooks/
published_at: '2026-08-06T01:39:05.168759+05:30'
collected_at: '2026-08-06T01:39:05.168773+05:30'
tags:
- agents
- frontend_ui
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:webhook-subscriptions-better-stack-documentation
first_seen: '2026-08-06T01:39:05.168773+05:30'
last_seen: '2026-08-06T01:39:05.168773+05:30'
last_checked: '2026-08-06T01:39:05.168773+05:30'
health_score: 100
---

# Webhook subscriptions | Better Stack Documentation

## Summary

- **Webhook Subscription Process**: Subscribers configure HTTPS endpoints to receive automated HTTP POST requests for status updates (incidents, maintenance, component changes) after confirming via email; payloads include `meta`, `page`, and event-specific objects (e.g., `incident`, `maintenance`).

- **Payload Schema & Validation**: All webhooks use JSON with shared `meta` (unsubscribe link, docs) and `page` (status indicator, description) objects; event types (`incident`, `maintenance`, `component_update`) dictate nested data structures, with strict 30s timeout and 2xx response requirements.

- **Retry & Failure Handling**: Failed deliveries trigger exponential backoff retries (up to 10 attempts), followed by deactivation and email alerts; reactivation requires endpoint fixes and re-subscription, with idempotency recommended for duplicate handling.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-06T01:39:05.168759+05:30

## Related Tags

- agents
- frontend_ui
- reddit
- web-crawled
- workflows

## Source

Original source: https://betterstack.com/docs/uptime/subscribing-to-status-updates/subscribing-with-webhooks/
