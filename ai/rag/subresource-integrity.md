---
title: Subresource Integrity
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://w3c.github.io/webappsec/specs/subresourceintegrity/#integrity-metadata
published_at: '2026-09-02T04:25:23.222883+05:30'
collected_at: '2026-09-02T04:25:23.222899+05:30'
tags:
- agents
- hackernews
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity
first_seen: '2026-09-02T04:25:23.222899+05:30'
last_seen: '2026-09-02T04:25:23.222899+05:30'
last_checked: '2026-09-02T04:25:23.222899+05:30'
health_score: 100
---

# Subresource Integrity

## Summary

- **Integrity Verification Mechanism**: Defines an `integrity` attribute for HTML elements (`script`, `link`) and the `fetch()` API to validate fetched resources using cryptographic hashes (SHA-256, SHA-384, SHA-512), ensuring content matches expected digests before execution or rendering.

- **Eligibility & Security Constraints**: Integrity checks are restricted to same-origin responses or CORS-enabled cross-origin requests; file-scheme URLs and non-secure contexts (HTTP) are excluded to prevent security bypasses or data leakage.

- **Hash Agility & Deprecation**: Supports multiple hash functions per resource for cryptographic agility, with user agents prioritizing stronger hashes; deprecated hashes are phased out while maintaining backward compatibility by treating unsupported hashes as absent metadata.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-02T04:25:23.222883+05:30

## Related Tags

- agents
- hackernews
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://w3c.github.io/webappsec/specs/subresourceintegrity/#integrity-metadata
