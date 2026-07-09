---
title: Create an Incoming Webhook - Teams | Microsoft Learn
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook#add-an-incoming-webhook-to-a-teams-channel
published_at: '2026-07-10T04:30:11.434343+05:30'
collected_at: '2026-07-10T04:30:11.434356+05:30'
tags:
- agents
- reddit
- scripts
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:create-an-incoming-webhook-teams-microsoft-learn
first_seen: '2026-07-10T04:30:11.434356+05:30'
last_seen: '2026-07-10T04:30:11.434356+05:30'
last_checked: '2026-07-10T04:30:11.434356+05:30'
health_score: 100
---

# Create an Incoming Webhook - Teams | Microsoft Learn

## Summary

- **Deprecation & Migration**: Microsoft 365 Connectors are being deprecated; new workflows should use Power Automate's **Workflows app** or **notification bots** for scalable, secure integration with Teams channels.

- **Webhook Implementation**: Incoming Webhooks in Teams accept HTTPS POST requests with JSON payloads (≤28 KB) containing Message Cards or Adaptive Cards, supporting Markdown but not HTML, with rate limits (4 req/sec) mitigated via exponential backoff.

- **Workflows App**: Enables HTTP-triggered automation in Teams, posting Adaptive/Message Cards to channels/chats; requires owner assignment to prevent orphan flows, with support for private/shared channels in development.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-10T04:30:11.434343+05:30

## Related Tags

- agents
- reddit
- scripts
- web-crawled
- workflows
- youtube

## Source

Original source: https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook#add-an-incoming-webhook-to-a-teams-channel
