---
title: Webhook subscriptions | Better Stack Documentation
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://betterstack.com/docs/uptime/subscribing-to-status-updates/subscribing-with-webhooks/
published_at: '2026-07-19T14:15:08.514721+05:30'
collected_at: '2026-07-19T14:15:08.514734+05:30'
tags:
- agents
- frontend_ui
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:webhook-subscriptions-better-stack-documentation
first_seen: '2026-07-19T14:15:08.514734+05:30'
last_seen: '2026-07-19T14:15:08.514734+05:30'
last_checked: '2026-07-19T14:15:08.514734+05:30'
health_score: 100
---

# Webhook subscriptions | Better Stack Documentation

## Summary

- **Webhook Subscription Mechanism**: Automated HTTP POST requests sent to user-defined HTTPS endpoints upon status updates (incidents, maintenance, component changes), eliminating the need for polling; requires email confirmation and supports unsubscribe links in payload metadata.

- **Payload Structure & Event Types**: JSON payloads include shared `meta` and `page` objects, with event-specific data (`incident`, `maintenance`, or `component_update`); incidents/maintenance contain `id`, `name`, timestamps, and update arrays, while component updates track status transitions (`old_status` → `new_status`).

- **Delivery & Retry Policies**: Endpoints must respond with 2xx within 30 seconds; failures trigger exponential backoff retries (up to 10 attempts), after which the webhook is deactivated and requires reactivation via email confirmation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-19T14:15:08.514721+05:30

## Related Tags

- agents
- frontend_ui
- reddit
- web-crawled
- workflows

## Source

Original source: https://betterstack.com/docs/uptime/subscribing-to-status-updates/subscribing-with-webhooks/
