---
title: Limits Â· Cloudflare Workers docs
archive_category: automation-workflows
source_category: ai/rag
source_url: https://developers.cloudflare.com/workers/platform/limits/#cpu-time
resource_id: blog:limits-a-cloudflare-workers-docs
local_vault_path: ai/rag/limits-a-cloudflare-workers-docs.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- agents
- dataset
- rag
- reddit
- scripts
- web-crawled
- workflows
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Limits Â· Cloudflare Workers docs

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Plan-Specific Limits**:
  - **Free Plan**: 100K daily requests, 10ms CPU time per HTTP request, 50 subrequests/invocation, 100 Workers/account.
  - **Paid Plan**: Unlimited daily requests, 5min CPU time (configurable up to 300K ms), 10K subrequests/invocation, 500 Workers/account.

- **Resource Constraints**:
  - **Memory**: 128MB per isolate (includes JS heap and WebAssembly).
  - **Concurrent Connections**: Max 6 simultaneous outgoing connections per invocation (headers-waiting phase only)

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://developers.cloudflare.com/workers/platform/limits/#cpu-time

## Local Vault File

Path: [limits-a-cloudflare-workers-docs.md](../../ai/rag/limits-a-cloudflare-workers-docs.md)
