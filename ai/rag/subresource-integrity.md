---
title: Subresource Integrity
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://w3c.github.io/webappsec/specs/subresourceintegrity/
published_at: '2026-08-08T12:59:38.037699+05:30'
collected_at: '2026-08-08T12:59:38.037708+05:30'
tags:
- agents
- hackernews
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity
first_seen: '2026-08-08T12:59:38.037708+05:30'
last_seen: '2026-08-08T12:59:38.037708+05:30'
last_checked: '2026-08-08T12:59:38.037708+05:30'
health_score: 100
---

# Subresource Integrity

## Summary

- **Integrity Verification Mechanism**: Defines an `integrity` attribute for HTML elements (`script`, `link`) and the `fetch()` API to validate fetched resources using cryptographic hashes (SHA-256/384/512), ensuring content matches expected digests before execution/rendering.

- **Eligibility & Security Constraints**: Integrity checks are restricted to same-origin responses or CORS-enabled cross-origin requests; non-secure contexts (e.g., HTTP) receive no security guarantees, and deprecated hash functions are phased out for agility.

- **Metadata Format & Validation**: Integrity metadata follows CSP Level 2 syntax (e.g., `sha384-H8BRh8j48O9oYatfu5AZzq6A9RINhZO5H16dQZngK7T62em8MUt1FLm52t+eX6xO`), with user agents prioritizing strongest supported hash functions for validation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T12:59:38.037699+05:30

## Related Tags

- agents
- hackernews
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://w3c.github.io/webappsec/specs/subresourceintegrity/
