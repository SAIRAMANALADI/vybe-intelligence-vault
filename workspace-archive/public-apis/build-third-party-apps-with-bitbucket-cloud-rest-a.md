---
title: Build third-party apps with Bitbucket Cloud REST API | Bitbucket Cloud | Atlassian
  Support
archive_category: public-apis
source_category: ai/resources
source_url: https://support.atlassian.com/bitbucket-cloud/docs/build-third-party-apps-with-bitbucket-cloud-rest-api
resource_id: blog:build-third-party-apps-with-bitbucket-cloud-rest-a
local_vault_path: ai/resources/build-third-party-apps-with-bitbucket-cloud-rest-a.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Build third-party apps with Bitbucket Cloud REST API | Bitbucket Cloud | Atlassian Support

## Why This Is In The Archive

- Matched archive category: `Public APIs`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Rate Limits**: Bitbucket Cloud enforces API request limits of **5,000 requests per hour per OAuth consumer** or **unauthenticated requests**, and **1,000 requests per hour per authenticated user/IP**.
- **Reset Cycle**: Limits reset **hourly on a rolling basis** (not at UTC midnight), tracked per consumer/user/IP.
- **Best Practices**: Use **authenticated requests**, implement **exponential backoff** for retries, and cache responses to minimize API calls.

## Use Cases

- Agent tools integration
- Developer utility integrations
- Free REST API integrations

## Source

Original source URL: https://support.atlassian.com/bitbucket-cloud/docs/build-third-party-apps-with-bitbucket-cloud-rest-api

## Local Vault File

Path: [build-third-party-apps-with-bitbucket-cloud-rest-a.md](../../ai/resources/build-third-party-apps-with-bitbucket-cloud-rest-a.md)
