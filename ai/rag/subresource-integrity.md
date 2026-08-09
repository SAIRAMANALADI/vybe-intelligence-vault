---
title: Subresource Integrity
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://w3c.github.io/webappsec/specs/subresourceintegrity/
published_at: '2026-08-09T19:02:06.650746+05:30'
collected_at: '2026-08-09T19:02:06.650757+05:30'
tags:
- agents
- hackernews
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity
first_seen: '2026-08-09T19:02:06.650757+05:30'
last_seen: '2026-08-09T19:02:06.650757+05:30'
last_checked: '2026-08-09T19:02:06.650757+05:30'
health_score: 100
---

# Subresource Integrity

## Summary

- **Integrity Verification Mechanism**: Defines an `integrity` attribute (using cryptographic hashes like SHA-256/SHA-384/SHA-512) for `<script>`, `<link>`, and `fetch()` to validate fetched resource content against expected digests, mitigating CDN/server compromise risks.

- **Eligibility & Security Constraints**: Integrity checks apply only to same-origin or CORS-enabled responses; non-secure contexts (HTTP) provide no security guarantees despite integrity metadata.

- **Hash Agility & Priority**: Supports multiple hash functions per resource for cryptographic agility, with user agents prioritizing stronger hashes (e.g., SHA-512 over SHA-256) and deprecating weaker ones over time.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T19:02:06.650746+05:30

## Related Tags

- agents
- hackernews
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://w3c.github.io/webappsec/specs/subresourceintegrity/
