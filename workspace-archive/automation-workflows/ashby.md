---
title: Ashby
archive_category: automation-workflows
source_category: ai/resources
source_url: https://developers.ashbyhq.com
resource_id: blog:ashby
local_vault_path: ai/resources/ashby.md
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

# Ashby

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Ashby API**: Requires OAuth 2.0 authentication via `Authorization: Bearer <token>`; supports RESTful CRUD operations for job postings, candidates, and hiring pipelines with JSON payloads.
- **Webhooks**: Configured via `POST /webhooks` with HMAC-SHA256 signature validation for event-driven integrations (e.g., candidate status updates, job feed changes).
- **Custom Careers Page**: Built using Ashby’s job feed API endpoints (`/jobs`, `/departments`) with embedded JavaScript for dynamic job lis

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://developers.ashbyhq.com

## Local Vault File

Path: [ashby.md](../../ai/resources/ashby.md)
