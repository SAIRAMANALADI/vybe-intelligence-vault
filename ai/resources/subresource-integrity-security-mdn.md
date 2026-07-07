---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-07-07T23:08:43.132777+05:30'
collected_at: '2026-07-07T23:08:43.132790+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-07-07T23:08:43.132790+05:30'
last_seen: '2026-07-07T23:08:43.132790+05:30'
last_checked: '2026-07-07T23:08:43.132790+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) verifies fetched resources (e.g., from CDNs) by comparing cryptographic hashes (e.g., SHA-384) embedded in the `integrity` attribute of `<script>`/`<link>` tags against the resource's actual content to detect tampering.

- **Security Constraints**: Browsers enforce SRI only for cross-origin resources with `crossorigin="anonymous"`; `no-cors` requests are explicitly blocked to prevent hash-based side-channel attacks (e.g., inferring resource content via load success/failure).

- **Policy Enforcement**: The `Integrity-Policy` header blocks or reports violations for scripts/styles without integrity metadata or loaded in `no-cors` mode, while `Integrity-Policy-Report-Only` logs violations without blocking for gradual deployment.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-07T23:08:43.132777+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
