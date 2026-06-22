---
title: Build third-party apps with Bitbucket Cloud REST API | Bitbucket Cloud | Atlassian
  Support
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://support.atlassian.com/bitbucket-cloud/docs/build-third-party-apps-with-bitbucket-cloud-rest-api
published_at: '2026-06-22T11:29:42.006156+05:30'
collected_at: '2026-06-22T11:29:42.006170+05:30'
tags:
- web-crawled
status: active
resource_id: blog:build-third-party-apps-with-bitbucket-cloud-rest-a
first_seen: '2026-06-22T11:29:42.006170+05:30'
last_seen: '2026-06-22T11:29:42.006170+05:30'
last_checked: '2026-06-22T11:29:42.006170+05:30'
health_score: 100
---

# Build third-party apps with Bitbucket Cloud REST API | Bitbucket Cloud | Atlassian Support

## Summary

- **Rate Limits**: Bitbucket Cloud enforces a **rate limit of 1,000 requests per hour per OAuth consumer** (or per user for Basic Auth). Anonymous requests are limited to **60 requests per hour**.

- **Rate Limit Cycling**: Limits reset **hourly**, aligned with the **UTC hour** (e.g., 12:00–13:00 UTC). Exceeding limits returns a `429 Too Many Requests` response.

- **Mitigation Strategies**: Use **OAuth consumers** for higher limits, implement **exponential backoff** for retries, and cache responses to reduce API calls. Monitor headers (`X-RateLimit-*`) for remaining quota.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-22T11:29:42.006156+05:30

## Related Tags

- web-crawled

## Source

Original source: https://support.atlassian.com/bitbucket-cloud/docs/build-third-party-apps-with-bitbucket-cloud-rest-api
