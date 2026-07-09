---
title: Subresource Integrity
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://w3c.github.io/webappsec/specs/subresourceintegrity/#integrity-metadata
published_at: '2026-07-10T04:28:08.852494+05:30'
collected_at: '2026-07-10T04:28:08.852507+05:30'
tags:
- agents
- hackernews
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity
first_seen: '2026-07-10T04:28:08.852507+05:30'
last_seen: '2026-07-10T04:28:08.852507+05:30'
last_checked: '2026-07-10T04:28:08.852507+05:30'
health_score: 100
---

# Subresource Integrity

## Summary

- **Integrity Verification Mechanism**: Defines an `integrity` attribute for HTML elements (`script`, `link`) and the `fetch()` API to validate fetched resources using cryptographic hashes (SHA-256/384/512), ensuring delivered content matches expected representations before execution/rendering.

- **Eligibility & Security Constraints**: Integrity checks are restricted to same-origin responses or CORS-enabled cross-origin requests; file:// URIs and non-secure contexts (HTTP) are excluded to prevent security bypasses or exposure of sensitive data via brute-force attacks.

- **Hash Agility & Priority**: Supports multiple hash functions per resource for future cryptographic agility, with user agents prioritizing stronger algorithms (e.g., SHA-512 over SHA-256) during validation; deprecated hashes are deprecated but may still validate responses.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-10T04:28:08.852494+05:30

## Related Tags

- agents
- hackernews
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://w3c.github.io/webappsec/specs/subresourceintegrity/#integrity-metadata
