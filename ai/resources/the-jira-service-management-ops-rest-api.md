---
title: The Jira Service Management ops REST API
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.atlassian.com/cloud/jira/service-desk-ops/rest/v2/intro/#jira-cloud-platform-apis
published_at: '2026-06-22T10:57:41.040026+05:30'
collected_at: '2026-06-22T10:57:41.040035+05:30'
tags:
- web-crawled
- workflows
status: active
resource_id: blog:the-jira-service-management-ops-rest-api
first_seen: '2026-06-22T10:57:41.040035+05:30'
last_seen: '2026-06-22T10:57:41.040035+05:30'
last_checked: '2026-06-22T10:57:41.040035+05:30'
health_score: 100
---

# The Jira Service Management ops REST API

## Summary

- **Jira Service Management Operations REST API** provides endpoints for managing team operations, including alerts, schedules, teams, integrations, and policies, with structured access via `/jsm/ops/api/{cloudId}/{version}/{domain}` URLs.
- **Authentication** supports Basic Auth for REST APIs, OAuth 2.0 (3LO) for integrations, and scoped access for Forge apps, with URI patterns like `https://api.atlassian.com/ex/jira/{customerId}/jsm/ops/api/{api}`.
- **Response Handling** enforces ISO 8601 date formats, pagination (via `offset`/`size`), and expansion (via `expand` query parameter) for optimized payloads, with error responses structured as `{ "errors": [...] }`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-22T10:57:41.040026+05:30

## Related Tags

- web-crawled
- workflows

## Source

Original source: https://developer.atlassian.com/cloud/jira/service-desk-ops/rest/v2/intro/#jira-cloud-platform-apis
