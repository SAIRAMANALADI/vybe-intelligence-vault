---
title: API keys - Algolia
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://www.algolia.com/doc/guides/security/api-keys/#creating-and-managing-api-keys
published_at: '2026-07-08T01:57:41.780719+05:30'
collected_at: '2026-07-08T01:57:41.780733+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:api-keys-algolia
first_seen: '2026-07-08T01:57:41.780733+05:30'
last_seen: '2026-07-08T01:57:41.780733+05:30'
last_checked: '2026-07-08T01:57:41.780733+05:30'
health_score: 100
---

# API keys - Algolia

## Summary

- **API Key Types & ACLs**: Admin API keys grant full access, search-only keys enable read operations, while other keys (Monitoring/Usage/Analytics) are restricted to specific APIs; ACLs define granular permissions (e.g., `search`, `addObject`, `deleteIndex`).

- **Secured API Key Mechanics**: Derived from main keys, secured keys inherit restrictions (e.g., rate limits, index access) but cannot exceed base key permissions; they are ephemeral, generated via `generateSecuredApiKey`, and ideal for temporary/user-specific access.

- **Key Management & Risks**: Main keys should be long-lived but rotated periodically; revocation is critical for leaked keys (via `deleteApiKey` or base key revocation), with up to 5,000 keys supported and 1,000 deleted keys stored for restoration.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-08T01:57:41.780719+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://www.algolia.com/doc/guides/security/api-keys/#creating-and-managing-api-keys
