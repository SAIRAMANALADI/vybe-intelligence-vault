---
title: The Jira Service Management ops REST API
archive_category: automation-workflows
source_category: ai/resources
source_url: https://developer.atlassian.com/cloud/jira/service-desk-ops/rest/v2/intro/#jira-cloud-platform-apis
resource_id: blog:the-jira-service-management-ops-rest-api
local_vault_path: ai/resources/the-jira-service-management-ops-rest-api.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# The Jira Service Management ops REST API

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Jira Service Management Operations REST API** provides endpoints for managing team operations, including alerts, schedules, teams, integrations, and policies, with structured access via `/jsm/ops/api/{cloudId}/{version}/{domain}` URLs.
- **Authentication** supports Basic Auth for REST APIs, OAuth 2.0 (3LO) for integrations, and scoped access for Forge apps, with URI patterns like `https://api.atlassian.com/ex/jira/{customerId}/jsm/ops/api/{api}`.
- **Response Handling** enforces ISO 8601 dat

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://developer.atlassian.com/cloud/jira/service-desk-ops/rest/v2/intro/#jira-cloud-platform-apis

## Local Vault File

Path: [the-jira-service-management-ops-rest-api.md](../../ai/resources/the-jira-service-management-ops-rest-api.md)
