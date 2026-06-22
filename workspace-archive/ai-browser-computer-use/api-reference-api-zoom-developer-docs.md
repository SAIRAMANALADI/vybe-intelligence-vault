---
title: API Reference - API - Zoom Developer Docs
archive_category: ai-browser-computer-use
source_category: ai/agents
source_url: https://developers.zoom.us/docs/api
resource_id: blog:api-reference-api-zoom-developer-docs
local_vault_path: ai/agents/api-reference-api-zoom-developer-docs.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- agents
- dataset
- reddit
- web-crawled
- workflows
- youtube
selection_reason:
- Valuable developer reference
---

# API Reference - API - Zoom Developer Docs

## Why This Is In The Archive

- Matched archive category: `AI Browser and Computer Use`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: dataset
- Selection reasons:
  - Valuable developer reference

## Summary

- **Authentication**: Access tokens are required for all API requests, obtained via OAuth 2.0 or server-to-server OAuth 2.0, valid for 1 hour with refresh mechanisms.
- **API Structure**: Requests are sent to `https://api.zoom.us/v2/` with HTTP methods (GET/POST/PATCH/PUT/DELETE) and access token in the `Authorization` header.
- **Rate Limits & Pagination**: API enforces QPS/daily rate limits (HTTP 429 on exceedance); pagination uses `next_page_token` and `page_size` parameters for large dataset

## Use Cases

- Browser web automation
- GUI action orchestration
- Agent computer control

## Source

Original source URL: https://developers.zoom.us/docs/api

## Local Vault File

Path: [api-reference-api-zoom-developer-docs.md](../../ai/agents/api-reference-api-zoom-developer-docs.md)
