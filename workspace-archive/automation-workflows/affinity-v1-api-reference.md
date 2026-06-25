---
title: Affinity V1 API Reference
archive_category: automation-workflows
source_category: ai/rag
source_url: https://api-docs.affinity.co
resource_id: blog:affinity-v1-api-reference
local_vault_path: ai/rag/affinity-v1-api-reference.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- dataset
- hackernews
- rag
- scripts
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Affinity V1 API Reference

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Authentication**: Supports HTTP Basic Auth (API key as password) and Bearer Auth (API key as token), with IP allowlisting for enhanced security.
- **Rate Limits**: Enforces per-minute, monthly (tier-dependent: 100K for Scale/Advanced, unlimited for Enterprise), and concurrent request limits, returning `429` on exceeding thresholds.
- **Error Handling**: Standard RESTful responses with JSON payloads; errors include `401` (Unauthorized), `403` (Forbidden), `422` (Unprocessable Entity), and `42

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://api-docs.affinity.co

## Local Vault File

Path: [affinity-v1-api-reference.md](../../ai/rag/affinity-v1-api-reference.md)
