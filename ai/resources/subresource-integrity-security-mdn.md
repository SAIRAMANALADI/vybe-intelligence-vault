---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-01T21:53:14.215712+05:30'
collected_at: '2026-08-01T21:53:14.215728+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-01T21:53:14.215728+05:30'
last_seen: '2026-08-01T21:53:14.215728+05:30'
last_checked: '2026-08-01T21:53:14.215728+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) verifies fetched resources (e.g., from CDNs) by comparing cryptographic hashes (SHA-256, SHA-384, or SHA-512) embedded in the `integrity` attribute of `<script>` or `<link>` tags against the resource's actual content to detect tampering.

- **CORS Dependency**: SRI requires resources to be fetched with CORS-enabled modes (`anonymous` or `use-credentials`); `no-cors` mode is explicitly blocked to prevent integrity-based side-channel attacks (e.g., hash-guessing via error events).

- **Policy Enforcement**: The `Integrity-Policy` header enforces mandatory SRI for scripts/stylesheets, blocking or reporting violations via the Reporting API, while `Integrity-Policy-Report-Only` allows testing without enforcement.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-01T21:53:14.215712+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
