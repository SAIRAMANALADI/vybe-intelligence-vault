---
title: Webhook subscriptions | Better Stack Documentation
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://betterstack.com/docs/uptime/subscribing-to-status-updates/subscribing-with-webhooks/
published_at: '2026-07-20T22:26:05.568338+05:30'
collected_at: '2026-07-20T22:26:05.568368+05:30'
tags:
- agents
- frontend_ui
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:webhook-subscriptions-better-stack-documentation
first_seen: '2026-07-20T22:26:05.568368+05:30'
last_seen: '2026-07-20T22:26:05.568368+05:30'
last_checked: '2026-07-20T22:26:05.568368+05:30'
health_score: 100
---

# Webhook subscriptions | Better Stack Documentation

## Summary

- **Webhook Subscription Mechanism**: Automated HTTP POST requests are pushed to user-defined endpoints upon status updates, eliminating the need for polling; requires HTTPS endpoints and email confirmation for activation.

- **Payload Structure & Event Types**: JSON payloads include `meta` and `page` objects, with `event_type` (`incident`, `maintenance`, or `component_update`) determining the event-specific data; incidents/maintenance share fields like `id`, `name`, and `updates`, while component updates track status changes.

- **HTTP & Retry Policies**: Requests enforce 30s timeout, 2xx responses, and exponential backoff retries (up to 10 attempts); failures trigger deactivation and require reactivation via email confirmation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-20T22:26:05.568338+05:30

## Related Tags

- agents
- frontend_ui
- reddit
- web-crawled
- workflows

## Source

Original source: https://betterstack.com/docs/uptime/subscribing-to-status-updates/subscribing-with-webhooks/
