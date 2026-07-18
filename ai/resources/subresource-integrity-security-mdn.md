---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-07-18T01:13:19.746356+05:30'
collected_at: '2026-07-18T01:13:19.746369+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-07-18T01:13:19.746369+05:30'
last_seen: '2026-07-18T01:13:19.746369+05:30'
last_checked: '2026-07-18T01:13:19.746369+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) verifies fetched resources (e.g., from CDNs) by enforcing cryptographic hash matching (`sha256`, `sha384`, or `sha512`) via the `integrity` attribute in `<script>`/`<link>` tags to prevent supply chain attacks.

- **CORS Dependency**: SRI requires `crossorigin="anonymous"` for cross-origin resources to function; `no-cors` mode explicitly blocks SRI enforcement to mitigate hash-based side-channel attacks (e.g., inferring resource content via load success/failure).

- **Policy Enforcement**: The `Integrity-Policy` header (or `Integrity-Policy-Report-Only`) mandates `integrity` attributes for scripts/styles, blocking violations (or reporting them) via structured directives (`blocked-destinations`, `sources`, `endpoints`) and generating `integrity-violation` reports via the Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-18T01:13:19.746356+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
