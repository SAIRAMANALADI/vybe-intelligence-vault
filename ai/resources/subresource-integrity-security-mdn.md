---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-09T08:11:44.387904+05:30'
collected_at: '2026-08-09T08:11:44.387921+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-09T08:11:44.387921+05:30'
last_seen: '2026-08-09T08:11:44.387921+05:30'
last_checked: '2026-08-09T08:11:44.387921+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash verification of fetched resources (e.g., from CDNs) to detect tampering by comparing the resource's hash against a precomputed value embedded in the `<script>` or `<link>` tag.

- **Security Constraints**: SRI requires `crossorigin="anonymous"` for resources to enforce integrity checks; `no-cors` mode explicitly blocks SRI to prevent side-channel attacks (e.g., hash-based content inference via load success/failure).

- **Policy Enforcement**: The `Integrity-Policy` header blocks or reports violations for scripts/stylesheets lacking integrity metadata, with `Report-Only` mode enabling safe deployment; violations generate structured `integrity-violation` reports via the Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T08:11:44.387904+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
